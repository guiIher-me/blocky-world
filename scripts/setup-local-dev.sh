#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"
CERT_DIR="$ROOT_DIR/.local-certs"
CERT_FILE="$CERT_DIR/localhost.pem"
KEY_FILE="$CERT_DIR/localhost-key.pem"

log() {
  printf '[setup] %s\n' "$1"
}

fail() {
  printf '[setup] Error: %s\n' "$1" >&2
  exit 1
}

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    fail "$1 is required. Install it and rerun 'npm run setup'."
  fi
}

copy_env_if_missing() {
  local example_file="$1"
  local target_file="$2"

  if [ -f "$target_file" ]; then
    log "Keeping existing $(basename "$(dirname "$target_file")")/.env"
    return
  fi

  cp "$example_file" "$target_file"
  log "Created $(basename "$(dirname "$target_file")")/.env from .env.example"
}

install_dependencies() {
  local app_dir="$1"
  local app_name="$2"

  log "Installing $app_name dependencies"
  npm install --prefix "$app_dir"
}

generate_certificates() {
  mkdir -p "$CERT_DIR"

  log "Installing local CA with mkcert"
  mkcert -install

  log "Generating HTTPS certificate for localhost, 127.0.0.1, and ::1"
  mkcert \
    -cert-file "$CERT_FILE" \
    -key-file "$KEY_FILE" \
    localhost 127.0.0.1 ::1
}

main() {
  require_command npm
  require_command mkcert

  copy_env_if_missing "$BACKEND_DIR/.env.example" "$BACKEND_DIR/.env"
  copy_env_if_missing "$FRONTEND_DIR/.env.example" "$FRONTEND_DIR/.env"

  generate_certificates
  install_dependencies "$BACKEND_DIR" "backend"
  install_dependencies "$FRONTEND_DIR" "frontend"

  log "Setup complete"
  log "Next step: npm start"
}

main "$@"
