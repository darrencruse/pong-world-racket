#lang whalesong

(provide play-sound)

;;
;; if sound won't play on your hardware you
;; can disable it requiring this modile instead
;; of the sound-on one.
;;

(define (play-sound what) true)
