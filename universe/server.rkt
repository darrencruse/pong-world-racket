#lang racket

;; This module implements the server for Pongiverse

(provide serve-pong)
 
(require 2htdp/universe)
(require htdp/testing) ;; for check-expect
(require "../common/shared.rkt")
(require "../common/dbgmsg.rkt")

#| -----------------------------------------------------------------------------
The server is responsible for: 
-- starting the game 
-- collecting and broadcasting information about the movement of the ball and paddles
-- ending games
|#

;
;    ____       U  ___ u   _   _        ____                  __     __   U _____ u    ____       ____     U _____ u 
;  U|  _"\ u     \/"_ \/  | \ |"|    U /"___|u      ___       \ \   /"/u  \| ___"|/ U |  _"\ u   / __"| u  \| ___"|/ 
;  \| |_) |/     | | | | <|  \| |>   \| |  _ /     |_"_|       \ \ / //    |  _|"    \| |_) |/  <\___ \/    |  _|"   
;   |  __/   .-,_| |_| | U| |\  |u    | |_| |       | |        /\ V /_,-.  | |___     |  _ <     u___) |    | |___   
;   |_|       \_)-\___/   |_| \_|      \____|     U/| |\u     U  \_/-(_/   |_____|    |_| \_\    |____/>>   |_____|  
;   ||>>_          \\     ||   \\,-.   _)(|_   .-,_|___|_,-.    //         <<   >>    //   \\_    )(  (__)  <<   >>  
;  (__)__)        (__)    (_")  (_/   (__)__)   \_)-' '-(_/    (__)       (__) (__)  (__)  (__)  (__)      (__) (__) 
;

;; A Player has
;; type is a string of "left", "right", or "spectator"
;; name is their name
;; IP is the IP they've connected from 
(struct player [type name ip])

;; ServerState is a structure with
;; status is a string of "joining" or "playing"
;; players is a list of the IWorlds for all players (including left, right, and spectators)
;; game-state is the current state of the game as a PongWorld structure
(struct server-state [status players game-state])

;; Functional updaters for the server state
(define (server-state-set-status s status)
  (server-state status (server-state-players s) (server-state-game-state s)))
(define (server-state-set-players s players)
  (server-state (server-state-status s) players (server-state-game-state s)))
(define (server-state-set-game-state s game-state)
  (server-state (server-state-status s) (server-state-players s) game-state))

;; -------------------------------------------------------------------
;; Initial World State
;;   The big-bang is started with the initial world
;;   state *before* the first message has been received from the 
;;   server.  So we use this initial world state while "connecting"
;;   i.e. while waiting for that first message.

(define initial-world (create-initial-world 
                        "connection" 
                        (make-ball (make-position CENTER-HORZ CENTER-VERT)
                          (make-direction 1 0) 1)))

(define initial-server-state 
  (server-state 
    "joining" 
    empty
    initial-world))

;; How fast to move the paddles up or down while the up/down keys are pressed
(define PADDLE-SPEED 15)

;; What's the initial speed in pixels per tick?
(define INITIAL-SPEED 28)

;; What the maximum speed?
(define MAXIMUM-SPEED 68)

;; Paddle direction straight up
(define UP-DIR (make-direction 0 -1))

;; Paddle direction straight down
(define DOWN-DIR (make-direction 0 1))

;; we adapt racket's generated setter functions so that we get back the world
;; this is just to ease the transition to/from the more functional/immutable
;; style in which we always return the "modified copy".

;; mutably set a field using the provided setter, and get back the changed instance
(define (mutate-and-return setter instance field-val)
  (begin
    (apply setter (list instance field-val))
    instance))

(define (pong-world-set-status world status)
   (mutate-and-return set-pong-world-status! world status)) 
(define (pong-world-set-ball world ball)
   (mutate-and-return set-pong-world-ball! world ball)) 
(define (pong-world-set-left-paddle world left-paddle)
   (mutate-and-return set-pong-world-left-paddle! world left-paddle))
(define (pong-world-set-right-paddle world right-paddle)
   (mutate-and-return set-pong-world-right-paddle! world right-paddle))
(define (pong-world-set-left-score world left-score)
   (mutate-and-return set-pong-world-left-score! world left-score))
(define (pong-world-set-right-score world right-score)
   (mutate-and-return set-pong-world-right-score! world right-score))
(define (pong-world-set-sound world sound-name)
   (mutate-and-return set-pong-world-sound! world sound-name))

;;
;; main entry point
;;
;; start the game by evaluating in drracket:
;;   (main initial-world)
;;
;; or from the command line:
;; $ racket
;; > (enter! "pong-world.rkt")
;; > (main initial-world)
;;

;;(check-expect (main initial-world) initial-world)

(define (serve-pong) 
  (universe initial-server-state 
            (on-new handle-server-connect)
            (on-msg handle-server-msg)
            (on-tick handle-server-tick)
            (on-disconnect handle-server-disconnect)))

;; ServerState -> ServerState
;; Set the statuses correctly based on the current number of players
(define (set-status-by-num-players s)
  (let
    ([gs (server-state-game-state s)]
    [players (server-state-players s)])
    (server-state
      (if (>= (length players) 2) "playing" "joining")
      players
      (pong-world-set-status gs
        (cond
          [(and 
             (string=? (pong-world-status gs) "connecting")
             (>= (length players) 2))
           "left-player-serves"]
          [(and 
             (not (string=? (pong-world-status gs) "connecting"))
             (< (length players) 2))
           "connecting"]
          [else (pong-world-status gs)])))))

;; ServerState IWorld -> ServerState
;; Add a newly connected player
(define (add-player s iw)
  (set-status-by-num-players 
    (server-state-set-players s (cons iw (server-state-players s)))))
  
;; ServerState IWorld -> ServerState
;; Remove a disconnected player
(define (remove-player s iw)
  (set-status-by-num-players 
    (server-state-set-players s (remq iw (server-state-players s)))))
  
;; ServerState IWorld -> Bundle
;; adds a newly connected player
;; mails them back the initial game state for them to draw
(define (handle-server-connect s iw)
  (let ([ss (add-player s iw)])
    (make-bundle
      ss 
      (mail-all-players s (server-state-game-state ss))
      empty)))

;; ServerState IWorld -> Bundle
;; handles loss of a client
(define (handle-server-disconnect s iw)
  (let ([ss (remove-player s iw)])
    (make-bundle
      ss 
      (mail-all-players s (server-state-game-state ss))
      (list iw))))

;; ServerState PongWorld -> (list mail)
;; Mail all the players the current game state
(define (mail-all-players s world)
  (map 
    (lambda (iw)
      (make-mail iw world))
    (server-state-players s)))

;; ServerState IWorld Sexpr -> Bundle
;; handle a key-msg from a client
;; this is server state, the iworld that sent it, and the key-msg that was sent 
(define (handle-server-msg s iw msg)
  (begin 
    (dbgmsg (string-append "got key-msg: " 
              (key-msg-press-or-release msg) (key-msg-key msg) "\n"))
    (let ([game-state
      (cond 
        [(string=? (key-msg-press-or-release msg) "press")
         (handle-key-press (server-state-game-state s) (key-msg-key msg))]
        [(string=? (key-msg-press-or-release msg) "release")
         (handle-key-release (server-state-game-state s) (key-msg-key msg))]
        [else 
           (begin 
             (dbgmsg "went to default key-msg handler!\n")
             (server-state-game-state s))])])
      (make-bundle
        (server-state-set-game-state s game-state)
        (mail-all-players s game-state)
        empty))))

;; Number Number Number -> Number
;; compute the new coordinate given the current coordinate, direction of movement, and speed.
;; current is the x or y coordinate by itself
;; dir is the dx or dy part of the Direction in the range [0,1]
;; speed is the in pixels

(check-expect (move-coord 0 0 0) 0)
(check-expect (move-coord 100 1 10) 110)
(check-expect (move-coord 100 -1 10) 90)

;;(define (move-coord current dir speed)
  ;; round to hold coordinates to simple integers
;;  (round (+ current (* dir speed))))

(define (move-coord current dir speed)
  ;; round to hold coordinates to simple integers
  (let ([newpos (round (+ current (* dir speed)))])
    (begin
      (dbgmsg (string-append "current: " (number->string current)
                         " dir: " (number->string dir)
                         "speed: " (number->string speed)
                         " new: " (number->string newpos) "\n"))
      newpos)))

;; Ball -> Ball
;; move the ball according to it's direction and speed

(check-expect (move-ball (make-ball (make-position 100 100) (make-direction -0.5 0.5) 2))
                 (make-ball (make-position 99 101) (make-direction -0.5 0.5) 2))

(define (move-ball ball)
  (make-ball (make-position 
               (move-coord (position-x (ball-pos ball)) (direction-dx (ball-dir ball)) (ball-speed ball))
               (move-coord (position-y (ball-pos ball)) (direction-dy (ball-dir ball)) (ball-speed ball)))
               (ball-dir ball)
               (ball-speed ball)))
      
;; Number Number Number -> Number
;; Compute the new y coordinate after moving the paddle in direction dir at speed speed
;; This also constrains the paddle within the top and bottom walls

(check-expect (move-paddle-vert 100 0.5 2) 101)
(check-expect (move-paddle-vert (- BOTTOM PADDLE-HEIGHT 2) 0.75 12) (- BOTTOM PADDLE-HEIGHT 2))
(check-expect (move-paddle-vert (+ TOP 2) -0.75 12) (+ TOP 2))

(define (move-paddle-vert current-y dir speed)
  ;; note: we round to hold coordinates to simple integers
  (min (max (round (+ current-y (* dir speed))) (+ TOP 2)) (- BOTTOM PADDLE-HEIGHT 2))) 

;; Paddle -> Paddle
;; move the paddle according to it's direction and speed

(define (move-paddle paddle)
  (make-paddle (make-position 
                 (position-x (paddle-pos paddle))
                 (move-paddle-vert 
                   (position-y (paddle-pos paddle)) 
                   (direction-dy (paddle-dir paddle)) 
                   (paddle-speed paddle)))
               (paddle-dir paddle)
               (paddle-speed paddle)))

;; Ball Number Number Number Number Number -> Ball
;; move the ball according to it's direction and speed 
;; bouncing off the top or bottom walls 
(define (vertical-bounce ball x y dx dy speed)
    ;; if we're moving up
    (if (< dy 0)
       ;; and we've hit the top
       (if (< y TOP)
         ;; just flip to moving down 
         ;; note I have not computed a truly accurate x intercept
         (make-ball (make-position x TOP)
                    (make-direction dx (- 0 dy))
                    speed)
         ball)
       ;; else we're moving down - have we hit the bottom?
       (if (> y BOTTOM)
         ;; just flip to moving up 
         ;; note I have not computed a truly accurate x intercept
         (make-ball (make-position x BOTTOM)
                    (make-direction dx (- 0 dy))
                    speed)
         ball))) 

;; Constrain the ball between TOP and BOTTOM, reversing
;; the direction of motion if necessary
;; Returns the ball
(define (vertical-ball-bounce ball)
  (vertical-bounce ball
          (position-x (ball-pos ball))
          (position-y (ball-pos ball))
          (direction-dx (ball-dir ball))
          (direction-dy (ball-dir ball))
          (ball-speed ball)))

;; Pong-World String -> Pong-World
;; score a point for the specified side
;; side is one of "left", "right"
(define (score-a-point world side)
    ;; I let the player who lost the point serve next
    (if (string=? side "left")
      (pong-world-set-sound (make-pong-world    
        ;; games are 9 points
        (if (< (pong-world-left-score world) 8) "right-player-serves" "left-player-won")
        (make-ball initial-position (make-direction -0.5 0) INITIAL-SPEED)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (+ (pong-world-left-score world) 1)
        (pong-world-right-score world)) "missed")
      (pong-world-set-sound (make-pong-world    
        (if (< (pong-world-right-score world) 8) "left-player-serves" "right-player-won")
        (make-ball initial-position (make-direction 0.5 0) INITIAL-SPEED)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (pong-world-left-score world)
        (+ (pong-world-right-score world) 1))
        "missed")))
 
;; Pong-World Number Number Number Number Number Number Number -> Pong-World
;; bounce the ball off the left or right paddles (otherwise score a point)
;; world is the current world
;; left-paddle-y is the y coordinate of (the top of) the left paddle
;; right-paddle-y is the y coordinate of (the top of) the right paddle
;; x is the x coordinate of the ball.
;; y is the y coordinate of the ball.
;; dx is the x direction of the ball in [0,1]
;; dy is the y direction of the ball in [0,1]
;; speed is the speed of the ball

(define (horizontal-bounce-y world left-paddle-y right-paddle-y x y dx dy speed)
    ;; if we're moving left
    (if (< dx 0)
       ;; and we've hit the left
       (if (< x LEFT)
         ;; did they block it?
         (if (and (> y (- left-paddle-y MARGIN)) (< y (+ left-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - flip to moving right (and play a sound) 
           ;; note I have not computed a truly accurate y intercept
           (pong-world-set-sound (pong-world-set-ball world 
                (make-ball (make-position LEFT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection left-paddle-y y))
                  (vary-speed-by-intersection speed left-paddle-y y))) "paddle")
           ;; nope they missed
           (score-a-point world "right"))
         ;; we haven't hit the left
         world)
       ;; else we're moving right - have we hit the right?
       (if (> x RIGHT)
         ;; did they block it?
         (if (and (> y (- right-paddle-y MARGIN)) (< y (+ right-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - flip to moving left (and play a sound) 
           ;; note I have not computed a truly accurate y intercept
           (pong-world-set-sound (pong-world-set-ball world 
                (make-ball (make-position RIGHT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection right-paddle-y y))
                  (vary-speed-by-intersection speed right-paddle-y y))) "paddle")
         ;; nope they missed
         (score-a-point world "left"))
       ;; we haven't hit the right
       world)))
    
;; Pong-World Number Number Number Number Number -> Pong-World
;; bounce the ball off the left or right paddles (otherwise score a point)
;; world is the current world
;; x is the x coordinate of the ball.
;; y is the y coordinate of the ball.
;; dx is the x direction of the ball in [0,1]
;; dy is the y direction of the ball in [0,1]
;; speed is the speed of the ball

(define (horizontal-bounce world x y dx dy speed)
  (horizontal-bounce-y world 
                     (position-y (paddle-pos (pong-world-left-paddle world))) 
                     (position-y (paddle-pos (pong-world-right-paddle world))) x y dx dy speed))

;; The farther the ball hits from the center of the paddle the steeper the deflection
(define (vary-dy-by-intersection paddle-y intersect-y)
  (/ (- intersect-y (+ paddle-y (/ PADDLE-HEIGHT 2))) PADDLE-HEIGHT))

;; The farther the ball hits from the center of the paddle the faster it goes
(define (vary-speed-by-intersection current-speed paddle-y intersect-y)
  ;; not sure why, but when speed gets too fast everything gets choppy:
  (min MAXIMUM-SPEED 
       ;; round to keep speed to a simple integer (speed in pixels)
       (round (+ current-speed 
                 (* (/ (abs (- intersect-y (+ paddle-y (/ PADDLE-HEIGHT 2)))) 
                    (/ PADDLE-HEIGHT 2)) 3)))))

;; Check if the paddle blocked the ball otherwise score the appropriate player.
;; Returns the world
(define (check-paddle-block world)
  (horizontal-bounce world           
          (position-x (ball-pos (pong-world-ball world)))
          (position-y (ball-pos (pong-world-ball world)))
          (direction-dx (ball-dir (pong-world-ball world)))
          (direction-dy (ball-dir (pong-world-ball world)))
          (ball-speed (pong-world-ball world))))

;; Paddle Direction Number -> Paddle
;; set the paddle moving in the specified direction and speed
;; returns a paddle with the specified direction and speed (but the original position)
(define (set-paddle-moving paddle dir speed)
  (make-paddle 
    (paddle-pos paddle)
    dir
    speed))

;; Paddle Position -> Paddle
;; sets the position of the specified paddle
(define (set-paddle-pos paddle pos)
  (make-paddle 
    pos
    (paddle-dir paddle)
    (paddle-speed paddle)))

;; set the left paddle of the specified pong-world moving in the specified direction and speed
(define (set-left-moving world dir speed)
  (pong-world-set-left-paddle world (set-paddle-moving (pong-world-left-paddle world) dir speed)))

;; set the right paddle of the specified pong-world moving in the specified direction 
(define (set-right-moving world dir speed)
  (pong-world-set-right-paddle world (set-paddle-moving (pong-world-right-paddle world) dir speed)))

(define initial-position (make-position CENTER-HORZ CENTER-VERT))
           
(define (handle-server-tick s)
  (begin
  (dbgmsg "handle-server-tick\n")
  (let 
    ([game-state (handle-tick (server-state-game-state s))])    
    (make-bundle
      (server-state-set-game-state s game-state)
      (mail-all-players s game-state)
      empty))))

(define (handle-tick world)
  (if (string=? (pong-world-status world) "in-play")
    ;; the paddles and the ball moves during a point:
    (check-paddle-block
      (let
        ([original-ball-dy (direction-dy (ball-dir (pong-world-ball world)))]
        [new-ball (vertical-ball-bounce (move-ball (pong-world-ball world)))])
        (pong-world-set-sound
         (make-pong-world 
          (pong-world-status world)
          new-ball
          (move-paddle (pong-world-left-paddle world))
          (move-paddle (pong-world-right-paddle world))
          (pong-world-left-score world)
          (pong-world-right-score world))
         (if (eq? original-ball-dy (direction-dy (ball-dir new-ball))) "none" "wall"))))
    ;; let the paddles still move between points: 
    (make-pong-world 
      (pong-world-status world)
      (pong-world-ball world)
      (move-paddle (pong-world-left-paddle world))
      (move-paddle (pong-world-right-paddle world))
      (pong-world-left-score world)
      (pong-world-right-score world))))
    
;; Makes an initialized ball moving from center screen
;; vertically flat with direction dx
(define (serve-ball world dx speed)
  (pong-world-set-status 
    (pong-world-set-ball world 
      (make-ball initial-position
        (make-direction dx 0)
        speed)) 
    "in-play"))

; Pong-World key -> Pong-World
; set the paddles moving according to which key is pressed 

(check-expect (handle-key-press initial-world "w")  (set-left-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-press initial-world "s")  (set-left-moving initial-world DOWN-DIR PADDLE-SPEED))
(check-expect (handle-key-press initial-world "up")  (set-right-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-press initial-world "down")  (set-right-moving initial-world DOWN-DIR PADDLE-SPEED))

(define (handle-key-press world a-key)
  (cond
    [(key=? a-key "w") 
       (set-left-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "s")
       (set-left-moving world DOWN-DIR PADDLE-SPEED)]
    [(key=? a-key "up") 
       (set-right-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "down") 
       (set-right-moving world DOWN-DIR PADDLE-SPEED)]
    [else 
       (begin
         (dbgmsg "went to default for handle-key-press")
         world)]))

; Pong-World key -> Pong-World
; stops the paddles moving, or serves the ball, according to which key is released 

(check-expect (handle-key-release initial-world "w")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-release initial-world "s")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-release initial-world "up")  (set-right-moving initial-world UP-DIR 0))
(check-expect (handle-key-release initial-world "down")  (set-right-moving initial-world UP-DIR 0))

(define (handle-key-release world a-key)
  (cond
    [(or (key=? a-key "w") (key=? a-key "s"))
      ;; stop paddle by setting speed to zero (dir doesn't matter)
      (set-left-moving world UP-DIR 0)]
    [(or (key=? a-key "up") (key=? a-key "down"))
      ;; stop paddle by setting speed to zero (dir doesn't matter)
      (set-right-moving world UP-DIR 0)]
    ;; not sure why but escape didn't work (on mac at least) in handle-key-down
    [(key=? a-key "escape") 
      (pong-world-set-status world "quitting")]
    [(key=? a-key " ")
      (begin
        (dbgmsg (string-append "its a space: " 
                  (pong-world-status world) "\n"))
        (cond
          ;; space shouldn't do anything during play:
          [(string=? (pong-world-status world) "in-play") world]
          ;; but otherwise it serves the ball:
          [(string=? (pong-world-status world) "left-player-serves")
            (serve-ball world 0.5 INITIAL-SPEED)]
          [(string=? (pong-world-status world) "right-player-serves")
            (serve-ball world -0.5 INITIAL-SPEED)]
          ;; otherwise prepare to start a new game
          [else (pong-world-set-status initial-world "left-player-serves")]))]
    [else 
      (begin
        (dbgmsg "in handle-key-release default")
        world)]))

