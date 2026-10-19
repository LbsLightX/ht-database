#!/usr/bin/env bash
# ====================================================================
# HELLOTALK DATABASE (HT-DATABASE) - LOCALHOST AUTOMATION LAUNCHER
# Dynamic Open Port Discovery // Multi-Server Fallback // Auto-Browser
# ====================================================================

set -e

# Change directory to script root
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

# 1. Detect Available HTTP Server
SERVER_CMD=""
SERVER_TYPE=""

if command -v python3 >/dev/null 2>&1; then
    SERVER_CMD="python3 -m http.server"
    SERVER_TYPE="python3"
elif command -v python >/dev/null 2>&1; then
    SERVER_CMD="python -m http.server"
    SERVER_TYPE="python"
elif command -v busybox >/dev/null 2>&1 && busybox --list | grep -q "^httpd$"; then
    SERVER_CMD="busybox httpd -f -p"
    SERVER_TYPE="busybox"
elif command -v npx >/dev/null 2>&1; then
    SERVER_CMD="npx --yes http-server -p"
    SERVER_TYPE="npx"
else
    printf "\n[ERROR] No supported HTTP server detected (python3, python, busybox httpd, or npx http-server).\n"
    exit 1
fi

# 2. Dynamically Find an Open Port Starting at 8080
START_PORT=8080
PORT=$START_PORT

find_open_port() {
    local target_port=$1
    if [ "$SERVER_TYPE" = "python3" ] || [ "$SERVER_TYPE" = "python" ]; then
        $SERVER_TYPE -c "
import socket, sys
port = $target_port
while port < 9000:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.bind(('0.0.0.0', port))
        s.close()
        print(port)
        sys.exit(0)
    except OSError:
        port += 1
sys.exit(1)
"
    else
        while [ $target_port -lt 9000 ]; do
            if ! nc -z 127.0.0.1 $target_port 2>/dev/null; then
                echo "$target_port"
                return 0
            fi
            target_port=$((target_port + 1))
        done
        return 1
    fi
}

DETECTED_PORT=$(find_open_port $START_PORT)
if [ -n "$DETECTED_PORT" ]; then
    PORT=$DETECTED_PORT
else
    PORT=$START_PORT
fi

# 3. Detect Local LAN IP Address
LAN_IP="127.0.0.1"
if command -v ip >/dev/null 2>&1; then
    DETECTED_IP=$(ip route get 1.1.1.1 2>/dev/null | awk '{print $7}' | tr -d ' \n')
    if [ -n "$DETECTED_IP" ]; then
        LAN_IP="$DETECTED_IP"
    fi
elif command -v ifconfig >/dev/null 2>&1; then
    DETECTED_IP=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | awk '{print $2}' | sed 's/addr://' | head -n 1)
    if [ -n "$DETECTED_IP" ]; then
        LAN_IP="$DETECTED_IP"
    fi
fi

# 4. Start Server in Background with PID Capture and Signal Trap
case "$SERVER_TYPE" in
    python3|python)
        $SERVER_CMD "$PORT" >/dev/null 2>&1 &
        SERVER_PID=$!
        ;;
    busybox)
        busybox httpd -f -p "$PORT" -h "$PROJECT_DIR" >/dev/null 2>&1 &
        SERVER_PID=$!
        ;;
    npx)
        npx --yes http-server "$PROJECT_DIR" -p "$PORT" -c-1 --silent >/dev/null 2>&1 &
        SERVER_PID=$!
        ;;
esac

trap 'kill $SERVER_PID 2>/dev/null || true; printf "\n[!] HelloTalk Database server stopped gracefully.\n"; exit 0' INT TERM

# 5. Clean Terminal Banner
printf "\n"
printf "  ==============================================================\n"
printf "  // HELLOTALK DATABASE & VAULT - LOCAL SERVER\n"
printf "  ==============================================================\n"
printf "  [+] Engine:      %s (Serving %s)\n" "$SERVER_TYPE" "$PROJECT_DIR"
printf "  [+] Localhost:   http://127.0.0.1:%s/index.html\n" "$PORT"
printf "  [+] LAN Network: http://%s:%s/index.html\n" "$LAN_IP" "$PORT"
printf "  --------------------------------------------------------------\n"
printf "  [!] Status: Running offline in attached terminal.\n"
printf "  [!] Press Ctrl+C to terminate the server.\n"
printf "  ==============================================================\n\n"

# 6. Auto-Open Browser Silently After 0.8s
(
    sleep 0.8
    TARGET_URL="http://127.0.0.1:$PORT/index.html"
    if command -v termux-open-url >/dev/null 2>&1; then
        termux-open-url "$TARGET_URL" >/dev/null 2>&1 || true
    elif command -v termux-open >/dev/null 2>&1; then
        termux-open "$TARGET_URL" >/dev/null 2>&1 || true
    elif command -v xdg-open >/dev/null 2>&1; then
        xdg-open "$TARGET_URL" >/dev/null 2>&1 || true
    elif command -v open >/dev/null 2>&1; then
        open "$TARGET_URL" >/dev/null 2>&1 || true
    fi
) &

# 7. Keep Attached to Server Process
wait $SERVER_PID
