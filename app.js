// Importing libraries and modules
const fs = require('fs')

// Implementing code
const content = fs.readFileSync("qgames.log", "utf-8")

// Returning result
console.log(content)