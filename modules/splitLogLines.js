const fs = require('fs');

const splitLogLines = function(pathString){
  let content = fs.readFileSync(pathString, 'utf-8')

  let rawLines = content.split("\n");
  let logLinesArray = rawLines.map(e => {
    return e.trim();
  })

  return logLinesArray
}

splitLogLines('./test_logs/testLog01.log')

module.exports = splitLogLines