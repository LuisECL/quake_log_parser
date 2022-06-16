const clientUpdate = function(logLine, playersObj){

  const triggerWord = logLine[1];
  const clientID = logLine[2];

  if(triggerWord !== "ClientUserinfoChanged:"){
    return playersObj
  }

  let stringsAfterThirdElement = []
  for (let  i=3; i <logLine.length; i++){
    stringsAfterThirdElement.push(logLine[i])
  }

  let stringWithUsersName = stringsAfterThirdElement.join(' ')
  const userName = stringWithUsersName.split("\\")[1]

  if(userName == playersObj[clientID]){
    return playersObj
  }

  playersObj[clientID] = userName
  return playersObj

}

module.exports = clientUpdate