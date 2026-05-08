#!/data/data/com.termux/files/usr/bin/bash
# 1. Clean old sessions (പഴയ സെഷനുകൾ ക്ലീൻ ചെയ്യുന്നു)
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus
rm -rf $TMPDIR/.X11-unix/X*

# 2. Start Graphics Server (ഗ്രാഫിക്സ് സെർവർ തുടങ്ങുന്നു)
termux-x11 :1 -listen tcp & 
sleep 3

# 3. Open Termux-X11 App (ആപ്പ് തനിയെ തുറക്കുന്നു)
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity

# 4. Login to Ubuntu (ഉബുണ്ടുവിലേക്ക് പ്രവേശിക്കുന്നു)
udroid login jammy
