#lang racket

(provide 
 (struct-out position) 
 (struct-out direction)
 UP-DIR
 DOWN-DIR
 (struct-out ball)
 (struct-out paddle)
 (struct-out key-msg)
 (struct-out pong-world)
 pong-world-set-status
 pong-world-set-ball
 pong-world-set-left-paddle
 pong-world-set-right-paddle
 pong-world-set-left-score
 pong-world-set-right-score
 create-initial-world)

(require "constants.rkt")

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

;;
;; the state of our pong world:
;; status = "connecting",
;;          "left-player-serves", 
;;          "right-player-serves", 
;;          "in-play", 
;;          "left-player-won", 
;;          "right-player-won", 
;;          "quitting"
;; the ball (a structure - see above)
;; the left and right paddle y position
;; the left and right players score
;; sound = "none",
;;         "paddle",
;;         "wall",
;;         "missed"
;;

;; Below I've tried both mutable and immutable version of PongWorld
;; uncomment the version that you want.

#|
;; IMMUTABLE VERSION

;; Here we're using struct-copy with an *immutable* pong-world state
;; side note: "struct-copy" is not yet supported in whalesong.
(struct pong-world 
  [status ball left-paddle right-paddle left-score right-score [sound #:auto]] 
  #:auto-value "none"
  #:constructor-name make-pong-world)

(define (pong-world-set-status world status)
  (struct-copy pong-world world [status status])) 
(define (pong-world-set-ball world ball)
  (struct-copy pong-world world [ball ball])) 
(define (pong-world-set-left-paddle world left-paddle)
  (struct-copy pong-world world [left-paddle left-paddle]))
(define (pong-world-set-right-paddle world right-paddle)
  (struct-copy pong-world world [right-paddle right-paddle]))
(define (pong-world-set-left-score world left-score)
  (struct-copy pong-world world [left-score left-score]))
(define (pong-world-set-right-score world right-score)
  (struct-copy pong-world world [right-score right-score]))
|#

;;#|
;; MUTABLE VERSION

;; Here we're using a mutable pong-world state
;; side note: *this* approach does work fine in whalesong.
(struct pong-world 
  [status ball left-paddle right-paddle left-score right-score [sound #:auto] ]
  #:prefab
  #:mutable
  #:auto-value "none"
  #:constructor-name make-pong-world)

;; create an initial world state with a specified status, ball position, 
;; and the paddles centered vertically on the screen

;; we adapt racket's generated setter functions so that we get back the world
;; this is just to ease the transition to/from the more functional/immutable
;; style in which we always return the "modified copy".

;; mutably set a field using the provided setter, and get back the changed instance
(define (mutate-and-return setter instance field-val)
  (begin
    (apply setter (list instance field-val))
    instance))

(define (pong-world-set-status world status)
   (mutate-and-return set-pong-world-status! world status)) 
(define (pong-world-set-ball world ball)
   (mutate-and-return set-pong-world-ball! world ball)) 
(define (pong-world-set-left-paddle world left-paddle)
   (mutate-and-return set-pong-world-left-paddle! world left-paddle))
(define (pong-world-set-right-paddle world right-paddle)
   (mutate-and-return set-pong-world-right-paddle! world right-paddle))
(define (pong-world-set-left-score world left-score)
   (mutate-and-return set-pong-world-left-score! world left-score))
(define (pong-world-set-right-score world right-score)
   (mutate-and-return set-pong-world-right-score! world right-score))

;;|#

(define (create-initial-world initial-status initial-ball) (make-pong-world
                       initial-status
                       initial-ball
                       (make-paddle (make-position MARGIN (- CENTER-VERT (/ PADDLE-HEIGHT 2)))
                                    (make-direction 0 1)
                                    0)
                       (make-paddle (make-position RIGHT (- CENTER-VERT (/ PADDLE-HEIGHT 2)))
                                    (make-direction 0 1)
                                    0)
                       0
                       0))
