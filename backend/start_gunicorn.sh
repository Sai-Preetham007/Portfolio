#!/usr/bin/env sh
set -e

cd "$(dirname "$0")"

if [ -f .venv/bin/activate ]; then
  # shellcheck disable=SC1091
  . .venv/bin/activate
fi

PORT="${PORT:-8001}"
HOST="${HOST:-0.0.0.0}"
WORKERS="${WORKERS:-2}"

exec python3 -m gunicorn app.main:app \
  -k uvicorn.workers.UvicornWorker \
  -w "$WORKERS" \
  -b "${HOST}:${PORT}"
