const getStartEndPoints = function(logLinesArray){

  let initGameIndexArray = [];

  for (let i=0; i < logLinesArray.length; i++){
    let logLine = logLinesArray[i]
    let triggerWord = logLine.split(" ")[1]

    if (triggerWord == "InitGame:"){
      console.log(triggerWord)
      initGameIndexArray.push(i)
    }
  };

  let allStartEndPoints = [];

  for (let j = 0; j < initGameIndexArray.length; j++){
    let startEndPoint = []
    startEndPoint.push(initGameIndexArray[j])

    if ((j+1) == initGameIndexArray.length){
      let lastLogLine = (logLinesArray.length - 1)
      startEndPoint.push(lastLogLine)
    } else {
      let lastMatchLine = (initGameIndexArray[j+1]-1)
      startEndPoint.push(lastMatchLine)
    }

    allStartEndPoints.push(startEndPoint)

  }

  return allStartEndPoints

}

module.exports = getStartEndPoints