const getStartEndPoints = require("../modules/getStartEndPoints");
const splitLogLines = require("../modules/splitLogLines");

let logLinesArray = splitLogLines('./qgames.log')

describe('Get start and end points', () => {

  it('01. Returns start and end points for 1 match', () => {
    let testLog01LinesArray = splitLogLines('./test_logs/testLog01.log')
    let functionReturn = getStartEndPoints(testLog01LinesArray)
    let expectedReturn = [[1, 9]]

    expect(functionReturn).toEqual(expectedReturn)
  })

  it('02. Returns start and end points for 2 matches', ()=> {
    let testLog02LinesArray = splitLogLines('./test_logs/testLog02.log')
    let functionReturn = getStartEndPoints(testLog02LinesArray)
    let expectedReturn = [[1, 9], [10, 97]]

    expect(functionReturn).toEqual(expectedReturn)
  })

  it("03. Test 02 + Ignores user with name 'InitGame:' (lines 14 and 19 of testLog02", ()=> {
    let testLog02LinesArray = splitLogLines('./test_logs/testLog02.log')
    let functionReturn = getStartEndPoints(testLog02LinesArray)
    let expectedReturn = [[1, 9], [10, 97]]

    expect(functionReturn).toEqual(expectedReturn)
  })

  it("04. Test with qgames.log", ()=> {
    let testLog02LinesArray = splitLogLines('./qgames.log')
    let functionReturn = getStartEndPoints(testLog02LinesArray)
    let expectedReturn = [[1, 9], [10, 96], [97, 157], [158, 673], [674, 815], [816, 1011], [1012, 1611], [1612, 1990], [1991, 2354], [2355, 2525], [2526, 2691], [2692, 3405], [3406, 3460], [3461, 4014], [4015, 4063], [4064, 4092], [4093, 4227], [4228, 4295], [4296, 4711], [4712, 4757], [4758, 5305]]

    expect(functionReturn).toEqual(expectedReturn)
  })

})