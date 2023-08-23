#! /usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m 'deploy'
git remote add origin git@github.com:Allen718/mangosteen-1.git
git push -f origin main:deploy_page
