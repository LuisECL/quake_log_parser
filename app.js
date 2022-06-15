// Importing libraries and modules
const fs = require('fs')
const splitLogLines = require('./modules/splitLogLines')

// Implementing code
let logLinesArray = splitLogLines('./qgames.log')

// Returning result
console.log(logLinesArray)