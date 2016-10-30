#lang racket

(provide play-pong-sound)

;;
;; if sound won't play on your hardware you
;; can disable it requiring this module instead
;; of the pong-pong-sound one.
;;

(define (play-pong-sound what) true)
