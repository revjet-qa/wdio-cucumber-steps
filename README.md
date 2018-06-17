# wdio-cucumber-steps

[![Build Status](https://travis-ci.org/revjet-qa/wdio-cucumber-steps.svg?branch=master)](https://travis-ci.org/revjet-qa/wdio-cucumber-steps)
[![npm version](https://img.shields.io/npm/v/wdio-cucumber-steps.svg)](https://www.npmjs.com/package/wdio-cucumber-steps)
[![NPM License](https://img.shields.io/npm/l/wdio-cucumber-steps.svg)](https://github.com/revjet-qa/wdio-cucumber-steps/blob/master/LICENSE)

Cucumber step definitions written with WebdriverIO for end-to-end tests

## Supported versions
[Node.js](http://nodejs.org/):
- 7.6+
- 8.x
- 9.x
- 10.x

[WebdriverIO](https://www.npmjs.com/package/webdriverio):
- 4.x

## Installation
To install this package and add it to your package.json just run:
```shell
npm install wdio-cucumber-steps --save-dev
```

## Importing and enabling
Add the next code to `before` section in your `wdio.conf.js` file:
```javascript
// Makes stepsConfig visible globally to use steps config variables defined in it
const stepsConfigGenerator = require('./node_modules/wdio-cucumber-steps/src/steps.conf.generator');
const stepsConfigPresets = require('./steps.conf');

global.stepsConfig = stepsConfigGenerator(stepsConfigPresets);

// Adds browser.waitForPageToLoad() command to wait for page to get fully loaded
const applyStepsCommands = require('./node_modules/wdio-cucumber-steps/src/commands');

applyStepsCommands();
```

## Configuration
You can create `steps.conf.js` configuration file in the root of your `test` folder near `wdio.conf.js` file. Parameters that can be set inside `steps.conf.js`:
- `const loaderSelectors = [];` - array of selectors for loaders that appear when page is loaded or XHR/AJAX requests
    are done
- `const pages = {};` - object that contains pathes to all page objects used for tests
- `const timeoutBeforeWaitForPageToLoad = 0;` - time in milliseconds to wait before running waitForPageToLoad could be
    used for the slow frameworks

See the [example of steps.conf.js](https://github.com/revjet-qa/wdio-cucumber-steps/blob/master/test/steps.conf.js)

## Todo
Please note that for now only XPath selectors are supported. CSS selectors support will be added in future.

## Contributing
You are welcome to contribute - please see
[CONTRIBUTING.md](https://github.com/revjet-qa/wdio-cucumber-steps/blob/master/CONTRIBUTING.md)
to help you get started

## Thanks
If this plugin was helpful for you, please give it a **★ Star** on
[Github](https://github.com/revjet-qa/wdio-cucumber-steps)
