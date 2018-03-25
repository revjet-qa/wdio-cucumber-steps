const defaultFinishedLoadingConditions = (loaderSelectors) => {
    // Check if jQuery is present on the page and if any XMLHttpRequests (AJAX) are in progress
    if (typeof $ !== 'undefined' && $.active) {
        return false;
    }

    // Check if any loaders are still present on the page
    return browser.executeAsync((selectors, done) => {
        done(!selectors.some((selector) => {
            return document.querySelector(selector);
        }));
    }, loaderSelectors).value;

};

const defaultIdGenerator = () => (new Date()).getTime();

module.exports = function ({
    loaderSelectors = [], // <string>[] - array of xpath selectors, that will be used by finishedLoadingConditions.
    finishedLoadingConditions = defaultFinishedLoadingConditions, // <(loaderSelectors) => <boolean>>.
    pages = {}, // <{[key: string]: {[key: string]: <string>}}> - object, that contains "key" -> "Page object" pairs.
    defaultIdValue = '', // Default value of steps config Id.
    idGenerator = defaultIdGenerator, // <() => <string|number>> - function, that will return new generated id.
    objectsProcessor = {} // objectsProcessor childs could be previded here - see objects.processor.js for more details.
}) {
    const Id = class {
        constructor () {
            this.value = defaultIdValue || idGenerator.call(this);
        }
        get idValue () {
            return this.value;
        }
        regenerate () {
            this.value = idGenerator.call(this);
        }
    };

    return {
        loaderSelectors,
        finishedLoadingConditions: finishedLoadingConditions.bind(this, loaderSelectors),
        pages,
        id: new Id(),
        objectsProcessor
    };
};
