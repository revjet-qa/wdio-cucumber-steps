/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber');
const { dictionaryObject, getDictionaryObject } = require('../helpers/objects.processor');
const { _r, getInteger } = require('../helpers/utils');


module.exports = function () {
    defineSupportCode(({ When }) => {

        When(_r(`I wait ${dictionaryObject} ms$`), (timeObject) => {
            /**
             * Wait in milliseconds
             * @type {String}
             */
            const timeValue = getDictionaryObject.call(this, timeObject);
            const time = getInteger(timeValue);

            browser.pause(time);
        });

    });
};
