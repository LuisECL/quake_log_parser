const clientUpdate = function(logLine, playersObj){

  const triggerWord = logLine[1];
  const clientID = logLine[2];

  if(triggerWord !== "ClientUserinfoChanged:"){
    return playersObj
  }

  const userName = logLine[3].split("\\")[1]
  console.log(userName)

  if(userName == playersObj[clientID]){
    return playersObj
  }

}

module.exports = clientUpdate