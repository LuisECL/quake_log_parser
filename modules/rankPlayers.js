const rankPlayers = function(kills){

  let killValues = []
  let ranked_players = {}

  for (player in kills){
    if(killValues.includes(kills[player])){
      continue
    }
    killValues.push(kills[player])
  }

  let killValuesSorted = killValues.sort((a, b) => a - b).reverse()

  for (let i=0; i<killValues.length; i++){
    let currentPosition = (i+1)
    let currentScore = killValuesSorted[i]
    ranked_players[currentPosition] = []

    for (player in kills){
      if(kills[player] == currentScore){
        ranked_players[currentPosition].push(player)
      }
    }
  }

  return ranked_players

}

module.exports = rankPlayers