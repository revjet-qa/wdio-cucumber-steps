#!/usr/bin/env bash

#Run server in background
http-server ./test/demo-app -p 9000 > /dev/null &
server=$!
#Run tests
./node_modules/.bin/wdio test/wdio.conf.js
#Kill server after run
kill -9 ${server}
