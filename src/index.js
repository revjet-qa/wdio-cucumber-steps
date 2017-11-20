'use strict'

const fs = require('fs');

// Todo - some filters could be added here
module.exports = function () {
    const files = fs.readdirSync('./src/steps')

    files.forEach((f) => {
        const path = `./steps/${f}`
        const fileSteps = require(path)

        if (typeof fileSteps === 'function') {
            fileSteps.apply(this)
        }
    })
}
