#lang whalesong

;; whalesong version of play-pong-sound

(provide play-pong-sound)

(require whalesong/image)

;; Make a sound (and return true)
;; what is one of "paddle", "wall", "missed", or "none"
;; note: IE doesn't like .wav's but .mp3s are supported everywhere
(define (play-pong-sound what)
  (begin
    (cond
      [(string=? what "paddle") (play-sound "sounds/bloop3.mp3")]
      [(string=? what "wall") (play-sound "sounds/bloop2.mp3")]
      [(string=? what "missed") (play-sound "sounds/missed1.mp3")]
      [else true] ;; we remain silent if it's not a sound we recognize
    )
    true))
