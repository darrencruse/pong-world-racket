#lang racket

#|
   Pongiverse, a two-player, distributed pong game 
   -------------------------------------------------

   Play
   ----

   Click Run. Evaluate 

     (run)

   in the Interactions Panel. This will pop up three windows: 
    -- Matthias, a game window 
    -- Darren, another game window 
    -- Universe, the game server's console

   Play.

   To run the game on two distinct computers: 

     -- copy this folder to another computer, determine its IP number e.g. "12.345.67.98"
     -- open run.rkt 
     -- evaluate 
          (serve-pong)
     
     -- on your own computer, open run.rkt and run 
     -- evaluate 
          (play-pong PlayerNameAsAString "12.345.67.98")
|#

(require (only-in "pongserver.rkt" serve-pong)
         (only-in "pongclient.rkt" play-pong)
         2htdp/universe)

;; launch server worlds for playtesting
(define (run)
  (launch-many-worlds
   (serve-pong)
   (play-pong "Darren" "left" LOCALHOST)
   (play-pong "Matthias" "right" LOCALHOST)))
