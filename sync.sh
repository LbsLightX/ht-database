#!/usr/bin/env bash
# ==============================================================================
# HelloTalk Database & Vault (ht-database) - 2-Way GitHub & Local Sync Script
# ==============================================================================
# Usage:
#   ./sync.sh pull              - Pull latest cloud data, rebase, and recompile app.js
#   ./sync.sh push "message"    - Compile app.js, run syntax check, commit, and push to GitHub
#   ./sync.sh build             - Rebuild app.js from scripts/build_app.py and data/
#   ./sync.sh status            - Check local vs remote git status
#   ./sync.sh                   - Interactive menu
# ==============================================================================

set -eo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Color formatting
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

log_info() { echo -e "${CYAN}ℹ️  ${RESET}$1"; }
log_success() { echo -e "${GREEN}✅ ${BOLD}$1${RESET}"; }
log_warn() { echo -e "${YELLOW}⚠️  ${BOLD}$1${RESET}"; }
log_error() { echo -e "${RED}❌ ${BOLD}$1${RESET}"; }

do_build() {
  log_info "Validating catalog schema & integrity..."
  python3 scripts/validate_catalog.py
  log_info "Compiling app.js via scripts/build_app.py..."
  python3 scripts/build_app.py
  if command -v node >/dev/null 2>&1; then
    node -c app.js
    log_success "Build complete & JavaScript syntax verified!"
  else
    log_success "Build complete!"
  fi
}

do_pull() {
  log_info "Fetching latest changes from origin main..."
  
  # Check if working directory has uncommitted modifications
  local stashed=0
  if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    log_warn "Local modifications detected. Stashing temporary changes..."
    git stash push -m "sync_temp_$(date +%s)"
    stashed=1
  fi

  git pull --rebase origin main

  if [ "$stashed" -eq 1 ]; then
    log_info "Restoring stashed local modifications..."
    git stash pop || log_warn "Notice: Merge conflicts during stash restore. Review your files."
  fi

  log_info "Rebuilding bundle with latest pulled data..."
  do_build
  log_success "Sync pull completed! Local environment is up to date."
}

do_push() {
  local commit_msg="${1:-}"
  if [ -z "$commit_msg" ]; then
    commit_msg="Update HelloTalk Vault [$(date '+%Y-%m-%d %H:%M:%S')]"
  fi

  log_info "Running pre-push build and validation..."
  do_build

  log_info "Staging all changes..."
  git add -A

  # Check if anything changed
  if git diff-index --quiet HEAD --; then
    log_warn "No changes detected to commit. Working tree is clean."
    return 0
  fi

  git commit -m "$commit_msg"
  log_info "Pushing to origin main..."
  git push origin main
  log_success "Pushed to GitHub successfully! GitHub Actions is now deploying to GitHub Pages."
}

do_status() {
  echo -e "\n${BOLD}=== Git Status: ht-database ===${RESET}"
  git status -s
  echo -e "\n${BOLD}=== Recent Commits ===${RESET}"
  git log -n 5 --oneline || true
  echo ""
}

# CLI Argument Dispatcher
ACTION="${1:-}"

case "$ACTION" in
  build)
    do_build
    ;;
  pull)
    do_pull
    ;;
  push)
    shift || true
    do_push "$*"
    ;;
  status)
    do_status
    ;;
  "")
    # Interactive Menu
    echo -e "${BOLD}${CYAN}=== HelloTalk Database Sync Commander ===${RESET}"
    echo "1) Pull Latest from GitHub & Rebuild (Sync Down)"
    echo "2) Compile, Commit & Push to GitHub (Sync Up)"
    echo "3) Rebuild local app.js"
    echo "4) View Git Status"
    echo "5) Validate Catalog Schema & Integrity"
    echo "6) Audit Raw Catalog Dump (Diff Check)"
    echo "7) Exit"
    echo ""
    read -rp "Select an option [1-7]: " choice
    case "$choice" in
      1) do_pull ;;
      2)
        read -rp "Enter commit message (Leave blank for auto-timestamp): " user_msg
        do_push "$user_msg"
        ;;
      3) do_build ;;
      4) do_status ;;
      5) python3 scripts/validate_catalog.py ;;
      6) python3 scripts/sync_raw_catalog.py ;;
      7) echo "Goodbye!"; exit 0 ;;
      *) log_error "Invalid option selected."; exit 1 ;;
    esac
    ;;
  validate)
    python3 scripts/validate_catalog.py
    ;;
  audit-raw)
    python3 scripts/sync_raw_catalog.py
    ;;
  *)
    echo "Usage: $0 {pull|push [msg]|build|status|validate|audit-raw}"
    exit 1
    ;;
esac
