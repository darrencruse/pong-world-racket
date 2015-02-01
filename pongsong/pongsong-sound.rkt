#lang whalesong

;; whalesong version of play-pong-sound

(provide play-pong-sound)

(require whalesong/image)

;; Make a sound (and return true)
;; what is one of "paddle", "wall", "missed", or "none"
(define (play-pong-sound what)
  (begin
    (cond
      [(string=? what "paddle") (play-sound "sounds/bloop3.wav")]
      [(string=? what "wall") (play-sound "sounds/bloop2.wav")]
      [(string=? what "missed") (play-sound "sounds/missed1.wav")]
      [else true] ;; we remain silent if it's not a sound we recognize
    )
    true))
