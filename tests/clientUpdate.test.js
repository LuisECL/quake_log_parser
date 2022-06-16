const clientUpdate = require('../modules/clientUpdate')
const logLines = require('../test_logs/logLines')

describe('clientUpdate reading function', ()=> {

  it("01. Ignores lines w/o triggerWord", ()=> {
    let logLine = ['20:34', 'ClientConnect:', '3']
    let playersObj = {'2': "Isgalamido"}

    let functionReturn = clientUpdate(logLine, playersObj)
    let expectedResult = {'2': "Isgalamido"}

    expect(functionReturn).toEqual(expectedResult)
  })

  it("02. If player hasn't changed names, return playersObj", ()=> {
    let logLine = logLines.clientUpdateUser2
    let playersObj = {'2': "Isgalamido"}

    let functionReturn = clientUpdate(logLine, playersObj)
    let expectedResult = {'2': "Isgalamido"}

    expect(functionReturn).toEqual(expectedResult)
  })


})