#!/data/data/com.termux/files/usr/bin/bash
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus; pkill -9 -f udroid
rm -rf $TMPDIR/.X11-unix/X*
termux-x11 :1 -listen tcp & 
sleep 5
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity
udroid login jammy
