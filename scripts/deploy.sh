#!/usr/bin/env bash
# Build the site and publish the static output to the `2027` branch.
# GitHub Pages serves that branch directly (Settings → Pages → Deploy from a branch → 2027 / root).
#
#   npm run deploy
#
# Source code lives on the `2027-src` branch; `2027` only holds built files and is
# overwritten on every deploy.
set -euo pipefail

REMOTE_URL="$(git remote get-url origin)"
DEPLOY_BRANCH="2027"
SRC_SHA="$(git rev-parse --short HEAD)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "⚠️  You have uncommitted changes. Commit them first so the deploy matches the source." >&2
  exit 1
fi

npm run build
touch dist/.nojekyll   # serve folders that start with "_" (Astro's /_astro assets)

cd dist
rm -rf .git
git init -q -b "$DEPLOY_BRANCH"
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" \
  commit -qm "Deploy ${SRC_SHA}"
git push -f "$REMOTE_URL" "$DEPLOY_BRANCH:$DEPLOY_BRANCH"
rm -rf .git
cd ..

# Keep the source branch in sync too.
git push origin HEAD:2027-src

echo "✅ Deployed ${SRC_SHA} to ${DEPLOY_BRANCH}. Live in ~1 minute at https://joannahong.github.io"
