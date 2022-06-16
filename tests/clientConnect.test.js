const clientConnect = require("../modules/clientConnect");

describe('clientConnect reading function',()=> {

  it('01. Ignores lines w/o triggerWord', ()=> {
    let logLine = [
      '0:00',
      'InitGame:',
      '\\sv_floodProtect\\1\\sv_maxPing\\0\\sv_minPing\\0\\sv_maxRate\\10000\\sv_minRate\\0\\sv_hostname\\Code',
      'Miner','Server\\g_gametype\\0\\sv_privateClients\\2\\sv_maxclients\\16\\sv_allowDownload\\0\\dmflags\\0\\fraglimit\\20\\timelimit\\15\\g_maxGameClients\\0\\capturelimit\\8\\version\\ioq3',
      '1.36',
      'linux-x86_64',
      'Apr',
      '12',
      '2009\\protocol\\68\\mapname\\q3dm17\\gamename\\baseq3\\g_needpass\\0'
    ]
    let playersObj = {}
    let killsObj = {total: 0}

    let functionReturn = clientConnect(logLine, playersObj, killsObj)
    let expectedResult = [playersObj, killsObj]

    expect(functionReturn).toEqual(expectedResult)
  })

  it('02. If player already created does nothing', ()=> {
    let logLine = ['20:34', 'ClientConnect:', '2']
    let playersObj = {'2': "Isgalamido"}
    let killsObj = {total: 0, '2': 0}

    let functionReturn = clientConnect(logLine, playersObj, killsObj)
    let expectedResult = [
      {'2': "Isgalamido"},
      {total: 0, '2': 0}
    ]

    expect(functionReturn).toEqual(expectedResult)
  })

  it('03. Adds a new player to the playersObj and killsObj with killCount as 0', ()=> {
    let logLine = ['20:34', 'ClientConnect:', '3']
    let playersObj = {'2': "Isgalamido"}
    let killsObj = {total: 0, '2': 0}

    let functionReturn = clientConnect(logLine, playersObj, killsObj)
    let expectedResult = [
      {'2': "Isgalamido", '3': "player's_name"},
      {total: 0, '2': 0, '3': 0}
    ]

    expect(functionReturn).toEqual(expectedResult)
  })

  it('04. Adds first player of the match', ()=> {
    let logLine = ['20:34', 'ClientConnect:', '2']
    let playersObj = {}
    let killsObj = {total: 0}

    let functionReturn = clientConnect(logLine, playersObj, killsObj)
    let expectedResult = [
      {'2': "player's_name"},
      {total: 0, '2': 0}
    ]

    expect(functionReturn).toEqual(expectedResult)
  })

  it('05. Test 02 + total of 6 players', ()=> {
    let logLine = ['20:34', 'ClientConnect:', '3']
    let playersObj = {
      '2': "Oootsimo",
      '3': "Dono da Bola",
      '4': "Zeh",
      '5': "Chessus",
      '6': "Mal",
      '7': "Assassinu Credi",
    }
    let killsObj = {
      total: 20,
      '2': 5,
      '3': 4,
      '4': 3,
      '5': 2,
      '6': 1,
      '7': 0
    }

    let functionReturn = clientConnect(logLine, playersObj, killsObj)
    let expectedResult = [
      {
        '2': "Oootsimo",
        '3': "Dono da Bola",
        '4': "Zeh",
        '5': "Chessus",
        '6': "Mal",
        '7': "Assassinu Credi",
      },
      {
        total: 20,
        '2': 5,
        '3': 4,
        '4': 3,
        '5': 2,
        '6': 1,
        '7': 0
      }
    ]

    expect(functionReturn).toEqual(expectedResult)
  })

})