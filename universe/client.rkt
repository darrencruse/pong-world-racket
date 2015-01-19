#lang racket

(provide play-pong)

(require 2htdp/universe
  2htdp/image
  htdp/testing
  "../common/dbgmsg.rkt"
  "../common/constants.rkt"
  "../common/structs.rkt"
  "../common/drawing.rkt"
  "../common/moving.rkt"
  "../common/sound.rkt")

;;
;; main entry point
;;
;; start the game by evaluating in drracket e.g.:
;;   (play-pong "Darren" "left" "127.0.0.1")
;;
;; or from the command line:
;; $ racket
;; > (enter! "client.rkt")
;; > (play-pong "Darren" "left" "127.0.0.1")
;;

;;(check-expect (main initial-world) initial-world)

;; -------------------------------------------------------------------
;; Initial World State
;;   The big-bang is started with the initial world
;;   state *before* the first message has been received from the 
;;   server.  So we use this initial world state while "connecting"
;;   i.e. while waiting for that first message.

(define initial-world (create-initial-world 
                        "connection" 
                        (make-ball (make-position CENTER-HORZ CENTER-VERT)
                          (make-direction 1 0) 1)))

;; Launch the Client.
;; playerName is a string e.g. "Matthias", "Darren"
;; playerType is a string of "left", "right", or "spectator"
;; host is the hostname of the server
(define (play-pong playerName playerType host) 
  (if SHOW-PAD
    (big-bang initial-world
      [name (string-append playerName "::" playerType)]
      [register host]
      [on-receive (lambda (world msg) (handle-msg playerType world msg))]
      ;;           [on-tick handle-tick]
      [on-draw (lambda (world) (draw-pong-client playerType world))]
      [on-pad (lambda (world key) (handle-key-press playerType world key))]
      [on-release (lambda (world key) (handle-key-release playerType world key))]
      [stop-when (lambda (world) (string=? (pong-world-status world) "quitting")) draw-goodbye])
    (big-bang initial-world
      [name (string-append playerName "::" playerType)]
      [register host]
      [on-receive (lambda (world msg) (handle-msg playerType world msg))]
      ;;            [on-tick handle-tick]
      [on-draw (lambda (world) (draw-pong-client playerType world))]
      [on-key (lambda (world key) (handle-key-press playerType world key))]
      [on-release (lambda (world key) (handle-key-release playerType world key))]
      [stop-when (lambda (world) (string=? (pong-world-status world) "quitting")) draw-goodbye])))

;; handles incoming messages
(define (handle-msg player-type world msg)
  ;; we've sent the entire world state as the message
  (begin
    (dbgmsg (string-append player-type " got msg: " (pong-world-status world) "\n"))
    msg))

;; Pong-World key -> Pong-World
;; Handle a key press
;; We just send the appropriate keys to the server
(define (handle-key-press player-type world a-key)
(begin
  (dbgmsg (string-append player-type " handle key press: " a-key "\n"))
  (cond
    ;; send "q" and "s" to the server for the left player
    [(and (string=? player-type "left") (or (key=? a-key "w") (key=? a-key "s")))
       (begin
         (dbgmsg (string-append player-type " sending key press: " a-key "\n"))
         (make-package world (make-key-msg player-type "press" a-key)))]
    ;; send "up" and "down" to the server for the left player
    [(and (string=? player-type "right") (or (key=? a-key "up") (key=? a-key "down")))
       (begin
         (dbgmsg (string-append player-type " sending key press: " a-key "\n"))
         (make-package world (make-key-msg player-type "press" a-key)))]
    [else world])))

;; Pong-World key -> Pong-World
;; Handle a key release
;; We just send the appropriate keys to the server
(define (handle-key-release player-type world a-key)
  (cond
    ;; send "q" and "s" to the server for the left player
    [(and (string=? player-type "left") 
          (or (key=? a-key "w")(key=? a-key "s")(key=? a-key "escape")
              (and (string=? (pong-world-status world) "left-player-serves") (key=? a-key " ")))) 
       (make-package world (make-key-msg player-type "release" a-key))]
    ;; send "up" and "down" to the server for the right player
    [(and (string=? player-type "right") 
          (or (key=? a-key "up")(key=? a-key "down")(key=? a-key "escape")
              (and (string=? (pong-world-status world) "right-player-serves") (key=? a-key " ")))) 
       (make-package world (make-key-msg player-type "release" a-key))]
    [else world]))
