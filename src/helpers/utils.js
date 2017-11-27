const escapeRegExp = function (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\$&')
}

const _r = function (str, flags) {
    return new RegExp(escapeRegExp(str), flags)
}

module.exports = {
    escapeRegExp,
    _r
}
