#!/bin/sh
whalesong.rkt build --dest-dir build pong-world.rkt
cp -R sounds build/sounds
