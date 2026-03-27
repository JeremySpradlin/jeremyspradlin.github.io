#!/usr/bin/env bash

set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must be run inside a git repository."
  exit 1
fi

branch="$(git rev-parse --abbrev-ref HEAD)"

git add .

if git diff --cached --quiet; then
  echo "No changes staged. Nothing to commit."
  exit 0
fi

message="${1:-}"

if [[ -z "$message" ]]; then
  read -r -p "Commit message: " message
fi

if [[ -z "$message" ]]; then
  echo "Commit message cannot be empty."
  exit 1
fi

git commit -m "$message"
git push origin "$branch"
