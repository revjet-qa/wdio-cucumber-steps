// Array of selectors for loaders that appear when page is loaded or XHR/AJAX requests are done
const loaderSelectors = [
    'div:not([style*="display: none"])[class*="test-loader"]',
    'div:not([style*="visibility: hidden"])[class*="test-loader"]',
    '[id*="loader1"]',
    '[id*="loader2"]'
];

// Object that contains pathes to all page objects used for tests
const pages = {
    main: require('./features/page_objects/main'),
    values: require('./features/dictionary_objects/values')
};

// Time in milliseconds to wait before running waitForPageToLoad
// could be used for the slow frameworks
const timeoutBeforeWaitForPageToLoad = 0;

module.exports = {
    loaderSelectors,
    pages,
    timeoutBeforeWaitForPageToLoad
};
