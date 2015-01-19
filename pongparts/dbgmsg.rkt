#lang racket

(provide dbgmsg)

;; Display debug messages to the console?
(define SHOW-DEBUG-MSGS false)

;; String -> true
;; print debug msg (if SHOW-DEBUG-MSGS is true)
(define (dbgmsg msg) 
  (if SHOW-DEBUG-MSGS
    (display msg)
    true))
