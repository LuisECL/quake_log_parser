const rankPlayers = require("../modules/rankPlayers");

describe("rankPlayers function", ()=> {

  it("01. 3 players with different values", ()=> {
    let kills = {Isgalamido: 2, "Dono da Bola": 1, Zeh: 3}

    let functionReturn = rankPlayers(kills)
    let expectedResult = {
      1: ["Zeh"],
      2: ["Isgalamido"],
      3: ["Dono da Bola"]
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("02. 3 players, 2 with same values", ()=> {
    let kills = {Isgalamido: 1, "Dono da Bola": 3, Zeh: 3}

    let functionReturn = rankPlayers(kills)
    let expectedResult = {
      1: ["Dono da Bola", "Zeh"],
      2: ["Isgalamido"]
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("03. 3 players with same values", ()=> {
    let kills = {Isgalamido: 3, "Dono da Bola": 3, Zeh: 3}

    let functionReturn = rankPlayers(kills)
    let expectedResult = {
      1: ["Isgalamido", "Dono da Bola", "Zeh"]
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("04. 3 players, all with 0 kills", ()=> {
    let kills = {Isgalamido: 0, "Dono da Bola": 0, Zeh: 0}

    let functionReturn = rankPlayers(kills)
    let expectedResult = {
      1: ["Isgalamido", "Dono da Bola", "Zeh"]
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("05. 7 players, 2 with same kill count", ()=> {
    let kills = {
      "User 01": 6,
      "User 02": 2,
      "User 03": 3,
      "User 04": 4,
      "User 05": 5,
      "User 06": 6,
      "User 07": 7,
    }

    let functionReturn = rankPlayers(kills)
    let expectedResult = {
      1: ["User 07"],
      2: ["User 01", "User 06"],
      3: ["User 05"],
      4: ["User 04"],
      5: ["User 03"],
      6: ["User 02"],
    }

    expect(functionReturn).toEqual(expectedResult)
  })

})