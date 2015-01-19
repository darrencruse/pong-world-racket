#lang racket

(provide play-sound)

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
(require rsound)
;; this duration seems ok for Mac and for PC:
(define BOOP-DURATION-MAC-PC 3000)
;; but sound quality on Linux is really poor on shorter durations:
(define BOOP-DURATION-LINUX 12000)
(define BOOP-DURATION BOOP-DURATION-MAC-PC)

;; Make a sound (and return true)
;; what is one of "paddle", "wall", or "missed"
(define (play-sound what)
  (begin
    (cond
      ;; note rsound docs say volume is 0 to 1 but on linux
      ;; and windows sound was awful at volume numbers that low
      [(string=? what "paddle") (play (make-tone 360 10 BOOP-DURATION))]
      [(string=? what "wall") (play (make-tone 260 10 BOOP-DURATION))]
      [(string=? what "missed") (play (make-tone 160 10 20000))]
    )
    true))
