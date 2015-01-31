pong-world-racket
=================

Pong is the "hello world" of video game programming.

Here are three variations on classic pong I've developed in Racket:

pongworld
  * a two player (but one computer!) pong game using the big-bang "world" approach.

pongiverse
  * a networked client/server pong game using the one-world-is-not-enough "universe" approach.

pongsong
  * pongworld ported to whalesong so it runs in the browser

Background
----------

I originally wrote this for session 5 of the STL Racket Meetup 

  http://www.meetup.com/STL-Racket

That original version was written in the "Beginning Student Language" for Racket from the book How to Design Programs by Matthias Felleisen et al.  I've left the original version in the subdirectory named "deprecated" for anyone who'd like to reference it.

Running Pongworld
-----------------

To run in drracket simply open the pongworld/pong.rkt file, click the "Run" button to evaluate the code, and then in the interactions area enter:

```
    > (main initial-world)
```

To run from the command line enter the following in your shell:

```
    $ cd pongworld
    $ racket
    > (enter! "pong.rkt")
    > (main initial-world)
```

The left player uses the "w" and "s" keys to move their paddle.
The right player uses the up and down arrows.
Players take turns using the spacebar to serve.
The player who reaches 9 points first wins.
Hitting the escape key exits the program.

Running Pongiverse
------------------

Pongiverse is a client server program for two players.

This means there is a server program and two client programs - one for the left player and one for the right player.

* To easily test the program on a single machine:

In drracket simply open the pongiverse/run.rkt file, click the "Run" button to evaluate the code, and then in the interactions area enter:

```
    > (run)
```

To do the same from the command line enter the following in your shell:

```
    $ cd pongiverse
    $ racket
    > (enter! "run.rkt")
    > (run)
```

A small window will appear showing activity from the Universe server, and two pong client windows one for the left player and one for the right player (player names are hardcoded to "Darren" and "Matthias" so pretend you are them :).

Unfortunately in this mode you have to be quite coordinated to click back and forth between the windows to give the proper window focus.  To run it for real on multiple machines read on...

* To run the program on multiple machines:

First you must start the server.

The easiest way to run this is with two computers on your same local LAN network.  If you would like to play a friend over the internet, I've pre-installed the server on an amazon ec2 instance that I don't leave running all the time.  If you'd like to use that for your server shoot me an email at darren.cruse@gmail.com and I'd be happy to fire it up for you.  In what follows I'll assume you're running the server yourself.

First pick a machine for your server.  Since you may not have three machines available this might be the same machines the left or right player plays on (that's fine just be clear - you only run *one* server).

On the server machine in drracket you can open the pongiverse/pongserver.rkt file, click the "Run" button to evaluate the code, and then in the interactions area enter:

```
    > (serve-pong)
```

Or to do the same from the command line enter the following in your shell:

```
    $ cd pongiverse
    $ racket
    > (enter! "pongserver.rkt")
    > (serve-pong)
```

A small window should appear showing activity from the Universe server.

Now you need to figure out the IP address (or domain name) of your server.
On Mac and easy way is to go to System Preferences, then Network.
You will see your IP address listed there under Status.
It's a four part number that looks similar to e.g. "192.168.1.12"

From the command line on Mac or Linux you can do a command similar to:

```
    $ ifconfig en1
```

Where the "en1" part may be different for you.  You can also try simply "ifconfig" by itself.

To find your IP address on Windows, you can use a DOS command window and enter the similar command "ipconfig" (note that "p" where the Mac and Linux have "f"). 

Now that you know your IP address you're ready to start your clients (meaning the programs the left and right players play with).

On the machine for the left player:

In drracket you can open the pongiverse/pongclient.rkt file, click the "Run" button to evaluate the code, and then in the interactions area enter:

```
    > (play-pong "leftplayersname" "left" "serveripaddress")
```

Where "leftplayersname" is really the left players name in quotes.
And "serveripaddress" is really the IP address you figured out for your server (again in quotes).

If you prefer to start the client from the command line enter the following in your shell:

```
    $ cd pongiverse
    $ racket
    > (enter! "pongclient.rkt")
    > (play-pong "leftplayersname" "left" "serveripaddress")
```

Where "leftplayersname" and "serveripaddress" are as described above.

If all is well the pong game window should popup displaying the message "Connecting...".

Now on the machine for the right player:

Follow the same sequence you did for the left player but give the other player's name and switch the word "right" for left:

```
    > (play-pong "rightplayersname" "right" "serveripaddress")
```

If all is well the pong game window should pop up saying "Hit space to serve", and you are ready to play!

Running Pongsong
----------------

Pongsong is the whalesong version of Pongworld that runs in your browser.

It's something of a work in progress, but you can try it out here if you'd like:

http://htmlpreview.github.io/?https://github.com/darrencruse/pong-world-racket/blob/master/pongsong/build/pong.html

Whalesong works by converting racket source files into javascript.

To build the files yourself you will need to install Whalesong first - here is how I did it on my Mac:

```
    $ cd 
    $ git clone https://github.com/soegaard/whalesong.git
    $ cd ~/Library/Racket/6.1/collects
    $ ln -s ~/whalesong/whalesong .
    $ echo "export PATH=$PATH:~/Library/Racket/6.1/collects/whalesong" >> ~/.bash_profile
```

Once you've done that and dotted in your .bash_profile you should find the main whalesong compiler "whalesong.rkt" in your PATH.

Now you can build the whalesong version of pong-world by doing:

```
    $ cd pongsong
    $ ./build.sh
```

It takes a while to build, but if all goes well the resulting files wind up under pongsong/build.

Now you simply bring up your favorite browser, use File->Open and open the file pongsong/build/pong.html.

You should find the pong game playing in your browser (minus the nice looking "gamepad" graphics at the bottom), and minus sound.  Whalesong doesn't currently support sound, which is to say the whalesong doesn't sing, but I'm sure she will someday :).

To enable sounds in the other versions read on...

Enabling Sound in Pongworld and Pongiverse
------------------------------------------

The sound effects are disabled by default, because they depend on an additional "rsound" racket library that must be separately installed.

To install rsound do the following from a shell window (the directory doesn't matter):

```
    raco pkg install rsound
```

Once you've done that replace the sound.rkt file in the pongparts directory with the file in the same directory named sound-on.rkt:

```
    $ cd pongparts
    $ cp sound-on.rkt sound.rkt
```

(if later you needed to turn the sound back off, you could do the same but replacing sound.rkt with the file named sound-off.rkt)

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

Once these steps are done sound should work from both racket and drracket when running Pongworld or Pongiverse.
