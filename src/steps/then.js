/* eslint no-undef: 0 */

'use strict'

const { defineSupportCode } = require('cucumber');
const { pageObject, getPageObject } = require('../helpers/objects.processor')
const { _r } = require('../helpers/utils')

module.exports = function () {
    defineSupportCode(({ Then }) => {

        Then(_r(`^${pageObject} should be present$`), (object) => {
            /**
             * The element should be present
             * @type {PageObject}
             */
            const locator = getPageObject(object)

            browser.$(locator).waitForExist();
        });

    });
}
