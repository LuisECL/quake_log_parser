const getStartEndPoints = require("../modules/getStartEndPoints");
const readLogLines = require("../modules/readLogLines");
const splitLogLines = require("../modules/splitLogLines");


describe("Read log lines", () => {

  it("01. 1 match, 1 player, 0 kills", ()=> {
    let logLinesArray = splitLogLines('./test_logs/testLog02.log')
    let allStartEndPoints = getStartEndPoints(logLinesArray)
    let functionResult = readLogLines(logLinesArray, allStartEndPoints)
    let expectedResult = []

    expect(functionResult).toEqual(expectedResult)

  })

})