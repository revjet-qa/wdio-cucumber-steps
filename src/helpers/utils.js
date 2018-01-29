const escapeRegExp = function (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\$&');
};

const _r = function (str, flags) {
    return new RegExp(escapeRegExp(str), flags);
};

/**
 * Will look for integers in received string and returns them
 * @param {string} str - dictionaryObject
 * @returns {integer}
 */
const getInteger = function (str) {
    const int = parseInt(str.replace(/\D+/g, ''), 10);

    return int;
};

module.exports = {
    escapeRegExp,
    _r,
    getInteger
};
