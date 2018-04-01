/* global stepsConfig */

module.exports = function waitForPageToLoad () {
    /**
     * Wait for page to get fully loaded
     */
    return new Promise(function (resolve) {
        setTimeout(() => {
            return resolve(browser.waitUntil(stepsConfig.finishedLoadingConditions));
        }, stepsConfig.timeoutBeforeWaitForPageToLoad);
    });
};
