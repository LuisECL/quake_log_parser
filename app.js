// Importing libraries and modules
const fs = require('fs');
const getStartEndPoints = require('./modules/getStartEndPoints');
const readLogLines = require('./modules/readLogLines');
const splitLogLines = require('./modules/splitLogLines');

// Implementing code
let logLinesArray = splitLogLines('./qgames.log');
let allStartEndPoints = getStartEndPoints(logLinesArray);
let groupedInfo = readLogLines(logLinesArray, allStartEndPoints)

// Returning result
fs.writeFileSync("grouped_information.json", JSON.stringify(groupedInfo, null, 2))