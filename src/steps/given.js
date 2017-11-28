/* eslint no-undef: 0 */
/* eslint new-cap: 0 */

const { defineSupportCode } = require('cucumber')
const { dictionaryObject, getDictionaryObject } = require('../helpers/objects.processor')
const { _r } = require('../helpers/utils')

module.exports = function () {
    defineSupportCode(({ Given }) => {

        Given(_r(`^I open ${dictionaryObject}$`), (urlDictionary) => {
            /**
             * The URL to navigate to
             * @type {String} or {DictionaryObject}
             */
            const url = getDictionaryObject.call(this, urlDictionary)

            browser.url(url)
        })

    })
}
