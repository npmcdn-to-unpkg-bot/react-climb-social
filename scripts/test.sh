#!/bin/bash
set -e
PATH=$(npm bin):$PATH

rm -rf coverage
./node_modules/.bin/babel-tape-runner ./src/**/tests/*-test.js | faucet