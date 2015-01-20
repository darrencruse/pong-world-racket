#!/bin/sh
whalesong.rkt build --dest-dir build pong.rkt
cp -R sounds build/sounds
