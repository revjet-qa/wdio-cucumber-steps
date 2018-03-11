// Array of selectors for loaders that appear when page is loaded or XHR/AJAX requests are done
let loaderSelectors = [
    'div:not([style*="display: none"])[class*="test-loader"]',
    'div:not([style*="visibility: hidden"])[class*="test-loader"]'
];

// Object that contains pathes to all page objects used for tests
let pages = {
    main: require('./features/page_objects/main'),
    values: require('./features/dictionary_objects/values')
};

// Object that contains methods for random id generation
let id = {
    value: '',
    regenerate: () => this.value === (new Date()).getTime(),
    getId: () => this.value
};

module.exports = {
    loaderSelectors,
    pages,
    id
};
