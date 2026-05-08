#!/data/data/com.termux/files/usr/bin/bash

# 1. നിലവിലുള്ള പഴയ പ്രോസസ്സുകളെ നീക്കം ചെയ്യുന്നു
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus
rm -rf $TMPDIR/.X11-unix/X*

# 2. X11 ഗ്രാഫിക്സ് എൻജിൻ സ്റ്റാർട്ട് ചെയ്യുന്നു
termux-x11 :1 -listen tcp & 
sleep 3

# 3. Termux-X11 App തനിയെ തുറക്കുന്നു
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity

# 4. ഉബുണ്ടു ലോഗിൻ ചെയ്ത് ഡെസ്ക്ടോപ്പ് ഓപ്പൺ ചെയ്യുന്നു
udroid login jammy -- /bin/bash -c "export DISPLAY=:1; export PULSE_SERVER=127.0.0.1; export MESA_LOADER_DRIVER_OVERRIDE=zink; dbus-launch --exit-with-session startxfce4"
