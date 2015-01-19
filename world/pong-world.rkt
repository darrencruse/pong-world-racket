#lang racket

(require 2htdp/universe
  2htdp/image
  htdp/testing
  "../common/dbgmsg.rkt"
  "../common/constants.rkt"
  "../common/structs.rkt"
  "../common/structs-immutable-world.rkt"
  "../common/drawing.rkt"
  "../common/moving.rkt"
  "../common/events.rkt"
  "../common/sound.rkt")

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
      