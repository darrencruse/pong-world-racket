#lang racket

(require 
  "constants.rkt"
  "structs.rkt")

(provide 
 (struct-out pong-world)
 pong-world-set-status
 pong-world-set-ball
 pong-world-set-left-paddle
 pong-world-set-right-paddle
 pong-world-set-left-score
 pong-world-set-right-score
 create-initial-world)

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
