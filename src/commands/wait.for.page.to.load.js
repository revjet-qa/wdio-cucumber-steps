/* global stepsConfig */

module.exports = function waitForPageToLoad () {
    /**
     * Wait for page to get fully loaded
     * @param {callback} callback - A callback to run
     */
    return new Promise(function (resolve) {
        const timeout = 100;
        const finishedLoadingConditions = stepsConfig.finishedLoadingConditions;

        // If loading of the page was finished - launch callback function
        // TODO - add some waiter here
        if (finishedLoadingConditions()) {
            return resolve();
        }

        // If loading of the page was not finished - relaunch finishedLoadingConditions() each 100 ms
        const interval = setInterval(function () {
            if (finishedLoadingConditions()) {
                clearInterval(interval);
                return resolve();
            }
        }, timeout);
    }).catch((err) => {
        throw new Error(err.message);
    });

};
