#lang racket

(provide 
 SCREEN-WIDTH
 SCREEN-HEIGHT
 SHOW-PAD
 PAD-HEIGHT
 WIDTH
 HEIGHT
 CENTER-HORZ
 CENTER-VERT
 MARGIN
 WALL-HEIGHT
 PADDLE-HEIGHT
 PADDLE-THICKNESS
 BALL-SIZE
 TOP
 BOTTOM
 LEFT
 RIGHT
 PADDLE-SPEED
 INITIAL-SPEED
 MAXIMUM-SPEED)

;; Positioning constants

;; The size of the playfield window
;; screen-scale = 1 is small for a laptop but fits my HP Stream 7 Windows tablet well
;; screen-scale = 1.5 is pretty good on a medium sized laptop
;; screen-scale = 2 actually fits on the macbook pro
(define screen-scale 1.5)
(define SCREEN-WIDTH (* 830 screen-scale))
(define SCREEN-HEIGHT (* 440 screen-scale))

;; Should we show this pad controller "overlay"?
;; note we use the same keyboard keys regardless
;; esp. consider setting to false like on this small windows tablet
(define SHOW-PAD true)
(define PAD-HEIGHT (round (* SCREEN-HEIGHT 0.2)))

;; These are really the "playfield" width and height
;; omitting space for the pad controller "overlay" at the bottom
(define WIDTH SCREEN-WIDTH)
(define HEIGHT (if SHOW-PAD (- SCREEN-HEIGHT PAD-HEIGHT) SCREEN-HEIGHT))

(define CENTER-HORZ (round (/ WIDTH 2)))
(define CENTER-VERT (round (/ HEIGHT 2)))

;; We use a bit of "gutter"/"margin" around the edges:
(define MARGIN 10)

;; We draw walls at the top and bottom
(define WALL-HEIGHT 16)

;; How tall are the paddles?
(define PADDLE-HEIGHT 90)

;; How thick are the paddles?
(define PADDLE-THICKNESS 16)

;; How big is the ball?
(define BALL-SIZE 16)

;; Top and bottom of the useable playfield
(define TOP WALL-HEIGHT)
(define BOTTOM (- HEIGHT WALL-HEIGHT))

;; Left and right of the useable playfield
;; (these are the coordinates of the paddle faces)
(define LEFT (+ PADDLE-THICKNESS MARGIN))
(define RIGHT (- WIDTH (+ PADDLE-THICKNESS MARGIN)))

;; Movement constants...

;; How fast to move the paddles up or down while the up/down keys are pressed
(define PADDLE-SPEED 15)

;; What's the initial speed in pixels per tick?
(define INITIAL-SPEED 45)

;; What the maximum speed?
(define MAXIMUM-SPEED 90)
