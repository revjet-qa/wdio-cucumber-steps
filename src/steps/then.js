/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject } = require('../helpers/objects.processor');
const { _r } = require('../helpers/utils');

module.exports = function () {
    defineSupportCode(({ Then }) => {

        Then(_r(`^${pageObject} should be present$`), (object) => {
            /**
             * The element should be present
             * @type {PageObject}
             */
            const locator = getPageObject(object);

            browser.$(locator).waitForExist();
        });
        Then(_r(`^${pageObject} should not be present$`), (object) => {
            /**
             * The element should not be present
             * @type {PageObject}
             */
            const locator = getPageObject(object);

            browser.$(locator).waitForExist(null, true);
        });
    });
};
