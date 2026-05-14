#!/data/data/com.termux/files/usr/bin/bash
clear
termux-wake-lock
echo -e "\e[1;35m>>> NEURAL-TITAN SYSTEM RECOVERY ACTIVE <<<\e[0m"

# പഴയ സെഷനുകൾ പൂർണ്ണമായും നീക്കം ചെയ്യുന്നു
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f udroid; pkill -9 -f dbus
rm -rf $TMPDIR/.X11-unix/X* $TMPDIR/dbus-* $TMPDIR/pulse-*
sleep 1

# വിഷ്വൽ എൻജിൻ സ്റ്റാർട്ട് ചെയ്യുന്നു
termux-x11 :1 -listen tcp -ac > /dev/null 2>&1 & 
sleep 3
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity > /dev/null 2>&1
sleep 2

# ലോഗിൻ
echo -e "\e[1;32m🚀 ENTERING AI-LAB WITH STABLE GRAPHICS...\e[0m"
udroid login jammy
termux-wake-unlock
