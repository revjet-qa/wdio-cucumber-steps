const { expect } = require('chai');

const {
    injectInto,
    pageObject,
    dictionaryObject,
    getPageObject,
    getDictionaryObject,
    dynamicId
} = require('../../src/helpers/objects.processor');
const { _r } = require('../../src/helpers/utils');

const realId = 12345;

global.pages = {
    main: {
        object: `//div[@id='${dynamicId}']`
    },
    book: {
        word: `dictionaryObject${dynamicId}`
    }
};

global.id = {
    getId: () => realId
};

global.objectsProcessor = {};

describe('injectInto', () => {
    const data = [
        { locator: '//a', injection: '@class="b"]', result: '//a[@class="b"]' },
        { locator: '//a', injection: '@class="b"', result: '//a[@class="b"]' },
        { locator: '//a[@id=1]', injection: '@class="b"', result: '//a[@id=1 and @class="b"]' },
        { locator: '(//a)[1]', injection: '@class="b"]', result: '(//a[@class="b"])[1]' }
    ];

    data.forEach((d) => {
        it(`should get "${d.result}" string from "${d.locator}" and "${d.injection}" injection`, () => {
            expect(injectInto(d.locator, d.injection)).to.be.equals(d.result);
        });
    });
});

describe('getPageObject', () => {
    const data = [
        {
            step: 'When I click object from main page',
            regExp: _r(`When I click ${pageObject}`),
            result: `//div[@id='${realId}' and not(ancestor-or-self::*[contains(@style,"visibility: hidden;")
                 or contains(@style,"display: none") or contains(@class,"x-hide-offsets")])]`
        }
    ];

    data.forEach((d) => {
        const { step, regExp, result } = d;

        it(`should correctly get pageObject from the <<${step}>> step`, (next) => {
            const match = step.match(regExp);

            expect(match).to.be.an('array');
            const strPageObject = match[1];
            const pageObjectVal = getPageObject(strPageObject);

            expect(pageObjectVal).to.be.equals(result);
            next();
        });
    });
});

describe('getDictionaryObject', () => {
    const data = [
        {
            step: 'When I write word from book dictionary',
            regExp: _r(`When I write ${dictionaryObject}`),
            result: `dictionaryObject${realId}`
        },
        {
            step: `When I write "dictionaryObject${dynamicId}"`,
            regExp: _r(`When I write ${dictionaryObject}`),
            result: `dictionaryObject${realId}`
        }
    ];

    data.forEach((d) => {
        const { step, regExp, result } = d;

        it(`should correctly get dictionaryObject from the <<${step}>> step`, (next) => {
            const match = step.match(regExp);

            expect(match).to.be.an('array');
            const strDictionaryObject = match[1];
            const dictionaryObjectVal = getDictionaryObject(strDictionaryObject);

            expect(dictionaryObjectVal).to.be.equals(result);
            next();
        });
    });
});
