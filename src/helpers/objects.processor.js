'use strict'

/* eslint no-param-reassign: 0*/

const { _r } = require('./utils')

const dynamicId = '$dynamicId$'
const regDynamicId = '\\$dynamicId\\$'

// Can come from applysteps ??
const pageObject = '("[^"]+"\."[^"]+")'
const pageObjectsParts = '^"([^"]+)"\."([^"]+)"$'

const dictionaryObject = '("[^"]+"\."[^"]+"|"[^"]*")'
const dictionaryObjectsParts = '^(?:"([^"]+)"\."([^"]+)"|"([^"]*)")$'

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
        } else {
            // Locator ends with brackets, which contain some properties
            return locator.substring(0, locator.length - 1) + ' and ' + injection
        }
    } else {
        // Locator contains no brackets
        return locator + '[' + injection
    }
}

function parsePageObject(str) {
    const match = _r(pageObjectsParts).exec(str)

    if (!match) {
        throw new Error(`Was unable to find Page Object for "${str}"`)
    }
    if (match[1]) {
        const page = match[1]
        const object = match[2]

        if (!this.pages[page]) {
            throw new Error(`"${page}" page is missing`)
        }
        if (!this.pages[page][object]) {
            throw new Error(`"${object}" page object is missing for the "${page}" page`)
        }
        return this.pages[page][object]
    }
    throw new Error(`Unknown Page Object type for "${str}"`)
}

function getPageObject(str) {
    const value = parsePageObject.call(this, str)
    const idValue = value.replace(_r(regDynamicId, 'g'), this.id)
    const injection = 'not(ancestor-or-self::*[contains(@style,"visibility: hidden;") ' +
    'or contains(@style,"display: none;") or contains(@class,"x-hide-offsets")])';
    const injectedvalue = injectInto(idValue, injection)

    return injectedvalue
}

function parseDictionaryObject(str) {
    const match = _r(dictionaryObjectsParts).exec(str)

    if (!match) {
        throw new Error(`Was unable to find Dictionary Object type for  "${str}"`)
    }
    if (match[1]) {
        const dictionary = match[1]
        const object = match[2]

        if (!this.pages[dictionary]) {
            throw new Error(`"${dictionary}" page is missing`)
        }
        if (!this.pages[dictionary][object]) {
            throw new Error(`"${object}" page object is missing for the "${dictionary}" page`)
        }
        return this.pages[dictionary][object]
    }
    if (match[3] !== undefined) {
        return match[3]
    }
    throw new Error(`Unknown Dictionary Object type for "${str}"`)
}

function getDictionaryObject(str) {
    const value = parseDictionaryObject.call(this, str)
    const idValue = value.replace(_r(regDynamicId, 'g'), this.id)

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
