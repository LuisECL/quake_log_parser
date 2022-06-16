const killCountUpdate = function(logLine, killsObj){

  let triggerWord = logLine[1];

  if(triggerWord != "Kill:"){
    return killsObj
  }

}

module.exports = killCountUpdate