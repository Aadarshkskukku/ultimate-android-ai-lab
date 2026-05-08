#!/data/data/com.termux/files/usr/bin/bash

# 1. ഗിറ്റ്‌ഹബ്ബ് സിൻക്രൊണൈസേഷൻ
echo "🌐 CLOUD SYNC: Finalizing latest GitHub Intelligence..."
cd ~/ultimate-android-ai-lab
git pull origin main --quiet

# 2. ക്ലീനിംഗ് (Old locks removal)
echo "🧹 TITAN PURGE: Vaporizing ghost sessions..."
pkill -9 -f termux-x11; pkill -9 -f xfce4; pkill -9 -f dbus; pkill -9 -f udroid
rm -rf $TMPDIR/.X11-unix/X*

# 3. വിഷ്വൽ ഹബ്ബ് ലോഞ്ച്
echo "⚡ X11 TURBO: Starting Visual Hub..."
termux-x11 :1 -listen tcp > /dev/null 2>&1 & 
sleep 3
am start --user 0 -n com.termux.x11/com.termux.x11.MainActivity
sleep 2

# 4. ഫോഴ്സ്ഡ് ഡെസ്ക്ടോപ്പ് എൻട്രി (No Menus)
echo "🚀 FORCING DIRECT DESKTOP ENTRY..."
udroid login jammy -- bash -l -c "export DISPLAY=:1 && export PULSE_SERVER=127.0.0.1 && dbus-launch --exit-with-session startxfce4"
