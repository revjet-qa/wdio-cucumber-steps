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

#Check and save the status of tests run
if [ $? -eq 0 ]
then
  echo "Cucumber run success"
  STATUS=0
else
  echo "Cucumber run had errors"
  STATUS=1
fi

#Kill server after run
kill -9 ${server}

#Exit with proper status
exit $STATUS
