/* global stepsConfig */

module.exports = function waitForPageToLoad (callback) {
    /**
     * Wait for page to get fully loaded
     * @param {callback} callback - A callback to run
     */
    const timeout = 100;
    let loaderSelectors = stepsConfig.loaderSelectors;

    let finishedLoadingConditions = function () {
        // Check if jQuery is present on the page and if any XMLHttpRequests (AJAX) are in progress
        if (typeof $ !== 'undefined' && $.active) {
            return false;
        }

        // Check if any loaders are still present on the page
        return !loaderSelectors.some((selector) => browser.execute((s) => document.querySelector(s), selector));
    };

    // If loading of the page was finished - launch callback function
    if (finishedLoadingConditions()) {
        callback();
    }

    // If loading of the page was not finished - relaunch finishedLoadingConditions() each 100 ms
    let interval = setInterval(function () {
        if (finishedLoadingConditions()) {
            clearInterval(interval);
            callback();
        }
    }, timeout);

};
