/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject } = require('../helpers/objects.processor');
const { dictionaryObject, getDictionaryObject } = require('../helpers/objects.processor');
const { _r } = require('../helpers/utils');

module.exports = function () {
    defineSupportCode(({ Then }) => {

        Then(_r(`^${pageObject} should be present$`), async function async (element) {
            /**
             * The element should be present
             * @param {pageObject} element - String or "page"."object" to select the element
             */
            const locator = getPageObject(element);

            try {
                return await browser.waitForExist(locator);
            } catch (err) {
                throw new Error(err);
            }
        });

        Then(_r(`^${pageObject} should not be present$`), async function async (element) {
            /**
             * The element should not be present
             * @param {pageObject} element - String or "page"."object" to select the element
             */
            const locator = getPageObject(element);

            try {
                return await browser.waitForExist(locator, null, true);
            } catch (err) {
                throw new Error(err);
            }
        });

        Then(_r(`^${pageObject} has text ${dictionaryObject}$`), async function async (element, textPhrase) {
            /**
            * @param {pageObject} element - String or "page"."object" to select the element
            * @type {String} or {DictionaryObject}
             */
            const locator = getPageObject(element);
            const locatorText = await browser.getText(locator);
            const textValue = getDictionaryObject.call(this, textPhrase);

            expect(locatorText).to.be.equal(textValue);
        });

    });
};
