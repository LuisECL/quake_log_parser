const fs = require('fs');
const splitLogLines = require('../modules/splitLogLines');

describe('Split Log Lines', () => {

  it('01. returns array with 10 lines', () => {
    let pathString = "./test_logs/testLog01.log"
    let functionReturn = splitLogLines(pathString).length
    let expectedResult = 10

    expect(functionReturn).toEqual(expectedResult)
  })

  it('02. parses lines with back slashes', () => {
    let pathString = "./test_logs/testLog01.log"
    let functionReturn = splitLogLines(pathString)[4]
    let expectedResult = "20:34 ClientUserinfoChanged: 2 n\\Isgalamido\\t\\0\\model\\xian/default\\hmodel\\xian/default\\g_redteam\\\\g_blueteam\\\\c1\\4\\c2\\5\\hc\\100\\w\\0\\l\\0\\tt\\0\\tl\\0"

    expect(functionReturn).toEqual(expectedResult)
  })

})