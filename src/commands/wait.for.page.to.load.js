/* global stepsConfig */

module.exports = function waitForPageToLoad () {
    /**
     * Wait for page to get fully loaded
     * @param {callback} callback - A callback to run
     */
    return browser.waitUntil(stepsConfig.finishedLoadingConditions);
};
