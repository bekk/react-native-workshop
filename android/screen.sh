#!/usr/bin/env bash
echo "Input: $1"
adb shell screencap -p /sdcard/$1.png
adb pull /sdcard/$1.png
adb shell rm /sdcard/$1.png
