const killCountUpdate = require("../modules/killCountUpdate");
const logLines = require("../test_logs/logLines");

describe("killCountUpdate function", ()=> {

  it("01. Ignores lines w/o triggerWord", ()=> {
    let logLine = logLines.clientUpdateWithSpaces
    let killsObj = {total: 0}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 0}

    expect(functionReturn).toEqual(expectedResult)
  })

})