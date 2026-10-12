#!/usr/bin/env bash
set -euo pipefail

q="${1:-}"
root="$(cd "$(dirname "$0")" && pwd)"
src="$root/src"

if [[ ! "$q" =~ ^q([1-9]|10)$ ]]; then
  echo "Usage: ./sh.sh q1   (q1 to q10)"; exit 1
fi
[[ -d "$src/assets/$q" ]] || { echo "Missing: $src/assets/$q"; exit 1; }

# wipe src except assets + main.jsx
find "$src" -mindepth 1 -maxdepth 1 ! -name assets ! -name main.jsx -exec rm -rf {} +

cp -R "$src/assets/$q/." "$src/"
cp -R "$src/assets/shared" "$src/shared"

echo "Now using $q. Run: npm run dev"