const readLogLines = function(logLinesArray, allStartEndPoints) {

  // Provisional: variable to store time stamps
  const timeStampArray = []

  allStartEndPoints.forEach(startEndPair => {

    let startPoint = startEndPair[0]
    let endPoint = startEndPair[1]
    let playersObj = {}


    for (let i = startPoint; i <= endPoint; i++){
      let logLine = logLinesArray[i].split(" ")
      timeStampArray.push(timeStamp)
    }

  });

  console.log(timeStampArray)
  return timeStampArray

}

module.exports = readLogLines