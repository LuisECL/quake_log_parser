const clientConnect = require("./clientConnect");
const clientUpdate = require("./clientUpdate");

const readLogLines = function(logLinesArray, allStartEndPoints) {

  allStartEndPoints.forEach(startEndPair => {

    let startPoint = startEndPair[0]
    let endPoint = startEndPair[1]
    let playersObj = {}
    let killsObj = {total: 0}


    for (let i = startPoint; i <= endPoint; i++){
      let logLine = logLinesArray[i].split(" ")

      clientConnect(logLine, playersObj, killsObj)
      clientUpdate(logLine, playersObj)
      console.log([playersObj, killsObj])
    }

  });

  return

}

module.exports = readLogLines