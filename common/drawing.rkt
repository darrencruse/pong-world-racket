#lang racket

(provide 
 display-msg
 draw-idle-game
 draw-pong-world
 draw-pong-client
 draw-goodbye)

(require 2htdp/universe
  2htdp/image
  htdp/testing
  "dbgmsg.rkt"
  "constants.rkt"
  "structs.rkt"
  "sound.rkt")

;; display a text message on the scene at a specified position
(define (display-msg msg font-size x y scene)
  (place-image (text/font msg font-size "white"
             "impact" 'system 'normal 'light #f)
                    x y
                    scene))

(define (draw-bg w h c)
  (empty-scene w h c))

(define (draw-net w h bg)
    (scene+line bg 
       (/ w 2) 0 (/ w 2) h (make-pen "white" 14 "dot" "butt" "bevel")))

(define (draw-wall w)
  (rectangle w WALL-HEIGHT "solid" "white"))

(define (draw-playfield-bg w h)
  (overlay/align "left" "top"
    (draw-net WIDTH HEIGHT
      (overlay/align "right" "top"
        (draw-wall w)
        (overlay/align "right" "bottom"
          (draw-wall w)
          (draw-bg WIDTH HEIGHT "black"))))
    (draw-bg SCREEN-WIDTH SCREEN-HEIGHT "gray")))

;; We render the playfield background just once for performance sake
;; (freeze makes a bitmap so the background is truly drawn just once)
(define PLAYFIELD-BG (freeze (draw-playfield-bg WIDTH HEIGHT)))

(define (draw-ball size) (rectangle size size "solid" "white"))

(define BALL (freeze (draw-ball BALL-SIZE)))

(define PADDLE (freeze  (rectangle PADDLE-THICKNESS PADDLE-HEIGHT "solid" "white")))

(define (draw-paddle paddle background)
  (underlay/xy
    background
    (position-x (paddle-pos paddle)) 
    (position-y (paddle-pos paddle)) 
    PADDLE))
  
(define (draw-idle-game world)
  (draw-paddle (pong-world-left-paddle world)
    (draw-paddle (pong-world-right-paddle world)
      (place-image
        (text (number->string (pong-world-left-score world)) 98 "white")
        (- CENTER-HORZ 60) 80
        (place-image
          (text (number->string (pong-world-right-score world)) 98 "white")
          (+ CENTER-HORZ 60) 80
          PLAYFIELD-BG)))))
        
(define (draw-goodbye world)
   (display-msg "Goodbye!!" 48
      (- CENTER-HORZ 200) CENTER-VERT
      (draw-idle-game world)))

;; String PongWorld -> Image
;; Draw the world state for networked Pongiverse pong game.
;; The client-type is "left" or "right"
;; world is the current pong world state
(define (draw-pong-client client-type world)
  (begin 
    (dbgmsg (string-append client-type " drawing " (pong-world-status world) "\n"))
    (play-sound (pong-world-sound world))
    (cond
      [(string=? (pong-world-status world) "connecting")
       (display-msg "Waiting for connection" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "in-play") 
       (place-image BALL 
                    (position-x (ball-pos (pong-world-ball world))) 
                    (position-y (ball-pos (pong-world-ball world)))
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "left-player-serves")
       (display-msg "Hit space to serve" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "right-player-serves")
       (display-msg "Hit space to serve" 36
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "left-player-won")
       (display-msg "You won!!!" 48
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [(string=? (pong-world-status world) "right-player-won")
       (display-msg "You won!!!" 48
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
      [else 
        (begin
          (dbgmsg (string-append "unrecognized status in draw: \"" (pong-world-status world) "\"\n"))
          (draw-idle-game world))])))

;; PongWorld -> Image
;; Draw the world state for the (non-networked) pong-world game.
;; We use the same function as the networked draw-pong-client
;; But we curry client-type to just be "" (since there's only one client)

(define draw-pong-world (curry draw-pong-client ""))
