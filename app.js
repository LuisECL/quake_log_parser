// Importing libraries and modules
const fs = require('fs')
const splitLogLines = require('./modules/splitLogLines')

// Implementing code
let content = splitLogLines('./qgames.log')

// Returning result
console.log(content)