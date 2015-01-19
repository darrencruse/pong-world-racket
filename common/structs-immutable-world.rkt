#lang racket

(provide 
 (struct-out pong-world)
 pong-world-set-status
 pong-world-set-ball
 pong-world-set-left-paddle
 pong-world-set-right-paddle
 pong-world-set-left-score
 pong-world-set-right-score
 create-initial-world)

(require 
  "constants.rkt"
  "structs.rkt")

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

;; Here we're using struct-copy with an *immutable* pong-world state
;; side note: "struct-copy" is not yet supported in whalesong.
(struct pong-world 
  [status ball left-paddle right-paddle left-score right-score] 
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
