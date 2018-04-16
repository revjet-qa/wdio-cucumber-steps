/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject, dictionaryObject, getDictionaryObject, injectInto } = require(
    '../helpers/objects.processor');
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

        Then(_r(`^I wait for ${pageObject} to match ${dictionaryObject}$`), async function async (element, phrase) {
            /**
             * The phrase inside the element should match the specified phrase
             * @param {pageObject} element - String or "page"."object" to select the element
             * @param {dictionaryObject} phrase - String or "page"."object" with phrase that should be matched
             */
            const injection = `contains(.,\"${getDictionaryObject.call(this, phrase)}\")]`;
            const locator = injectInto(getPageObject(element), injection);

            try {
                return await browser.waitForExist(locator);
            } catch (err) {
                throw new Error(err);
            }
        });

    });
};
