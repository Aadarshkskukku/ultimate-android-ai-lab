#!/data/data/com.termux/files/usr/bin/bash

# =====================================================================
# 💠 PROJECT: NEURAL-TITAN OMNI-SINGULARITY (STABLE 2026)
# =====================================================================

clear
echo -e "\e[1;35m>>> NEURAL-TITAN SYSTEM STARTING <<<\e[0m"

# 1. സെഷനുകൾ ക്ലീൻ ചെയ്യുന്നു
termux-wake-lock
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus; pkill -9 -f udroid
rm -rf $TMPDIR/.X11-unix/X*
sleep 1

# 2. വിഷ്വൽ എൻജിൻ സ്റ്റാർട്ട് ചെയ്യുന്നു
echo -e "\e[1;36m🖥️ Starting Visual Hub...\e[0m"
termux-x11 :1 -listen tcp -ac > /dev/null 2>&1 & 
sleep 3
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity > /dev/null 2>&1
sleep 1

# 3. ലോഗിൻ ബൈപാസ് (Menu Bypass Fix)
echo -e "\e[1;32m🚀 Launching Cinematic Desktop...\e[0m"
# -u root ഒഴിവാക്കി ലളിതമായ രീതിയിൽ കമാൻഡ് നൽകുന്നു
udroid login jammy -- bash -c "export DISPLAY=:1; export PULSE_SERVER=127.0.0.1; export MESA_LOADER_DRIVER_OVERRIDE=zink; export GALLIUM_DRIVER=zink; dbus-launch --exit-with-session startxfce4"

termux-wake-unlock
