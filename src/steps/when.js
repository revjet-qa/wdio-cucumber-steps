/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { dictionaryObject, getInteger } = require('../helpers/objects.processor');
const { _r } = require('../helpers/utils');

module.exports = function () {
    defineSupportCode(({ When }) => {

        When(_r(`I wait ${dictionaryObject} ms$`), (timeValue) => {
            /**
             * Wait in milliseconds
             * @type {String} or {DictionaryObject}
             */
            const time = getInteger.call(this, timeValue);

            // console.log('step returns ' + time);
            browser.pause(time);
        });

    });
};
