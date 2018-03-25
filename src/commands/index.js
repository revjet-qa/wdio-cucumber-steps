const waitForPageToLoad = require('./wait.for.page.to.load');

module.exports = function applyCommands () {
    browser.addCommand('waitForPageToLoad', waitForPageToLoad);
};
