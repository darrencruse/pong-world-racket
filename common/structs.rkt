#lang racket

(provide 
 (struct-out position) 
 (struct-out direction)
 UP-DIR
 DOWN-DIR
 (struct-out ball)
 (struct-out paddle)
 (struct-out key-msg))

;; The standard Posn structure is not serializable (so make our own)
(struct position [x y]
  #:prefab
  #:constructor-name make-position)

;; The direction of movement as a unit velocity vector
;; dx and dy in the range [0,1]
;; dx and dy are multiplied by speed to compute the # of pixels to move
;; #:prefab structs are serializable
(struct direction [dx dy]
  #:prefab
  #:constructor-name make-direction)

;; Paddle direction straight up
(define UP-DIR (make-direction 0 -1))

;; Paddle direction straight down
(define DOWN-DIR (make-direction 0 1))

;; the ball
;; the ball's current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(struct ball [pos dir speed] 
  #:prefab
  #:constructor-name make-ball)

;; each paddle
;; we've chosen to match the ball's structure despite the paddle only moving vertically
;; for consistency with the ball movement code
;; (plus it might be fun to experiment with paddles that can move forward and back at some point?)
;; each paddles current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(struct paddle [pos dir speed]
  #:prefab
  #:constructor-name make-paddle)

;; A message when a key is pressed or released.
;; which-player is the string "left" or "right"
;; press-or-release is the string "press" or "release"
;; key is the KeyEvent (string) as passed to on-key/on-release
(struct key-msg
  [which-player press-or-release key]
  #:prefab
  #:constructor-name make-key-msg) 

