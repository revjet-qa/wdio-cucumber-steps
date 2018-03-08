#!/usr/bin/env bash

#Run server in background
node_modules/http-server/bin/http-server ./test/demo-app -p 9000 > /dev/null &
server=$!
#Run tests
#Use SPEC="..." to set path to .feature file to run tests from
if [ "$SPEC" == "" ]; then
    ./node_modules/.bin/wdio test/wdio.conf.js
else
    ./node_modules/.bin/wdio test/wdio.conf.js --spec "$SPEC"
fi
#Kill server after run
kill -9 ${server}
