/* eslint no-undef: 0 */

'use strict'

const { defineSupportCode } = require('cucumber');

module.exports = function () {
    defineSupportCode(({ Given }) => {

        Given(/^I open "([^"]*)?"$/, (url) => {
            /**
             * The URL to navigate to
             * @type {String}
             */
            browser.url(url);
        });

    });
}
