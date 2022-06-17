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

  it("02. World kill: Don't subtract if player's count is 0, but add 1 to total kills", ()=> {
    let logLine = logLines.worldKillUser2
    let killsObj = {total: 0, '2': 0}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 1, '2':0}

    expect(functionReturn).toEqual(expectedResult)
  })

  it("03. World kill: Don't subtract if player isn't in killsObj, but add 1 to total kills", ()=> {
    let logLine = logLines.worldKillUser2
    let killsObj = {total: 0}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 1}

    expect(functionReturn).toEqual(expectedResult)
  })

  it("04. World kill: Subtract 1 from players count and add 1 to total kills", ()=> {
    let logLine = logLines.worldKillUser2
    let killsObj = {total: 1, '2':1}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 2, '2':0}

    expect(functionReturn).toEqual(expectedResult)
  })

  it("05. Adds 1 to player's kill count and total kills", ()=> {
    let logLine = logLines.user2KillUser3
    let killsObj = {total: 1, '2':1}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 2, '2':2}

    expect(functionReturn).toEqual(expectedResult)
  })

  it("06. Players first kill: start players count at 1 and add 1 to total kills", ()=> {
    let logLine = logLines.user2KillUser3
    let killsObj = {total: 1}

    let functionReturn = killCountUpdate(logLine, killsObj)
    let expectedResult = {total: 2, '2':1}

    expect(functionReturn).toEqual(expectedResult)
  })

})