#lang racket

;; This module implements the server for Pongiverse

(provide serve-pong)
 
(require 2htdp/universe
  htdp/testing
  "../pongparts/dbgmsg.rkt"
  "../pongparts/constants.rkt"
  "../pongparts/structs.rkt"
  "../pongparts/moving.rkt"
  "../pongparts/events.rkt")

#| -----------------------------------------------------------------------------
The server is responsible for: 
-- starting the game 
-- collecting and broadcasting information about the movement of the ball and paddles
-- ending games

   We pass our entire "world state" (repeatedly) from server to client.
   For the client this world state is just used for drawing.
   It's the server that modifies the world state for *both* clients.
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

;;
;; main entry point
;;
;; start the server by evaluating in drracket:
;;   (serve-pong)
;;
;; or from the command line:
;; $ racket
;; > (enter! "pongserver.rkt")
;; > (serve-pong)
;;
;; (or see run.rkt to test the game on a single machine)
;;

(define (serve-pong) 
  (universe initial-server-state 
            (on-new handle-server-connect)
            (on-msg handle-server-msg)
            (on-tick handle-server-tick)
            (on-disconnect handle-server-disconnect)))

;; ServerState IWorld Sexpr -> Bundle
;; handle a key-msg from a client
;; this is server state, the iworld that sent it, and the key-msg that was sent 
;; it extracts the world state and invokes the same function 
;; that the (non-networked) pong-world game uses.
(define (handle-server-msg s iw msg)
  (begin 
    (dbgmsg (string-append "got key-msg: " 
              (key-msg-press-or-release msg) (key-msg-key msg) "\n"))
    (let ([game-state
      (cond 
        [(string=? (key-msg-press-or-release msg) "press")
         (handle-key-down (server-state-game-state s) (key-msg-key msg))]
        [(string=? (key-msg-press-or-release msg) "release")
         (handle-key-up (server-state-game-state s) (key-msg-key msg))]
        [else 
           (begin 
             (dbgmsg "went to default key-msg handler!\n")
             (server-state-game-state s))])])
      (make-bundle
        (server-state-set-game-state s game-state)
        (mail-all-players s game-state)
        empty))))
                
;; handle-server-tick is our universe tick handler
;; it extracts the world state and invokes the same function 
;; that the (non-networked) pong-world game uses.
(define (handle-server-tick s)
  (begin
  (dbgmsg "handle-server-tick\n")
  (let 
    ([game-state (handle-tick (server-state-game-state s))])    
    (make-bundle
      (server-state-set-game-state s game-state)
      (mail-all-players s game-state)
      empty))))

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

;; -------------------------------------------------------------------
;; Initial Server State
;;   The server is started with an initial status of "joining"

(define initial-server-state 
  (server-state 
    "joining" 
    empty
    initial-world))
