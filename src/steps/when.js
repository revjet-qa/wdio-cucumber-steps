/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject, dictionaryObject, getDictionaryObject } = require('../helpers/objects.processor');
const { _r, getInteger } = require('../helpers/utils');

module.exports = function () {
    defineSupportCode(({ When }) => {

        When(_r(`I click ${pageObject}$`), async function async (element) {
            /**
             * Click on the element
             * @param {pageObject} element - String or "page"."object" to select the element
             */
            const locator = getPageObject(element);

            try {
                await browser.waitForExist(locator);
                await browser.waitForPageToLoad();
                await browser.moveToObject(locator);
                return await browser.click(locator);
            } catch (err) {
                throw new Error(err);
            }
        });

        When(_r(`I wait ${dictionaryObject} ms$`), async function async (timeObject) {
            /**
             * Wait for specified amount of milliseconds
             * @param {String} timeObject - String with specified amount of milliseconds
             */
            const timeValue = getDictionaryObject.call(this, timeObject);
            const time = getInteger(timeValue);

            try {
                return await browser.pause(time);
            } catch (err) {
                throw new Error(err);
            }
        });

        When(_r('I close current tab$'), async function async () {
            /**
             * Close current tab
             */
            try {
                return await browser.close();
            } catch (err) {
                throw new Error(err);
            }
        });

        When(_r('I open new window$'), async function async () {
            /**
             * Open default empty ('about:blank') tab
             */
            try {
                return await browser.newWindow('about:blank');
            } catch (err) {
                throw new Error(err);
            }
        });

    });
};
