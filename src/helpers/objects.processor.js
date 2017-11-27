/* eslint no-param-reassign: 0*/
/* eslint no-undef: 0 */

const { _r } = require('./utils')

const dynamicId = '$dynamicId$'
const regDynamicId = '\\$dynamicId\\$'

// Can come from applysteps ??
const pageObject = '([a-zA-Z0-9_-]+ from [a-zA-Z0-9_-]+ page)'
const pageObjectsParts = '^([a-zA-Z0-9_-]+) from ([a-zA-Z0-9_-]+) page$'

const dictionaryObject = '([a-zA-Z0-9_-]+ from [a-zA-Z0-9_-]+ dictionary|"[^"]*")'
const dictionaryObjectsParts = '^(?:([a-zA-Z0-9_-]+) from ([a-zA-Z0-9_-]+) dictionary|"([^"]*)")$'

// Todo do we need this in csp-qa
function injectInto(locator, injection) {
    const lastInjectionSymbol = injection.slice(-1)
    const lastLocatorSumbol = locator.slice(-1)

    if (lastInjectionSymbol !== ']') {
        // Add ']' to the end of injection only if missing (for backward compatibility)
        injection += ']'
    }
    if (lastLocatorSumbol === ')') {
        // If our locator ends with round brackets
        return injectInto(locator.replace(/\)$/, ''), injection) + ')'
    }
    if (lastLocatorSumbol === ']') {
        if (locator.match(/\[[0-9]+\]$/)) {
            // Locator ends with brackets, which contain some xpath num
            const nums = locator.match(/\[[0-9]+\]$/)[0]
            const body = locator.replace(/\[[0-9]+\]$/, '')

            return injectInto(body, injection) + nums
        }
        return locator.substring(0, locator.length - 1) + ' and ' + injection
    }
    return locator + '[' + injection
}

function pageObjectGetter(str) {
    const match = _r(pageObjectsParts).exec(str)

    if (!match) {
        throw new Error(`Was unable to find Page Object for "${str}"`)
    }
    if (match[1]) {
        const page = match[2]
        const object = match[1]

        if (!pages[page]) {
            throw new Error(`"${page}" page is missing`)
        }
        if (!pages[page][object]) {
            throw new Error(`"${object}" page object is missing for the "${page}" page`)
        }
        return pages[page][object]
    }
    throw new Error(`Unknown Page Object type for "${str}"`)
}

function getPageObject(str) {
    const pageObjectGetterFunc = objectsProcessor.pageObjectGetter || pageObjectGetter
    const value = pageObjectGetterFunc(str)
    const idValue = value.replace(_r(regDynamicId, 'g'), id.getId())
    const injection = 'not(ancestor-or-self::*[contains(@style,"visibility: hidden;") ' +
    'or contains(@style,"display: none") or contains(@class,"x-hide-offsets")])'
    const injectedvalue = injectInto(idValue, injection)

    return injectedvalue
}

function dicionaryGetter(str) {
    const match = _r(dictionaryObjectsParts).exec(str)

    if (!match) {
        throw new Error(`Was unable to find Dictionary Object type for  "${str}"`)
    }
    if (match[1]) {
        const dictionary = match[2]
        const object = match[1]

        if (!pages[dictionary]) {
            throw new Error(`"${dictionary}" page is missing`)
        }
        if (!pages[dictionary][object]) {
            throw new Error(`"${object}" page object is missing for the "${dictionary}" page`)
        }
        return pages[dictionary][object]
    }
    if (match[3] !== undefined) {
        return match[3]
    }
    throw new Error(`Unknown Dictionary Object type for "${str}"`)
}

function getDictionaryObject(str) {
    const dicionaryGetterFunc = objectsProcessor.dicionaryGetter || dicionaryGetter
    const value = dicionaryGetterFunc(str)
    const idValue = value.replace(_r(regDynamicId, 'g'), id.getId())

    return idValue
}

module.exports = {
    dynamicId,
    pageObject,
    dictionaryObject,
    injectInto,
    getPageObject,
    getDictionaryObject
}
