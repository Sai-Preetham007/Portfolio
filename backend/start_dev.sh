#!/usr/bin/env sh
set -e

cd "$(dirname "$0")"

if [ -f .venv/bin/activate ]; then
  # shellcheck disable=SC1091
  . .venv/bin/activate
fi

PORT="${PORT:-8001}"
HOST="${HOST:-0.0.0.0}"

exec python3 -m uvicorn app.main:app --reload --host "$HOST" --port "$PORT"
