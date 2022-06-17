const organizeMatchInfo = require("../modules/organizeMatchInfo");

describe("organizeMatchInfo function", ()=> {

  it("01. Match with two players with kills, and no world kills", ()=> {
    let playersObj = {'2': "Isgalamido", '3': "Dono da Bola"}
    let killsObj = {total: 3, '2': 2, '3': 1}

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 3,
      players: ["Isgalamido", "Dono da Bola"],
      kills: {Isgalamido: 2, "Dono da Bola": 1},
      ranked_players: {
        1: ["Isgalamido"],
        2: ["Dono da Bola"]
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("02. Match where at least one player has no kills (no key in killsObj)", ()=> {
    let playersObj = {'2': "Isgalamido", '3': "Dono da Bola"}
    let killsObj = {total: 2, '2': 2}

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 2,
      players: ["Isgalamido", "Dono da Bola"],
      kills: {Isgalamido: 2, "Dono da Bola": 0},
      ranked_players: {
        1: ["Isgalamido"],
        2: ["Dono da Bola"]
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("03. Match with only world kills", () => {
    let playersObj = {'2': "Isgalamido", '3': "Dono da Bola"}
    let killsObj = {total: 11}

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 11,
      players: ["Isgalamido", "Dono da Bola"],
      kills: {Isgalamido: 0, "Dono da Bola": 0},
      ranked_players: {
        1: ["Isgalamido", "Dono da Bola"]
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("04. Match with only one player without kills, but with world kills", () => {
    let playersObj = {'2': "Isgalamido"}
    let killsObj = {total: 11}

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 11,
      players: ["Isgalamido"],
      kills: {Isgalamido: 0},
      ranked_players: {
        1: ["Isgalamido"]
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("05. Match with only one player without kills, nor world kills", () => {
    let playersObj = {'2': "Isgalamido"}
    let killsObj = {total: 0}

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 0,
      players: ["Isgalamido"],
      kills: {Isgalamido: 0},
      ranked_players: {
        1: ["Isgalamido"]
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

  it("06. Match with 6 players", () => {
    let playersObj = {
      '2': "User 01",
      '3': "User 02",
      '4': "User 03",
      '5': "User 04",
      '6': "User 05",
      '7': "User 06",
    }
    let killsObj = {
      total: 27,
      "2": 7,
      "3": 2,
      "4": 6,
      "5": 3,
      "6": 5,
      "7": 4,
    }

    let functionReturn = organizeMatchInfo(playersObj, killsObj)
    let expectedResult = {
      total_kills: 27,
      players: [
        "User 01",
        "User 02",
        "User 03",
        "User 04",
        "User 05",
        "User 06"],
      kills: {
        "User 01": 7,
        "User 02": 2,
        "User 03": 6,
        "User 04": 3,
        "User 05": 5,
        "User 06": 4
      },
      ranked_players: {
        1: ["User 01"],
        2: ["User 03"],
        3: ["User 05"],
        4: ["User 06"],
        5: ["User 04"],
        6: ["User 02"],
      }
    }

    expect(functionReturn).toEqual(expectedResult)
  })

})