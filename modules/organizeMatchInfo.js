const organizeMatchInfo = function(playersObj, killsObj){

  let players = []
  let kills = {}

  let total_kills = killsObj.total

  for (id in playersObj){
    players.push(playersObj[id])

    if(!killsObj.hasOwnProperty(id)){
      killsObj[id] = 0
    }

    kills[playersObj[id]] = killsObj[id]

  }

  return {total_kills, players, kills}

}

module.exports = organizeMatchInfo