// Importing libraries and modules
const fs = require('fs')
const getStartEndPoints = require('./modules/getStartEndPoints')
const splitLogLines = require('./modules/splitLogLines')

// Implementing code
let logLinesArray = splitLogLines('./qgames.log')
let allStartEndPoints = getStartEndPoints(logLinesArray)

// Returning result
console.log(allStartEndPoints)