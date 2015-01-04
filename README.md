pong-world-racket
=================

Two player pong game written in Racket using the universe "big-bang" approach

I've written this for session 5 of the STL Racket Meetup 

http://www.meetup.com/STL-Racket

There are now versions running in racket as well as in the browser using Whalesong.

Racket version
--------------

The recommended version is all in a single file "pong-world.rkt".
The file "pong-world-bsl.rkt" is the original version using only the "Beginning Student Language" (i.e. "BSL").

To run in drracket simply open the file, click the "Run" button to evaluate the code, and then in the interactions area enter:

```
    > (main initial-world)
```

To run from the command line enter the following in your shell:

```
    $ racket
    > (enter! "pong-world.rkt")
    > (main initial-world)
```

Whalesong version
-----------------

You can try out the work-in-progress Whalesong version here:

http://htmlpreview.github.io/?https://github.com/darrencruse/pong-world-racket/blob/master/whalesong/build/pong-world.html

You can also run it from your browser locally by opening the file pong-world.html that's checked into the whalesong/build directory.

To build the files yourself you will need to install Whalesong first - here is how I did it on my Mac:

```
    $ cd 
    $ github clone https://github.com/soegaard/whalesong.git
    $ cd ~/Library/Racket/6.1/collects
    $ ln -s ~/whalesong/whalesong .
    $ echo "export PATH=$PATH:~/Library/Racket/6.1/collects/whalesong" >> ~/.bash_profile
```

Once you've done that and dotted in your .bash_profile you should find the main whalesong compiler "whalesong.rkt" in your PATH.
Then you can build the whalesong version of pong-world by doing:

```
    $ cd <this repo>/whalesong
    $ ./build.sh
```

The generated files are written to the build sub-directory.

You can open pong-world.html in your browser from there as before.

Enabling Sound
--------------

Sound effects are available for the racket version of the game (only at this time).

These sound effects are commented out by default, because they depend on an additional "rsound" racket library that must be separately installed.

To install rsound do the following from a shell window (the directory doesn't matter):

```
    raco pkg install rsound
```

Once you've done that uncomment the appropriate code section indicated at the top of the pong-world.rkt file.

On the Mac that's all that's necessary.

For Windows and Linux you may need to do the following additional steps:

* On Windows:  

  If you get an "invalid device" error when you
  run the code in DrRacket, then right click on the speaker
  icon (at the lower right of your desktop), choose "Playback
  "Devices", then select your audio device and click the
  "Properties" button.  Finally under the Advanced tab
  make sure the Sampling rate is set to 44100 Hz.

* On Linux: You must manually install libportaudio:

  Start by getting the latest pa tar file from:

    http://www.portaudio.com/download.html

  Then do the following in a shell window:
```  
    $ tar -xvf <patarfile>.tgz
    $ cd portaudio
    $ ./configure && make
    $ sudo make install
    $ echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib" >> ~/.bash_profile
    $ . ~/.bash_profile
```

Once these steps are done sound should work from both racket and drracket when running the game.
