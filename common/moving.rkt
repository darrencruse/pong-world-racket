#lang racket

(provide
  move-coord
  move-ball
  move-paddle
  set-paddle-pos
  set-paddle-moving
  set-left-moving
  set-right-moving
  vertical-ball-bounce
  check-paddle-block
  serve-ball
  serve
  initial-world)

(require 2htdp/universe
  htdp/testing
  "dbgmsg.rkt"
  "constants.rkt"
  "structs.rkt"
  "structs-immutable-world.rkt"
  "sound.rkt")

;; Number Number Number -> Number
;; compute the new coordinate given the current coordinate, direction of movement, and speed.
;; current is the x or y coordinate by itself
;; dir is the dx or dy part of the Direction in the range [0,1]
;; speed is the in pixels

(check-expect (move-coord 0 0 0) 0)
(check-expect (move-coord 100 1 10) 110)
(check-expect (move-coord 100 -1 10) 90)

(define (move-coord current dir speed)
  ;; round to hold coordinates to simple integers
  (round (+ current (* dir speed))))

;; Ball -> Ball
;; move the ball according to it's direction and speed

(check-expect (move-ball (make-ball (make-position 100 100) (make-direction -0.5 0.5) 2))
                 (make-ball (make-position 99 101) (make-direction -0.5 0.5) 2))

(define (move-ball ball)
  (make-ball (make-position 
               (move-coord (position-x (ball-pos ball)) (direction-dx (ball-dir ball)) (ball-speed ball))
               (move-coord (position-y (ball-pos ball)) (direction-dy (ball-dir ball)) (ball-speed ball)))
               (ball-dir ball)
               (ball-speed ball)))
      
;; Number Number Number -> Number
;; Compute the new y coordinate after moving the paddle in direction dir at speed speed
;; This also constrains the paddle within the top and bottom walls

(check-expect (move-paddle-vert 100 0.5 2) 101)
(check-expect (move-paddle-vert (- BOTTOM PADDLE-HEIGHT 2) 0.75 12) (- BOTTOM PADDLE-HEIGHT 2))
(check-expect (move-paddle-vert (+ TOP 2) -0.75 12) (+ TOP 2))

(define (move-paddle-vert current-y dir speed)
  ;; note: we round to hold coordinates to simple integers
  (min (max (round (+ current-y (* dir speed))) (+ TOP 2)) (- BOTTOM PADDLE-HEIGHT 2))) 

;; Paddle -> Paddle
;; move the paddle according to it's direction and speed

(define (move-paddle paddle)
  (make-paddle (make-position 
                 (position-x (paddle-pos paddle))
                 (move-paddle-vert 
                   (position-y (paddle-pos paddle)) 
                   (direction-dy (paddle-dir paddle)) 
                   (paddle-speed paddle)))
               (paddle-dir paddle)
               (paddle-speed paddle)))

;; Ball Number Number Number Number Number -> Ball
;; move the ball according to it's direction and speed 
;; bouncing off the top or bottom walls 
(define (vertical-bounce ball x y dx dy speed)
    ;; if we're moving up
    (if (< dy 0)
       ;; and we've hit the top
       (if (< y TOP)
         ;; just flip to moving down 
         ;; note I have not computed a truly accurate x intercept
         (if (play-sound "wall") (make-ball (make-position x TOP)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball)
       ;; else we're moving down - have we hit the bottom?
       (if (> y BOTTOM)
         ;; just flip to moving up 
         ;; note I have not computed a truly accurate x intercept
         (if (play-sound "wall") (make-ball (make-position x BOTTOM)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball))) 

;; Constrain the ball between TOP and BOTTOM, reversing
;; the direction of motion if necessary
;; Returns the ball
(define (vertical-ball-bounce ball)
  (vertical-bounce ball
          (position-x (ball-pos ball))
          (position-y (ball-pos ball))
          (direction-dx (ball-dir ball))
          (direction-dy (ball-dir ball))
          (ball-speed ball)))

;; Pong-World String -> Pong-World
;; score a point for the specified side
;; side is one of "left", "right"
(define (score-a-point world side)
  (if (play-sound "missed")
    ;; I let the player who lost the point serve next
    (if (eq? side "left")
      (make-pong-world    
        ;; games are 9 points
        (if (< (pong-world-left-score world) 8) "right-player-serves" "left-player-won")
        (serve-ball -0.5)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (+ (pong-world-left-score world) 1)
        (pong-world-right-score world))
      (make-pong-world    
        (if (< (pong-world-right-score world) 8) "left-player-serves" "right-player-won")
        (serve-ball 0.5)
        (pong-world-left-paddle world)
        (pong-world-right-paddle world)
        (pong-world-left-score world)
        (+ (pong-world-right-score world) 1)))
    world))
 
;; Pong-World Number Number Number Number Number Number Number -> Pong-World
;; bounce the ball off the left or right paddles (otherwise score a point)
;; world is the current world
;; left-paddle-y is the y coordinate of (the top of) the left paddle
;; right-paddle-y is the y coordinate of (the top of) the right paddle
;; x is the x coordinate of the ball.
;; y is the y coordinate of the ball.
;; dx is the x direction of the ball in [0,1]
;; dy is the y direction of the ball in [0,1]
;; speed is the speed of the ball

(define (horizontal-bounce-y world left-paddle-y right-paddle-y x y dx dy speed)
    ;; if we're moving left
    (if (< dx 0)
       ;; and we've hit the left
       (if (< x LEFT)
         ;; did they block it?
         (if (and (> y (- left-paddle-y MARGIN)) (< y (+ left-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - just flip to moving right 
           ;; note I have not computed a truly accurate y intercept
           (if (play-sound "paddle") (pong-world-set-ball world 
                (make-ball (make-position LEFT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection left-paddle-y y))
                  (vary-speed-by-intersection speed left-paddle-y y))) world)
           ;; nope they missed
           (score-a-point world "right"))
         ;; we haven't hit the left
         world)
       ;; else we're moving right - have we hit the right?
       (if (> x RIGHT)
         ;; did they block it?
         (if (and (> y (- right-paddle-y MARGIN)) (< y (+ right-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - just flip to moving left 
           ;; note I have not computed a truly accurate y intercept
           (if (play-sound "paddle") (pong-world-set-ball world 
                (make-ball (make-position RIGHT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection right-paddle-y y))
                  (vary-speed-by-intersection speed right-paddle-y y))) world)
         ;; nope they missed
         (score-a-point world "left"))
       ;; we haven't hit the right
       world)))
    
;; Pong-World Number Number Number Number Number -> Pong-World
;; bounce the ball off the left or right paddles (otherwise score a point)
;; world is the current world
;; x is the x coordinate of the ball.
;; y is the y coordinate of the ball.
;; dx is the x direction of the ball in [0,1]
;; dy is the y direction of the ball in [0,1]
;; speed is the speed of the ball

(define (horizontal-bounce world x y dx dy speed)
  (horizontal-bounce-y world 
                     (position-y (paddle-pos (pong-world-left-paddle world))) 
                     (position-y (paddle-pos (pong-world-right-paddle world))) x y dx dy speed))

;; The farther the ball hits from the center of the paddle the steeper the deflection
(define (vary-dy-by-intersection paddle-y intersect-y)
  (/ (- intersect-y (+ paddle-y (/ PADDLE-HEIGHT 2))) PADDLE-HEIGHT))

;; The farther the ball hits from the center of the paddle the faster it goes
(define (vary-speed-by-intersection current-speed paddle-y intersect-y)
  ;; not sure why, but when speed gets too fast everything gets choppy:
  (min MAXIMUM-SPEED 
       ;; round to keep speed to a simple integer (speed in pixels)
       (round (+ current-speed 
                 (* (/ (abs (- intersect-y (+ paddle-y (/ PADDLE-HEIGHT 2)))) 
                    (/ PADDLE-HEIGHT 2)) 3)))))

;; Check if the paddle blocked the ball otherwise score the appropriate player.
;; Returns the world
(define (check-paddle-block world)
  (horizontal-bounce world           
          (position-x (ball-pos (pong-world-ball world)))
          (position-y (ball-pos (pong-world-ball world)))
          (direction-dx (ball-dir (pong-world-ball world)))
          (direction-dy (ball-dir (pong-world-ball world)))
          (ball-speed (pong-world-ball world))))

;; Paddle Direction Number -> Paddle
;; set the paddle moving in the specified direction and speed
;; returns a paddle with the specified direction and speed (but the original position)
(define (set-paddle-moving paddle dir speed)
  (make-paddle 
    (paddle-pos paddle)
    dir
    speed))

;; Paddle Posn -> Paddle
;; sets the position of the specified paddle
(define (set-paddle-pos paddle pos)
  (make-paddle 
    pos
    (paddle-dir paddle)
    (paddle-speed paddle)))

;; set the left paddle of the specified pong-world moving in the specified direction and speed
(define (set-left-moving world dir speed)
  (pong-world-set-left-paddle world (set-paddle-moving (pong-world-left-paddle world) dir speed)))

;; set the right paddle of the specified pong-world moving in the specified direction 
(define (set-right-moving world dir speed)
  (pong-world-set-right-paddle world (set-paddle-moving (pong-world-right-paddle world) dir speed)))

(define initial-position (make-position CENTER-HORZ CENTER-VERT))

;; Makes an initialized ball moving from center screen
;; vertically flat with direction dx
(define (serve-ball initial-dx)
  (make-ball initial-position
     (make-direction initial-dx 0)
     INITIAL-SPEED))

;; serve simply sets the status to "in-play"
;; (the ball is already set with the proper direction and speed)
(define (serve world)
  (pong-world-set-status world "in-play"))

(define initial-world (create-initial-world "left-player-serves" (serve-ball 0.5)))

 