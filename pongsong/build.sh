#!/bin/sh
# build script for whalesong version of pongworld
# note:  this script has only been tested on Mac OSX

# start with a clean slate
echo "cleaning prior build files..."
rm -rf ./build/*
rm -rf ./pongparts

# make special whalesong versions of our files:
echo "making whalesong versions of source files..."
cp -R ../pongparts .

# whalesong does not (yet) allow use of #lang racket...
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/#lang racket/#lang whalesong/g"

# the image and universe 2htdp modules are replaced by whalesong modules:
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/2htdp\/universe/whalesong\/world/g"
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/2htdp\/image/whalesong\/image/g"

# check-expect is built into whalesong:
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/htdp\/testing//g"

# whalesong can't freeze images at this time:
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/;;(define (freeze image) image)/(define (freeze image) image)/g"

# whalesong doesn't support the on-pad game-pad graphic at this time:
find ./pongparts/ -type f -name "*.rkt" -print0 | xargs -0 sed -i.bak "s/define SHOW-PAD true/define SHOW-PAD false/g"

# and whalesong sound differs from the rsound module we use on the desktop platforms:
cp pongsong-sound.rkt ./pongparts/sound.rkt

echo "compiling racket files to javascript..."
whalesong.rkt build --dest-dir build ./pong.rkt

# center the canvas in the web browser
# (I'm sure there's a nicer way to do this but this is a quick and dirty)
find ./build/ -type f -name "pong.html" -print0 | xargs -0 sed -i.bak "s/\<\/title\>/\<\/title\>\<style\> canvas \{ display\: block\; position\: absolute\; margin\: auto\; top\: 0\; bottom\: 0\; left\: 0\; right\: 0\; \} \<\/style\>/g"

cp -R sounds ./build/

