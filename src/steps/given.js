const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given }) => {

    Given(/^I open "([^"]*)?"$/, (url) => {
        /**
         * The URL to navigate to
         * @type {String}
         */
        browser.url(url);
    });

});
