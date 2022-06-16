const getStartEndPoints = require("../modules/getStartEndPoints");
const readLogLines = require("../modules/readLogLines");
const splitLogLines = require("../modules/splitLogLines");


describe("Read log lines", () => {

  it("01. 1 match, 1 player, 0 kills", ()=> {
    let logLinesArray = splitLogLines('./test_logs/testLog02.log')
    let allStartEndPoints = getStartEndPoints(logLinesArray)
    let functionResult = readLogLines(logLinesArray, allStartEndPoints)
    let expectedResult = [
      "0:00",
      "15:00",
      "20:34",
      "20:34",
      "20:37",
      "20:37",
      "20:37",
      "20:37",
      "20:37"
    ]

    expect(functionResult).toEqual(expectedResult)

  })

})