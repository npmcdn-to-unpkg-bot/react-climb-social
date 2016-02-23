#!/bin/bash
set -e
PATH=$(npm bin):$PATH

rm -rf ./__site__
./node_modules/.bin/webpack-dev-server --config "$PWD/example/webpack.config.js" --hot --content-base $PWD/example
