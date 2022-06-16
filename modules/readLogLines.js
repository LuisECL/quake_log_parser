const clientConnect = require("./clientConnect");

const readLogLines = function(logLinesArray, allStartEndPoints) {

  allStartEndPoints.forEach(startEndPair => {

    let startPoint = startEndPair[0]
    let endPoint = startEndPair[1]
    let playersObj = {}
    let killsObj = {total: 0}


    for (let i = startPoint; i <= endPoint; i++){
      let logLine = logLinesArray[i].split(" ")

      let returnClientConnect = clientConnect(logLine, playersObj, killsObj)
      console.log(returnClientConnect)
    }

  });

  return

}

module.exports = readLogLines