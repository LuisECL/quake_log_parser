const clientConnect = require("./clientConnect");
const clientUpdate = require("./clientUpdate");
const killCountUpdate = require("./killCountUpdate");

const readLogLines = function(logLinesArray, allStartEndPoints) {

  for (let j=0; j<allStartEndPoints.length; j++){

    let startEndPair = allStartEndPoints[j]
    let startPoint = startEndPair[0]
    let endPoint = startEndPair[1]
    let playersObj = {}
    let killsObj = {total: 0}


    for (let i = startPoint; i <= endPoint; i++){
      let logLine = logLinesArray[i].split(" ")

      clientConnect(logLine, playersObj, killsObj)
      clientUpdate(logLine, playersObj)
      killCountUpdate(logLine, killsObj)
      console.log([playersObj, killsObj])
    }

    let gameNum = "game_"+(j+1)
    console.log(gameNum)

  };

  return

}

module.exports = readLogLines