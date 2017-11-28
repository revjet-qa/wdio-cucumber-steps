'use strict'

const fs = require('fs')
const files = fs.readdirSync('./src/steps')

files.forEach((f) => {
    const path = `./src/steps/${f}`
    const fileSteps = require(path)

    if (typeof fileSteps === 'function') {
        fileSteps.apply(this)
    }
})
