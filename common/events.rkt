#lang racket

(provide handle-tick
         handle-key-down
         quitting?
         handle-key-up
         handle-mouse)

(require 2htdp/universe
  htdp/testing
  "dbgmsg.rkt"
  "constants.rkt"
  "structs.rkt"
  "structs-immutable-world.rkt"
  "moving.rkt")
 
(define (handle-tick world)
  (if (eq? (pong-world-status world) "in-play")
    ;; the paddles and the ball moves during a point:
    (check-paddle-block 
      (make-pong-world 
        (pong-world-status world)
        (vertical-ball-bounce (move-ball (pong-world-ball world)))
        (move-paddle (pong-world-left-paddle world))
        (move-paddle (pong-world-right-paddle world))
        (pong-world-left-score world)
        (pong-world-right-score world)))
    ;; let the paddles still move between points: 
    (make-pong-world 
      (pong-world-status world)
      (pong-world-ball world)
      (move-paddle (pong-world-left-paddle world))
      (move-paddle (pong-world-right-paddle world))
      (pong-world-left-score world)
      (pong-world-right-score world))))
    
; Pong-World key -> Pong-World
; set the paddles moving according to which key is pressed 

(check-expect (handle-key-down initial-world "w")  (set-left-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "s")  (set-left-moving initial-world DOWN-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "up")  (set-right-moving initial-world UP-DIR PADDLE-SPEED))
(check-expect (handle-key-down initial-world "down")  (set-right-moving initial-world DOWN-DIR PADDLE-SPEED))

(define (handle-key-down world a-key)
  (cond
    [(key=? a-key "w") 
       (set-left-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "s")
       (set-left-moving world DOWN-DIR PADDLE-SPEED)]
    [(key=? a-key "up") 
       (set-right-moving world UP-DIR PADDLE-SPEED)]
    [(key=? a-key "down") 
       (set-right-moving world DOWN-DIR PADDLE-SPEED)]
    [else world]))

; Pong-World key -> Pong-World
; stops the paddles moving, or serves the ball, according to which key is released 

(check-expect (handle-key-up initial-world "w")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "s")  (set-left-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "up")  (set-right-moving initial-world UP-DIR 0))
(check-expect (handle-key-up initial-world "down")  (set-right-moving initial-world UP-DIR 0))

(define (handle-key-up world a-key)
  (cond
    [(or (key=? a-key "w") (key=? a-key "s"))
      ;; stop paddle by setting speed to zero (dir doesn't matter)
      (set-left-moving world UP-DIR 0)]
    [(or (key=? a-key "up") (key=? a-key "down"))
      ;; stop paddle by setting speed to zero (dir doesn't matter)
      (set-right-moving world UP-DIR 0)]
    ;; not sure why but escape didn't work (on mac at least) in handle-key-down
    [(key=? a-key "escape") 
      (pong-world-set-status world "quitting")]
    [(key=? a-key " ")
        (cond
          ;; space shouldn't do anything during play:
          [(eq? (pong-world-status world) "in-play") world]
          ;; but otherwise it serves the ball:
          [(or (eq? (pong-world-status world) "left-player-serves")
               (eq? (pong-world-status world) "right-player-serves"))
            (serve world)]
          ;; otherwise start a new game
          [else initial-world])]
    [else world]))

;; If they hit the escape key we set the world status to "quitting"
(check-expect (quitting? (pong-world-set-status initial-world "quitting")) true)
(check-expect (quitting? (pong-world-set-status initial-world "in-play")) false)

(define (quitting? world)
  (eq? (pong-world-status world) "quitting"))

;; Pong-World Number Number String -> Pong-World
;; Added mouse handling as an experiment since racket will run on windows tablets
;; And touch events do come through as mouse events
;; Unfortunately it's not multi-touch so things don't work well if both players
;; are trying to "swipe" their paddles at the same time.  Turns out fairly useable
;; though if the players simply tap to position their paddles.

(check-expect (handle-mouse initial-world 100 100 "drag") (serve initial-world))

(define (handle-mouse world x y mouseevent)
  (if (or (string=? mouseevent "drag") (string=? mouseevent "button-down"))
     (cond 
        [(or (eq? (pong-world-status world) "left-player-won")
             (eq? (pong-world-status world) "right-player-won"))
           initial-world]
        [(and (eq? (pong-world-status world) "left-player-serves")
              (< x CENTER-HORZ))
           (serve world)] 
        [(and (eq? (pong-world-status world) "right-player-serves")
              (> x CENTER-HORZ))
           (serve world)]
        [else (if (> x CENTER-HORZ)
          ;; they clicked on the right set the position of the right paddle
          (pong-world-set-right-paddle world (make-paddle (make-position RIGHT (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0))
          ;; they clicked on the left set the position of the right paddle
          (pong-world-set-left-paddle world (make-paddle (make-position MARGIN (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0)))])      
   world))
