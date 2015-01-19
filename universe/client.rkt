#lang racket

(provide play-pong)

(require 2htdp/universe)
(require 2htdp/image)
(require htdp/testing)
(require "../common/dbgmsg.rkt")
(require "../common/shared.rkt")
(require "../common/pong-sound.rkt")

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

;; Launch the Client.
;; playerName is a string e.g. "Matthias", "Darren"
;; playerType is a string of "left", "right", or "spectator"
;; host is the hostname of the server
(define (play-pong playerName playerType host) 
  (if SHOW-PAD
    (big-bang initial-world
      [name (string-append playerName "::" playerType)]
      [register host]
      [on-receive (lambda (world msg) (handle-msg playerType world msg))]
      ;;           [on-tick handle-tick]
      [on-draw (lambda (world) (draw-pong-world playerType world))]
      [on-pad (lambda (world key) (handle-key-press playerType world key))]
      [on-release (lambda (world key) (handle-key-release playerType world key))]
      [stop-when quitting? draw-goodbye])
    (big-bang initial-world
      [name (string-append playerName "::" playerType)]
      [register host]
      [on-receive (lambda (world msg) (handle-msg playerType world msg))]
      ;;            [on-tick handle-tick]
      [on-draw (lambda (world) (draw-pong-world playerType world))]
      [on-key (lambda (world key) (handle-key-press playerType world key))]
      [on-release (lambda (world key) (handle-key-release playerType world key))]
      [stop-when quitting? draw-goodbye])))

;; handles incoming messages
(define (handle-msg player-type world msg)
  ;; we've sent the entire world state as the message
  (begin
    (dbgmsg (string-append player-type " got msg: " (pong-world-status world) "\n"))
    msg))

(define (quitting? world)
  (string=? (pong-world-status world) "quitting"))

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
  
(define (draw-pong-world player-type world)
  (begin 
    (dbgmsg (string-append player-type " drawing " (pong-world-status world) "\n"))
    (play-sound (pong-world-sound world))
    (cond
      [(string=? (pong-world-status world) "connecting")
       (display-msg "Waiting for connection" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "in-play") 
       (place-image BALL 
                    (position-x (ball-pos (pong-world-ball world))) 
                    (position-y (ball-pos (pong-world-ball world)))
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "left-player-serves")
       (display-msg "Hit space to serve" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "right-player-serves")
       (display-msg "Hit space to serve" 36
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "left-player-won")
       (display-msg "You won!!!" 48
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "right-player-won")
       (display-msg "You won!!!" 48
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [else 
        (begin
          (dbgmsg (string-append "unrecognized status in draw: \"" (pong-world-status world) "\"\n"))
          (draw-idle-game world))])))
    
(define (draw-paddle paddle background)
  (underlay/xy
    background
    (position-x (paddle-pos paddle)) 
    (position-y (paddle-pos paddle)) 
    PADDLE))
  
(define PADDLE (freeze  (rectangle PADDLE-THICKNESS PADDLE-HEIGHT "solid" "white")))

;; Pong-World key -> Pong-World
;; Handle a key press
;; We just send the appropriate keys to the server
(define (handle-key-press player-type world a-key)
(begin
  (dbgmsg (string-append player-type " handle key press: " a-key "\n"))
  (cond
    ;; send "q" and "s" to the server for the left player
    [(and (string=? player-type "left") (or (key=? a-key "w") (key=? a-key "s")))
       (begin
         (dbgmsg (string-append player-type " sending key press: " a-key "\n"))
         (make-package world (make-key-msg player-type "press" a-key)))]
    ;; send "up" and "down" to the server for the left player
    [(and (string=? player-type "right") (or (key=? a-key "up") (key=? a-key "down")))
       (begin
         (dbgmsg (string-append player-type " sending key press: " a-key "\n"))
         (make-package world (make-key-msg player-type "press" a-key)))]
    [else world])))

;; Pong-World key -> Pong-World
;; Handle a key release
;; We just send the appropriate keys to the server
(define (handle-key-release player-type world a-key)
  (cond
    ;; send "q" and "s" to the server for the left player
    [(and (string=? player-type "left") 
          (or (key=? a-key "w")(key=? a-key "s")(key=? a-key "escape")
              (and (string=? (pong-world-status world) "left-player-serves") (key=? a-key " ")))) 
       (make-package world (make-key-msg player-type "release" a-key))]
    ;; send "up" and "down" to the server for the right player
    [(and (string=? player-type "right") 
          (or (key=? a-key "up")(key=? a-key "down")(key=? a-key "escape")
              (and (string=? (pong-world-status world) "right-player-serves") (key=? a-key " ")))) 
       (make-package world (make-key-msg player-type "release" a-key))]
    [else world]))
