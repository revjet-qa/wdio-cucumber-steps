/* global stepsConfig */

module.exports = function waitForPageToLoad (callback) {
    /**
     * Wait for page to get fully loaded
     * @param {callback} callback - A callback to run
     */
    const timeout = 100;
    const finishedLoadingConditions = stepsConfig.finishedLoadingConditions;

    // If loading of the page was finished - launch callback function
    // TODO - add some waiter here
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
