#!/data/data/com.termux/files/usr/bin/bash
clear
termux-wake-lock
echo -e "\e[1;35m>>> NEURAL-TITAN SYSTEM IGNITION <<<\e[0m"
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f udroid
rm -rf $TMPDIR/.X11-unix/X*
sleep 1
termux-x11 :1 -listen tcp -ac > /dev/null 2>&1 & 
sleep 3
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity > /dev/null 2>&1
sleep 1
echo -e "\e[1;32m🚀 FORCING CINEMATIC DESKTOP ENTRY...\e[0m"
udroid login jammy
termux-wake-unlock
