/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject, dictionaryObject, getDictionaryObject } = require('../helpers/objects.processor');
const { _r, getInteger } = require('../helpers/utils');

module.exports = function () {
    defineSupportCode(({ When }) => {

        When(_r(`I click ${pageObject}$`), (element) => {
            /**
             * Click on the element
             * @param {pageObject} element - String or "page"."object" to select the element
             */
            const locator = getPageObject(element);
            const el = $(locator);

            // TODO - using of chain here ??
            el.waitForExist();
            el.waitForPageToLoad();
            el.click();
        });

        When(_r(`I wait ${dictionaryObject} ms$`), (timeObject) => {
            /**
             * Wait for specified amount of milliseconds
             * @param {String} timeObject - String with specified amount of milliseconds
             */
            const timeValue = getDictionaryObject.call(this, timeObject);
            const time = getInteger(timeValue);

            browser.pause(time);
        });

        When(_r('I close current tab$'), () => {
            /**
             * Close current tab
             */
            browser.close();
        });

        When(_r('I open new window$'), () => {
            /**
             * Open default empty ('about:blank') tab
             */
            browser.newWindow('about:blank');
        });

    });
};
