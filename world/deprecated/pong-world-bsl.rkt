;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname pong-world-bsl) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))

;; This was the original version written in a single file using BSL
;; I consider it deprecated since I've switched to #lang racket now.

(require 2htdp/universe)
(require 2htdp/image)
(require 2htdp/batch-io)
(require "common/pong-sound.rkt")

;; Display debug messages to the console?
(define SHOW-DEBUG-MSGS false)

;; The size of the playfield window
;; screen-scale = 1 is small for a laptop but fits my HP Stream 7 Windows tablet well
;; screen-scale = 1.5 is pretty good on a medium sized laptop
;; screen-scale = 2 actually fits on the macbook pro
(define screen-scale 1.5)
(define SCREEN-WIDTH (* 830 screen-scale))
(define SCREEN-HEIGHT (* 440 screen-scale))

;; Should we show this pad controller "overlay"?
;; note we use the same keyboard keys regardless
;; esp. consider setting to false like on this small windows tablet
(define SHOW-PAD true)
(define PAD-HEIGHT (round (* SCREEN-HEIGHT 0.2)))

;; These are really the "playfield" width and height
;; omitting space for the pad controller "overlay" at the bottom
(define WIDTH SCREEN-WIDTH)
(define HEIGHT (if SHOW-PAD (- SCREEN-HEIGHT PAD-HEIGHT) SCREEN-HEIGHT))

(define CENTER-HORZ (round (/ WIDTH 2)))
(define CENTER-VERT (round (/ HEIGHT 2)))

;; We use a bit of "gutter"/"margin" around the edges:
(define MARGIN 10)

;; We draw walls at the top and bottom
(define WALL-HEIGHT 16)

;; How tall are the paddles?
(define PADDLE-HEIGHT 90)

;; How thick are the paddles?
(define PADDLE-THICKNESS 16)

;; How fast to move the paddles up or down while the up/down keys are pressed
(define PADDLE-SPEED 15)

;; How big is the ball?
(define BALL-SIZE 16)

;; What's the initial speed in pixels per tick?
(define INITIAL-SPEED 28)

;; What the maximum speed?
(define MAXIMUM-SPEED 68)

;; Top and bottom of the useable playfield
(define TOP WALL-HEIGHT)
(define BOTTOM (- HEIGHT WALL-HEIGHT))

;; Left and right of the useable playfield
;; (these are the coordinates of the paddle faces)
(define LEFT (+ PADDLE-THICKNESS MARGIN))
(define RIGHT (- WIDTH (+ PADDLE-THICKNESS MARGIN)))

;; The direction of movement as a unit velocity vector
;; dx and dy in the range [0,1]
;; dx and dy are multiplied by speed to compute the # of pixels to move
(define-struct direction [dx dy])

;; Paddle direction straight up
(define UP-DIR (make-direction 0 -1))

;; Paddle direction straight down
(define DOWN-DIR (make-direction 0 1))

;; the ball
;; the ball's current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(define-struct ball [pos dir speed])

;; each paddle
;; we've chosen to match the ball's structure despite the paddle only moving vertically
;; for consistency with the ball movement code
;; (plus it might be fun to experiment with paddles that can move forward and back at some point?)
;; each paddles current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(define-struct paddle [pos dir speed])

;; the state of our pong world:
;; status = "left-player-serves", "right-player-serves", "in-play", "left-player-won", "right-player-won", "quitting"
;; the ball (a structure - see above)
;; the left and right paddle y position
;; the left and right players score 
(define-struct pong-world [status ball left-paddle right-paddle left-score right-score])

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

(define (main world)
  (if SHOW-PAD
    (big-bang world
            [name "Pong World"]
            [on-tick handle-tick]
            [to-draw draw-pong-world]
            [on-pad handle-key-down]
            [on-release handle-key-up]
            [on-mouse handle-mouse]
            [stop-when quitting? draw-goodbye])
    (big-bang world
            [name "Pong World"]
            [on-tick handle-tick]
            [to-draw draw-pong-world]
            [on-key handle-key-down]
            [on-release handle-key-up]
            [on-mouse handle-mouse]
            [stop-when quitting? draw-goodbye])))

;; Number Number Number -> Number
;; compute the new coordinate given the current coordinate, direction of movement, and speed.
;; current is the x or y coordinate by itself
;; dir is the dx or dy part of the Direction in the range [0,1]
;; speed is the in pixels

(check-expect (move-coord 0 0 0) 0)
(check-expect (move-coord 100 1 10) 110)
(check-expect (move-coord 100 -1 10) 90)

(define (move-coord current dir speed)
  ;; round to hold coordinates to simple integers
  (round (+ current (* dir speed))))

;; Ball -> Ball
;; move the ball according to it's direction and speed

(check-expect (move-ball (make-ball (make-posn 100 100) (make-direction -0.5 0.5) 2))
                 (make-ball (make-posn 99 101) (make-direction -0.5 0.5) 2))

(define (move-ball ball)
  (make-ball (make-posn 
               (move-coord (posn-x (ball-pos ball)) (direction-dx (ball-dir ball)) (ball-speed ball))
               (move-coord (posn-y (ball-pos ball)) (direction-dy (ball-dir ball)) (ball-speed ball)))
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
  (make-paddle (make-posn 
                 (posn-x (paddle-pos paddle))
                 (move-paddle-vert 
                   (posn-y (paddle-pos paddle)) 
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
         (if (play-sound "wall") (make-ball (make-posn x TOP)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball)
       ;; else we're moving down - have we hit the bottom?
       (if (> y BOTTOM)
         ;; just flip to moving up 
         ;; note I have not computed a truly accurate x intercept
         (if (play-sound "wall") (make-ball (make-posn x BOTTOM)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball))) 

;; Constrain the ball between TOP and BOTTOM, reversing
;; the direction of motion if necessary
;; Returns the ball
(define (vertical-ball-bounce ball)
  (vertical-bounce ball
          (posn-x (ball-pos ball))
          (posn-y (ball-pos ball))
          (direction-dx (ball-dir ball))
          (direction-dy (ball-dir ball))
          (ball-speed ball)))

;; Pong-World Ball -> Pong-World
;; Set the ball on the given pong-world 
(define (pong-world-set-ball world ball)
  (make-pong-world
     (pong-world-status world)
     ball
     (pong-world-left-paddle world)
     (pong-world-right-paddle world)
     (pong-world-left-score world)
     (pong-world-right-score world)))

;; Pong-World String -> Pong-World
;; Set the status on the given pong-world 
(define (pong-world-set-status world status)
  (make-pong-world
     status
     (pong-world-ball world)
     (pong-world-left-paddle world)
     (pong-world-right-paddle world)
     (pong-world-left-score world)
     (pong-world-right-score world)))

;; Pong-World String -> Pong-World
;; score a point for the specified side
;; side is one of "left", "right"
(define (score-a-point world side)
  (if (play-sound "missed")
    ;; I let the player who lost the point serve next
    (if (eq? side "left")
      (make-pong-world    
        ;; games are 9 points
        (if (< (pong-world-left-score world) 8) "right-player-serves" "left-player-won")
        (serve-ball -0.5)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (+ (pong-world-left-score world) 1)
        (pong-world-right-score world))
      (make-pong-world    
        (if (< (pong-world-right-score world) 8) "left-player-serves" "right-player-won")
        (serve-ball 0.5)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (pong-world-left-score world)
        (+ (pong-world-right-score world) 1)))
    world))
 
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
           ;; yup - just flip to moving right 
           ;; note I have not computed a truly accurate y intercept
           (if (play-sound "paddle") (pong-world-set-ball world 
                (make-ball (make-posn LEFT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection left-paddle-y y))
                  (vary-speed-by-intersection speed left-paddle-y y))) world)
           ;; nope they missed
           (score-a-point world "right"))
         ;; we haven't hit the left
         world)
       ;; else we're moving right - have we hit the right?
       (if (> x RIGHT)
         ;; did they block it?
         (if (and (> y (- right-paddle-y MARGIN)) (< y (+ right-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - just flip to moving left 
           ;; note I have not computed a truly accurate y intercept
           (if (play-sound "paddle") (pong-world-set-ball world 
                (make-ball (make-posn RIGHT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection right-paddle-y y))
                  (vary-speed-by-intersection speed right-paddle-y y))) world)
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
                     (posn-y (paddle-pos (pong-world-left-paddle world))) 
                     (posn-y (paddle-pos (pong-world-right-paddle world))) x y dx dy speed))

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
          (posn-x (ball-pos (pong-world-ball world)))
          (posn-y (ball-pos (pong-world-ball world)))
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

;; Paddle Posn -> Paddle
;; sets the position of the specified paddle
(define (set-paddle-pos paddle pos)
  (make-paddle 
    pos
    (paddle-dir paddle)
    (paddle-speed paddle)))

;; set the specified paddle as left-paddle of the specified pong-world 
(define (set-left-paddle world left-paddle)
  (make-pong-world
    (pong-world-status world)
    (pong-world-ball world)
    left-paddle 
    (pong-world-right-paddle world) 
    (pong-world-left-score world)
    (pong-world-right-score world)))

;; set the specified paddle as right-paddle of the specified pong-world
(define (set-right-paddle world right-paddle)
  (make-pong-world
    (pong-world-status world)
    (pong-world-ball world)
    (pong-world-left-paddle world) 
    right-paddle 
    (pong-world-left-score world)
    (pong-world-right-score world)))

;; set the left paddle of the specified pong-world moving in the specified direction and speed
(define (set-left-moving world dir speed)
  (set-left-paddle world (set-paddle-moving (pong-world-left-paddle world) dir speed)))

;; set the right paddle of the specified pong-world moving in the specified direction 
(define (set-right-moving world dir speed)
  (set-right-paddle world (set-paddle-moving (pong-world-right-paddle world) dir speed)))

(define initial-posn (make-posn CENTER-HORZ CENTER-VERT))

;; Makes an initialized ball moving from center screen
;; vertically flat with direction dx
(define (serve-ball initial-dx)
  (make-ball initial-posn
     (make-direction initial-dx 0)
     INITIAL-SPEED))
                                
(define initial-world (make-pong-world 
                        "left-player-serves"
                        (serve-ball 0.5)
                        (make-paddle (make-posn MARGIN (- CENTER-VERT (/ PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0) 
                        (make-paddle (make-posn RIGHT (- CENTER-VERT (/ PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0)
                        0
                        0))

;; 
(check-expect (quitting? (pong-world-set-status initial-world "quitting")) true)
(check-expect (quitting? (pong-world-set-status initial-world "in-play")) false)

(define (quitting? world)
  (eq? (pong-world-status world) "quitting"))

(define (draw-goodbye world)
   (display-msg "Goodbye!!" 48
      (- CENTER-HORZ 200) CENTER-VERT
      (draw-idle-game world)))

(define (draw-bg w h c)
  (empty-scene w h c))

(define (draw-net w h bg)
    (scene+line bg 
       (/ w 2) 0 (/ w 2) h (make-pen "white" 14 "dot" "butt" "bevel")))

(define (draw-wall w)
  (rectangle w WALL-HEIGHT "solid" "white"))

(define (draw-playfield-bg w h)
  (overlay/align "left" "top"
    (draw-net WIDTH HEIGHT
      (overlay/align "right" "top"
        (draw-wall w)
        (overlay/align "right" "bottom"
          (draw-wall w)
          (draw-bg WIDTH HEIGHT "black"))))
    (draw-bg SCREEN-WIDTH SCREEN-HEIGHT "gray")))

;; We render the playfield background just once for performance sake
;; (freeze makes a bitmap so the background is truly drawn just once)
(define PLAYFIELD-BG (freeze (draw-playfield-bg WIDTH HEIGHT)))

(define (draw-ball size) (rectangle size size "solid" "white"))

(define BALL (freeze (draw-ball BALL-SIZE)))

(define (draw-idle-game world)
  (draw-paddle (pong-world-left-paddle world)
    (draw-paddle (pong-world-right-paddle world)
      (place-image
        (text (number->string (pong-world-left-score world)) 98 "white")
        (- CENTER-HORZ 60) 80
        (place-image
          (text (number->string (pong-world-right-score world)) 98 "white")
          (+ CENTER-HORZ 60) 80
          PLAYFIELD-BG)))))

(define (display-msg msg font-size x y scene)
  (place-image (text/font msg font-size "white"
             "impact" 'system 'normal 'light #f)
                    x y
                    scene))
  
(define (draw-pong-world world)
  (if (dbgmsg (string-append "draw " (number->string (random 10)) "\n"))
  (cond 
    [(eq? (pong-world-status world) "in-play") 
       (place-image BALL 
                    (posn-x (ball-pos (pong-world-ball world))) 
                    (posn-y (ball-pos (pong-world-ball world)))
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "left-player-serves")
       (display-msg "Hit space to serve" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "right-player-serves")
       (display-msg "Hit space to serve" 36
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "left-player-won")
       (display-msg "You won!!!" 48
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "right-player-won")
       (display-msg "You won!!!" 48
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))])
PLAYFIELD-BG))

(define (handle-tick world)
  (if (eq? (pong-world-status world) "in-play")
    ;; the paddles and the ball moves during a point:
    (check-paddle-block 
      (make-pong-world 
        (pong-world-status world)
        (vertical-ball-bounce (move-ball (pong-world-ball world)))
        (move-paddle (pong-world-left-paddle world))
        (move-paddle (pong-world-right-paddle world))
        (pong-world-left-score world)
        (pong-world-right-score world)))
    ;; let the paddles still move between points: 
    (make-pong-world 
      (pong-world-status world)
      (pong-world-ball world)
      (move-paddle (pong-world-left-paddle world))
      (move-paddle (pong-world-right-paddle world))
      (pong-world-left-score world)
      (pong-world-right-score world))))
    
(define (draw-paddle paddle background)
  (underlay/xy
    background
    (posn-x (paddle-pos paddle)) 
    (posn-y (paddle-pos paddle)) 
    PADDLE))
  
(define PADDLE (freeze  (rectangle PADDLE-THICKNESS PADDLE-HEIGHT "solid" "white")))

;; serve simply sets the status to "in-play"
;; (the ball is already set with the proper direction and speed)
(define (serve world)
  (make-pong-world 
    "in-play"
    (pong-world-ball world)
    (pong-world-left-paddle world)
    (pong-world-right-paddle world)
    (pong-world-left-score world)
    (pong-world-right-score world))) 

; Pong-World key -> Pong-World
; set the paddles moving according to which key is pressed 

(check-expect (handle-key-down initial-world "w")  (set-left-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "s")  (set-left-moving initial-world DOWN-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "up")  (set-right-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "down")  (set-right-moving initial-world DOWN-DIR PADDLE-SPEED))

(define (handle-key-down world a-key)
  (cond
    [(key=? a-key "w") 
       (set-left-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "s")
       (set-left-moving world DOWN-DIR PADDLE-SPEED)]
    [(key=? a-key "up") 
       (set-right-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "down") 
       (set-right-moving world DOWN-DIR PADDLE-SPEED)]
    [else world]))

; Pong-World key -> Pong-World
; stops the paddles moving, or serves the ball, according to which key is released 

(check-expect (handle-key-up initial-world "w")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "s")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "up")  (set-right-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "down")  (set-right-moving initial-world UP-DIR 0))

(define (handle-key-up world a-key)
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
        (cond
          ;; space shouldn't do anything during play:
          [(eq? (pong-world-status world) "in-play") world]
          ;; but otherwise it serves the ball:
          [(or (eq? (pong-world-status world) "left-player-serves")
               (eq? (pong-world-status world) "right-player-serves"))
            (serve world)]
          ;; otherwise start a new game
          [else initial-world])]
    [else world]))

;; Pong-World Number Number String -> Pong-World
;; Added mouse handling as an experiment since racket will run on windows tablets
;; And touch events do come through as mouse events
;; Unfortunately it's not multi-touch so things don't work well if both players
;; are trying to "swipe" their paddles at the same time.  Turns out fairly useable
;; though if the players simply tap to position their paddles.

(check-expect (handle-mouse initial-world 100 100 "drag") (serve initial-world))

(define (handle-mouse world x y mouseevent)
  (if (or (string=? mouseevent "drag") (string=? mouseevent "button-down"))
     (cond 
        [(or (eq? (pong-world-status world) "left-player-won")
             (eq? (pong-world-status world) "right-player-won"))
           initial-world]
        [(and (eq? (pong-world-status world) "left-player-serves")
              (< x CENTER-HORZ))
           (serve world)] 
        [(and (eq? (pong-world-status world) "right-player-serves")
              (> x CENTER-HORZ))
           (serve world)]
        [else (if (> x CENTER-HORZ)
          ;; they clicked on the right set the position of the right paddle
          (set-right-paddle world (make-paddle (make-posn RIGHT (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0))
          ;; they clicked on the left set the position of the right paddle
          (set-left-paddle world (make-paddle (make-posn MARGIN (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0)))])      
   world))

;; print msg to stdout (and return true)
(define (dbgmsg msg) 
  (if SHOW-DEBUG-MSGS
    (or (string? (write-file 'stdout msg)) true)
    true))
