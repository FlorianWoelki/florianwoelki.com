#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'florianwoelki.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/FlorianWoelki/portfolio.git master:gh-pages

cd -