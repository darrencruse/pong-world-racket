#lang whalesong

(require whalesong/world
         whalesong/image)

;; Display debug messages to the console?
(define SHOW-DEBUG-MSGS false)

;; 
;; To get sound effects you must manually install rsound via:
;;
;;   raco pkg install rsound
;;
;; Then you must also uncomment the appropriate section below.
;;
;; In addition:
;;
;; On Windows:  If you get an "invalid device" error when you
;;   run the code in DrRacket, then right click on the speaker
;;   icon (at the lower right of your desktop), choose "Playback
;;   "Devices", then select your audio device and click the 
;;   "Properties" button.  Finally under the Advanced tab
;;   make sure the Sampling rate is set to 44100 Hz.
;;
;; On Linux: You must manually install libportaudio:
;;   First get the latest pa tar file from:
;;
;;     http://www.portaudio.com/download.html
;;
;;   then do the following in a shell window:  
;;     $ tar -xvf <patarfile>.tgz
;;     $ cd portaudio
;;     $ ./configure && make
;;     $ sudo make install
;;     $ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
;;     $ drracket
;;   
;; Lastly, uncomment the following:
#|
;; FOR SOUND
(require rsound)
;; this duration seems ok for Mac and for PC:
(define BOOP-DURATION-MAC-PC 3000)
;; but sound quality on Linux is really poor on shorter durations:
(define BOOP-DURATION-LINUX 12000)
(define BOOP-DURATION BOOP-DURATION-MAC-PC)
;; note rsound docs say volume is 0 to 1 but on linux
;; and windows sound was awful at volume numbers that low
(define BOOP-PADDLE (make-tone 360 10 BOOP-DURATION))
(define BOOP-WALL (make-tone 260 10 BOOP-DURATION))
(define BOOP-MISSED (make-tone 160 10 20000))
;; Make a sound (and return true)
(define (play-sound what)
    ;; "play" returns void but BSL has limited support for void
    ;; (this is just a hack that happens to return true)
    (string? (play what)))
|#

;; Otherwise, if the sound won't play on your hardware you
;; disable it by leaving the code above commented and 
;; uncommenting the following instead:
;#|
;; FOR NO SOUND
(define BOOP-PADDLE true)
(define BOOP-WALL true)
(define BOOP-MISSED true)
(define (play-sound what) true)
;|#

;; The size of the playfield window
;; screen-scale = 1 is small for a laptop but fits my HP Stream 7 Windows tablet well
;; screen-scale = 1.5 is pretty good on a medium sized laptop
;; screen-scale = 2 actually fits on the macbook pro
(define screen-scale 1.5)
(define SCREEN-WIDTH (* 830 screen-scale))
(define SCREEN-HEIGHT (* 440 screen-scale))

;; These are really the "playfield" width and height
(define WIDTH SCREEN-WIDTH)
(define HEIGHT SCREEN-HEIGHT)

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

;; How fast to move the paddles up or down while the up/down keys are pressed
(define PADDLE-SPEED 15)

;; How big is the ball?
(define BALL-SIZE 16)

;; What's the initial speed in pixels per tick?
(define INITIAL-SPEED 28)

;; What the maximum speed?
(define MAXIMUM-SPEED 68)

;; Top and bottom of the useable playfield
(define TOP WALL-HEIGHT)
(define BOTTOM (- HEIGHT WALL-HEIGHT))

;; Left and right of the useable playfield
;; (these are the coordinates of the paddle faces)
(define LEFT (+ PADDLE-THICKNESS MARGIN))
(define RIGHT (- WIDTH (+ PADDLE-THICKNESS MARGIN)))

;; The direction of movement as a unit velocity vector
;; dx and dy in the range [0,1]
;; dx and dy are multiplied by speed to compute the # of pixels to move
(struct direction [dx dy] #:mutable #:constructor-name make-direction )

;; Paddle direction straight up
(define UP-DIR (make-direction 0 -1))

;; Paddle direction straight down
(define DOWN-DIR (make-direction 0 1))

;; the ball
;; the ball's current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(struct ball [pos dir speed] #:mutable #:constructor-name make-ball)

;; each paddle
;; we've chosen to match the ball's structure despite the paddle only moving vertically
;; for consistency with the ball movement code
;; (plus it might be fun to experiment with paddles that can move forward and back at some point?)
;; each paddles current x/y position
;; its direction as a unit x/y vector (x and y in the range [0,1])
;; its speed (in pixels) along that vector
(struct paddle [pos dir speed] #:mutable #:constructor-name make-paddle)

;; the state of our pong world:
;; status = "left-player-serves", 
;;          "right-player-serves", 
;;          "in-play", 
;;          "left-player-won", 
;;          "right-player-won", 
;;          "quitting"
;; the ball (a structure - see above)
;; the left and right paddle y position
;; the left and right players score 
(struct pong-world [status ball left-paddle right-paddle left-score right-score] #:mutable #:constructor-name make-pong-world)

;; mutably set a field using the provided setter, and get back the changed instance
(define (mutate-and-return setter instance field-val)
  (begin
    (apply setter (list instance field-val))
    instance))

;; adapt racket's generated setter functions so that we get back the world
;; this is just to ease the transition from our original BSL code which
;; always returned the "modified copy".  Also note that unfortunately 
;; whalesong does not yet support "struct-copy".
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

;;
;; main entry point
;;
;; start the game by evaluating in drracket:
;;   (main initial-world)
;;
;; or from the command line:
;; $ racket
;; > (enter! "pong-world.rkt")
;; > (main initial-world)
;;
(define (main world)
  (big-bang world
    [on-tick handle-tick]
    [to-draw draw-pong-world]
    [on-key handle-key-down]
;; I have submitted a pull request for adding on-release to whalesong
    [on-release handle-key-up]
    [on-mouse handle-mouse]
    ;; whalesong doesn't support the second argument to stop-when (I'd done "draw-goodbye")
    [stop-when quitting?]))

(define (move-coord current dir speed)
  ;; round to hold coordinates to simple integers
  (round (+ current (* dir speed))))

(define (move-ball ball)
  (make-ball (make-posn 
               (move-coord (posn-x (ball-pos ball)) (direction-dx (ball-dir ball)) (ball-speed ball))
               (move-coord (posn-y (ball-pos ball)) (direction-dy (ball-dir ball)) (ball-speed ball)))
               (ball-dir ball)
               (ball-speed ball)))
      
;; Compute the new y coordinate after moving the paddle in direction dir at speed speed
;; This also constrains the paddle within the top and bottom walls
(define (move-paddle-vert current-y dir speed)
  ;; note: we round to hold coordinates to simple integers
  (min (max (round (+ current-y (* dir speed))) (+ TOP 2)) (- BOTTOM PADDLE-HEIGHT 2))) 

(define (move-paddle paddle)
  (make-paddle (make-posn 
                 (posn-x (paddle-pos paddle))
                 (move-paddle-vert 
                   (posn-y (paddle-pos paddle)) 
                   (direction-dy (paddle-dir paddle)) 
                   (paddle-speed paddle)))
               (paddle-dir paddle)
               (paddle-speed paddle)))

(define (vertical-bounce ball x y dx dy speed)
    ;; if we're moving up
    (if (< dy 0)
       ;; and we've hit the top
       (if (< y TOP)
         ;; just flip to moving down 
         ;; note I have not computed a truly accurate x intercept
         (if (play-sound BOOP-WALL) (make-ball (make-posn x TOP)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball)
       ;; else we're moving down - have we hit the bottom?
       (if (> y BOTTOM)
         ;; just flip to moving up 
         ;; note I have not computed a truly accurate x intercept
         (if (play-sound BOOP-WALL) (make-ball (make-posn x BOTTOM)
                    (make-direction dx (- 0 dy))
                    speed) ball)
         ball))) 

;; Constrain the ball between TOP and BOTTOM, reversing
;; the direction of motion if necessary
;; Returns the ball
(define (vertical-ball-bounce ball)
  (vertical-bounce ball
          (posn-x (ball-pos ball))
          (posn-y (ball-pos ball))
          (direction-dx (ball-dir ball))
          (direction-dy (ball-dir ball))
          (ball-speed ball)))
      
(define (score-a-point world side)
  (if (play-sound BOOP-MISSED)
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
  
(define (horizontal-bounce-y world left-paddle-y right-paddle-y x y dx dy speed)
    ;; if we're moving left
    (if (< dx 0)
       ;; and we've hit the left
       (if (< x LEFT)
         ;; did they block it?
         (if (and (> y (- left-paddle-y MARGIN)) (< y (+ left-paddle-y PADDLE-HEIGHT MARGIN)))
           ;; yup - just flip to moving right 
           ;; note I have not computed a truly accurate y intercept
           (if (play-sound BOOP-PADDLE) (pong-world-set-ball world 
                (make-ball (make-posn LEFT y)
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
           (if (play-sound BOOP-PADDLE) (pong-world-set-ball world 
                (make-ball (make-posn RIGHT y)
                  (make-direction (- 0 dx) (vary-dy-by-intersection right-paddle-y y))
                  (vary-speed-by-intersection speed right-paddle-y y))) world)
         ;; nope they missed
         (score-a-point world "left"))
       ;; we haven't hit the right
       world)))
     
(define (horizontal-bounce world left-paddle right-paddle x y dx dy speed)
  (horizontal-bounce-y world 
                     (posn-y (paddle-pos left-paddle)) 
                     (posn-y (paddle-pos right-paddle)) x y dx dy speed))

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
          (pong-world-left-paddle world)
          (pong-world-right-paddle world)          
          (posn-x (ball-pos (pong-world-ball world)))
          (posn-y (ball-pos (pong-world-ball world)))
          (direction-dx (ball-dir (pong-world-ball world)))
          (direction-dy (ball-dir (pong-world-ball world)))
          (ball-speed (pong-world-ball world))))

;; set the paddle moving in the specified direction and speed
;; returns a paddle with the specified direction and speed (but the original position)
(define (set-paddle-moving paddle dir speed)
  (make-paddle 
    (paddle-pos paddle)
    dir
    speed))

;; stop the paddle by setting it's speed to 0
;; returns a paddle with zero speed (but the original position)
(define (set-paddle-pos paddle pos)
  (make-paddle 
    pos
    (paddle-dir paddle)
    (paddle-speed paddle)))

;; stop the paddle by setting it's speed to 0
;; returns a paddle with zero speed (but the original position)
(define (stop-paddle paddle)
  (make-paddle 
    (paddle-pos paddle)
    (paddle-dir paddle)
    0))

(define initial-posn (make-posn CENTER-HORZ CENTER-VERT))

;; Makes an initialized ball moving from center screen
;; vertically flat with direction dx
(define (serve-ball initial-dx)
  (make-ball initial-posn
     (make-direction initial-dx 0)
     INITIAL-SPEED))
                                
(define initial-world (make-pong-world 
                        "left-player-serves"
                        (serve-ball 0.5)
                        (make-paddle (make-posn MARGIN (- CENTER-VERT (/ PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0) 
                        (make-paddle (make-posn RIGHT (- CENTER-VERT (/ PADDLE-HEIGHT 2))) 
                                     (make-direction 0 1) 
                                     0)
                        0
                        0))
                        
(define (quitting? world)
  (eq? (pong-world-status world) "quitting"))

;; whereas the standard place-image places the image so it's *center* is at x y of scene
;; this function places places the image so it's *top left* is at x y of scene 
;; note:  place-image/align was blowing up in whalesong - this is partly my workaround for that.
(define (place-image-top-left image x y scene)
   (place-image image 
      (+ x (round (/  (image-width image) 2)))
      (+ y (round (/ (image-height image) 2))) 
      scene))

(define (draw-goodbye world)
   (display-msg "Goodbye!!" 48
      (- CENTER-HORZ 200) CENTER-VERT
      (draw-idle-game world)))

(define (draw-bg w h c)
  ;; whalesong's empty-scene does not like a third color argument
  ;; so I just switched it to a rectangle
  (place-image-top-left
  (rectangle w h "solid" c)
  0 0
  (empty-scene w h)))

;; draw a vertical dashed line 
;; w is the width of the line
;; h is the height of each dash
;; x is the x coord of the dash relative to the background
;; ys is the starting y coordinate relative to the background
;; ye is the ending y coordinate relative to the background
;; c is the color of the line
;; bg is the background image to draw the line on top of 
(define (vertical-dashed-line w h x ys ye c bg)
  (if (< ys ye)
    (place-image-top-left 
      (rectangle w h "solid" c)
      x ys
      (vertical-dashed-line w h x (+ ys (* 2 h)) ye c bg))
    bg))

(define (draw-net w h bg)
    (vertical-dashed-line BALL-SIZE BALL-SIZE (- (/ w 2) (/ BALL-SIZE 2)) 0 h "white" bg))

(define (draw-wall w)
  (rectangle w WALL-HEIGHT "solid" "white"))

(define (draw-playfield-bg w h)
  (place-image-top-left
    (draw-wall w)
    0 0
    (place-image-top-left
      (draw-wall w)
      0 BOTTOM
      (draw-net w h (draw-bg w h "black")))))

#|
ORIGINAL WITH NET
(define (draw-playfield-bg w h)
  (overlay/align "left" "top"
    (draw-net WIDTH HEIGHT
      (overlay/align "right" "top"
        (draw-wall w)
        (overlay/align "right" "bottom"
          (draw-wall w)
          (draw-bg WIDTH HEIGHT "black"))))
    (draw-bg SCREEN-WIDTH SCREEN-HEIGHT "gray")))
|#

;; We render the playfield background just once for performance sake
(define PLAYFIELD-BG (draw-playfield-bg WIDTH HEIGHT))

(define (draw-ball size) (rectangle size size "solid" "white"))

(define BALL (draw-ball BALL-SIZE))

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

(define (display-msg msg font-size x y scene)
  (place-image (text/font msg font-size "white"
             "impact" 'system 'normal 'light #f)
                    x y
                    scene))
  
(define (draw-pong-world world)
  (begin (dbgmsg (string-append "draw " (number->string (random 10)) "\n"))
  (cond 
    [(eq? (pong-world-status world) "in-play") 
       (place-image-top-left BALL 
                    (posn-x (ball-pos (pong-world-ball world))) 
                    (posn-y (ball-pos (pong-world-ball world)))
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "left-player-serves")
       (display-msg "Hit space to serve" 36 
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "right-player-serves")
       (display-msg "Hit space to serve" 36
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "left-player-won")
       (display-msg "You won!!!" 48
                    (- CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))]
    [(eq? (pong-world-status world) "right-player-won")
       (display-msg "You won!!!" 48
                    (+ CENTER-HORZ 200) CENTER-VERT
                    (draw-idle-game world))])))

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
    
(define (draw-paddle paddle background)
  ;; before whalesong this was underlay
  (place-image-top-left
    PADDLE
    (posn-x (paddle-pos paddle)) 
    (posn-y (paddle-pos paddle)) 
    background))
  
(define PADDLE (rectangle PADDLE-THICKNESS PADDLE-HEIGHT "solid" "white"))

;; serve simply sets the status to "in-play"
;; (the ball is already set with the proper direction and speed)
(define (serve world)
  (pong-world-set-status world "in-play"))

(define (handle-key-down world a-key)
  (cond
    [(key=? a-key "w")
        (pong-world-set-left-paddle world (set-paddle-moving (pong-world-left-paddle world) UP-DIR PADDLE-SPEED))]
    [(key=? a-key "s")
        (pong-world-set-left-paddle world (set-paddle-moving (pong-world-left-paddle world) DOWN-DIR PADDLE-SPEED))]
    [(key=? a-key "up")
        (pong-world-set-right-paddle world (set-paddle-moving (pong-world-right-paddle world) UP-DIR PADDLE-SPEED))]
    [(key=? a-key "down")
        (pong-world-set-right-paddle world (set-paddle-moving (pong-world-right-paddle world) DOWN-DIR PADDLE-SPEED))]
    [else world]))

(define (handle-key-up world a-key)
  (cond
    [(or (key=? a-key "w") (key=? a-key "s"))
        (pong-world-set-left-paddle world (stop-paddle (pong-world-left-paddle world)))]
    [(or (key=? a-key "up") (key=? a-key "down"))
        (pong-world-set-right-paddle world (stop-paddle (pong-world-right-paddle world)))]
    ;; not sure why but escape didn't work (on mac at least) in handle-key-down
    [(key=? a-key "escape")
        (pong-world-set-status world "quitting")]
    [(key=? a-key " ")
        (cond
          [(eq? (pong-world-status world) "in-play") world]
          [(or (eq? (pong-world-status world) "left-player-serves")
               (eq? (pong-world-status world) "right-player-serves"))
            (serve world)]
          [else initial-world])]
    [else world]))

#|
PLAY AGAINST YOURSELF WITH MOUSE -
CAN I PRESERVE THIS AS AN OPTION?
;; Added mouse handling as an experiment since racket will run on windows tablets
;; And touch events do come through as mouse events
;; Unfortunately it's not multi-touch so things don't work well if both players
;; are trying to "swipe" their paddles at the same time.  Turns out fairly useable
;; though if the players simply tap to position their paddles.  
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
        ;; since control with keyboard is so hard without on-release make the mouse control both sides
        ;; (I notice other browser based pong demos doing this around the web btw)
        [else (set-left-paddle 
                (set-right-paddle world (make-paddle (make-posn RIGHT (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                  (make-direction 0 1) 0)) 
                (make-paddle (make-posn MARGIN (min y (- BOTTOM PADDLE-HEIGHT 2))) 
                  (make-direction 0 1) 0))])      
   world))
|#

;; Added mouse handling as an experiment since racket will run on windows tablets
;; And touch events do come through as mouse events
;; Unfortunately it's not multi-touch so things don't work well if both players
;; are trying to "swipe" their paddles at the same time.  Turns out fairly useable
;; though if the players simply tap to position their paddles.
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
          (pong-world-set-right-paddle world (make-paddle (make-posn RIGHT (min y (- BOTTOM PADDLE-HEIGHT 2)))
                                     (make-direction 0 1)
                                     0))
          (pong-world-set-left-paddle world (make-paddle (make-posn MARGIN (min y (- BOTTOM PADDLE-HEIGHT 2)))
                                     (make-direction 0 1)
                                     0)))])
   world))

;; print msg to stdout (and return true)
(define (dbgmsg msg) 
  (if SHOW-DEBUG-MSGS
    (or (string? (display msg)) true)
    true))

;; run the game
(main initial-world)