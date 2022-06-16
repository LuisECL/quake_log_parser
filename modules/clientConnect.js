const clientConnect = function(logLine, playersObj, killsObj){

  const triggerWord = logLine[1];
  const clientID = logLine[2];

  if(triggerWord !== "ClientConnect:"){
    return [playersObj, killsObj]
  }

  if(playersObj.hasOwnProperty(clientID)){
    return [playersObj, killsObj]
  }

  playersObj[clientID] = "player's_name"
  killsObj[clientID] = 0
  return [playersObj, killsObj]

}

module.exports = clientConnect