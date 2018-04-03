/* global stepsConfig */

module.exports = async function waitForPageToLoad () {
    /**
     * Wait for page to get fully loaded
     */
    await browser.pause(stepsConfig.timeoutBeforeWaitForPageToLoad);
    return await browser.waitUntil(stepsConfig.finishedLoadingConditions);
};
