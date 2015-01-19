#lang whalesong

(provide play-sound)

;;
;; if sound won't play on your hardware you
;; can disable it requiring this modile instead
;; of the pong-sound one.
;;

(define (play-sound what) true)
