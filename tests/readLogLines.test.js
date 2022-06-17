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

})