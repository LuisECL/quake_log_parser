const killCountUpdate = function(logLine, killsObj){

  let triggerWord = logLine[1];
  let killerID = logLine[2];
  let deathID = logLine[3]
  let worldID = "1022"

  if(triggerWord != "Kill:"){
    return killsObj
  }

  if(killerID == worldID){
    killsObj.total++

    if(killsObj[deathID] == 0 || killsObj[deathID] == undefined){
      return killsObj
    }

    killsObj[deathID]--
    return killsObj
  }

  if(killsObj.hasOwnProperty([killerID])){
    killsObj[killerID]++
    killsObj.total++
    return killsObj
  } else {
    killsObj[killerID] = 1
    killsObj.total++
    return killsObj
  }

}

module.exports = killCountUpdate