#lang whalesong

(require whalesong/world
  whalesong/image
  whalesong/js
  "./pongparts/dbgmsg.rkt"
  "./pongparts/constants.rkt"
  "./pongparts/structs.rkt"
  "./pongparts/drawing.rkt"
  "./pongparts/moving.rkt"
  "./pongparts/events.rkt"
  "./pongparts/sound.rkt")

;;
;; main entry point
;;
;; start the game by evaluating in drracket:
;;   (main initial-world)
;;
;; or from the command line:
;; $ racket
;; > (enter! "pong.rkt")
;; > (main initial-world)
;;

(define (main world)
    (big-bang world
        [on-tick handle-tick]
        [to-draw draw-pong-world]
        [on-key handle-key-down]
        [on-release handle-key-up]
        [on-mouse handle-mouse]
        ;; whalesong doesn't support the second argument to stop-when (I'd done "draw-goodbye")
        [stop-when (lambda (world) (string=? (pong-world-status world) "quitting"))]))

(define initial-world (create-initial-world "left-player-serves" 
                      (make-ball (make-position CENTER-HORZ CENTER-VERT)
                        (make-direction 0.5 0)
                        INITIAL-SPEED)))

;; run the game
(main initial-world)

