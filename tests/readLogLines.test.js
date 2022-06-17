const getStartEndPoints = require("../modules/getStartEndPoints");
const readLogLines = require("../modules/readLogLines");
const splitLogLines = require("../modules/splitLogLines");


describe("Read log lines", () => {

  it("01. 1 match, 1 player, 0 kills", ()=> {
    let logLinesArray = splitLogLines('./test_logs/testLog01.log')
    let allStartEndPoints = getStartEndPoints(logLinesArray)
    let functionResult = readLogLines(logLinesArray, allStartEndPoints)
    let expectedResult = {
      game_1: {
        total_kills: 0,
        players: [
          "Isgalamido"
        ],
        kills: {
          "Isgalamido": 0
        }
      }
    }

    expect(functionResult).toEqual(expectedResult)

  })

  it("02. Test 01 + match with 2 players, 11 total kills and 8 world kills", ()=> {
    let logLinesArray = splitLogLines('./test_logs/testLog02.log')
    let allStartEndPoints = getStartEndPoints(logLinesArray)
    let functionResult = readLogLines(logLinesArray, allStartEndPoints)
    let expectedResult = {
      game_1: {
        total_kills: 0,
        players: [
          "Isgalamido"
        ],
        kills: {
          "Isgalamido": 0
        }
      },
      game_2: {
        total_kills: 11,
        players: [
          "Isgalamido",
          "Mocinha"
        ],
        kills: {
          "Isgalamido": 0,
          "Mocinha": 0
        }
      }
    }

    expect(functionResult).toEqual(expectedResult)

  })

})