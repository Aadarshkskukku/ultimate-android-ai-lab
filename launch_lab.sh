#!/data/data/com.termux/files/usr/bin/bash

# =====================================================================
# 💠 ULTIMATE AI LAB | GEN-INFINITE ATOMIC REVALUATION (2026)
# Engine: Aadarsh | Gear: iQOO Z6 Snapdragon Elite Adrenaline
# Protocol: MENU-BYPASS SINGULARITY & GPU ZINK OVERDRIVE
# =====================================================================

clear
echo -e "\e[1;31m"
echo "  ██████╗  ██████╗ ██████╗     ███╗   ███╗ ██████╗ ██████╗ ███████╗ "
echo " ██╔════╝ ██╔═══██╗██╔══██╗    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝ "
echo " ██║  ███╗██║   ██║██║  ██║    ██╔████╔██║██║   ██║██║  ██║█████╗   "
echo " ██║   ██║██║   ██║██║  ██║    ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝   "
echo " ╚██████╔╝╚██████╔╝██████╔╝    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗ "
echo "  ╚═════╝  ╚═════╝ ╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝ "
echo -e "\e[0m"

echo -e "\e[1;36m🌀 ATOMIC IGNITION: BYPASSING INTERACTIVE MENUS...\e[0m"

# 1. THE SUPREME TITAN PURGE (Memory & Socket Reset)
# സ്ക്രീൻഷോട്ടിൽ കണ്ട 'already running' എറർ പരിഹരിക്കുന്നു
echo -e "\e[1;31m⚡ TITAN PURGE: Vaporizing ghost sessions & X11 locks...\e[0m"
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus; pkill -9 -f pulseaudio; pkill -9 -f node; pkill -9 -f udroid
rm -rf $TMPDIR/.X11-unix/X* $TMPDIR/dbus-* $TMPDIR/pulse-* ~/.config/chromium/SingletonLock
sleep 1

# 2. X11 ENGINE: QUANTUM OVERCLOCK (Display Fix)
# Display :1 ഉപയോഗിച്ച് TCP വഴി വിഷ്വൽസ് ലോഡ് ചെയ്യുന്നു
echo -e "\e[1;34m🖥️ X11 TURBO: Starting Visual Hub (TCP-Listen)...\e[0m"
termux-x11 :1 -listen tcp -ac -extension MIT-SHM > /dev/null 2>&1 & 
sleep 3

# 3. FORCE-LAUNCH VISUAL INTERFACE
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity > /dev/null 2>&1
sleep 2

# 4. GITHUB CLOUD SYNC
echo -e "\e[1;32m🌐 CLOUD SYNC: Finalizing latest Global Intelligence...\e[0m"
cd ~/ultimate-android-ai-lab && git pull origin main

# 5. THE ATOMIC BYPASS (Fixes the Menu Selection Loop)
# സ്ക്രീൻഷോട്ടിൽ കണ്ട 'raw/xfce4' മെനുവിനെ മറികടക്കുന്നു
echo -e "\e[1;32m🧠 SYNC COMPLETE: FORCING DIRECT DESKTOP ENTRY...\e[0m"
udroid login jammy -u root -- /bin/bash -c "
    export DISPLAY=:1
    export PULSE_SERVER=127.0.0.1
    export XDG_RUNTIME_DIR=/tmp
    export MESA_LOADER_DRIVER_OVERRIDE=zink
    export GALLIUM_DRIVER=zink
    
    # Chromium പ്രൊഫൈൽ ലോക്ക് റീസെറ്റ് ചെയ്യുന്നു
    rm -rf ~/.config/chromium/SingletonLock ~/.config/Code/SingletonLock
    
    echo -e '\e[1;36m🔥 LAUNCHING CINEMATIC DESKTOP (BYPASS ENABLED)...\e[0m'
    dbus-launch --exit-with-session startxfce4
"

echo -e "\e[1;31m🛑 MASTER SESSION ENDED. POWER PRESERVED.\e[0m"
