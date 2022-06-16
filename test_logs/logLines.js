const logLines = {
  initGame: [
    '0:00',
    'InitGame:',
    '\\sv_floodProtect\\1\\sv_maxPing\\0\\sv_minPing\\0\\sv_maxRate\\10000\\sv_minRate\\0\\sv_hostname\\Code',
    'Miner',
    'Server\\g_gametype\\0\\sv_privateClients\\2\\sv_maxclients\\16\\sv_allowDownload\\0\\dmflags\\0\\fraglimit\\20\\timelimit\\15\\g_maxGameClients\\0\\capturelimit\\8\\version\\ioq3',
    '1.36',
    'linux-x86_64',
    'Apr',
    '12',
    '2009\\protocol\\68\\mapname\\q3dm17\\gamename\\baseq3\\g_needpass\\0'      
  ],
  clientConnectUser2: [ '20:34', 'ClientConnect:', '2' ],
  clientUpdateUser2: [
    '20:34',
    'ClientUserinfoChanged:',
    '2',
    'n\\Isgalamido\\t\\0\\model\\xian/default\\hmodel\\xian/default\\g_redteam\\\\g_blueteam\\\\c1\\4\\c2\\5\\hc\\100\\w\\0\\l\\0\\tt\\0\\tl\\0'
  ],
  clientUpdateWithSpaces: [
    '21:51',
    'ClientUserinfoChanged:',
    '2',
    'n\\Dono',
    'da',
    'Bola\\t\\0\\model\\sarge/krusade\\hmodel\\sarge/krusade\\g_redteam\\\\g_blueteam\\\\c1\\5\\c2\\5\\hc\\95\\w\\0\\l\\0\\tt\\0\\tl\\0'
  ],
  worldKillUser2: [
    '20:54',
    'Kill:',
    '1022',
    '2',
    '22:',
    '<world>',
    'killed',
    'Isgalamido',
    'by',
    'MOD_TRIGGER_HURT'
  ],
  user2KillUser3: [
    '22:06',
    'Kill:',
    '2',
    '3',
    '7:',
    'Isgalamido',
    'killed',
    'Mocinha',
    'by',
    'MOD_ROCKET_SPLASH'
  ],
  user2KillUser2: [
    '22:40',
    'Kill:',
    '2',
    '2',
    '7:',
    'Isgalamido',
    'killed',
    'Isgalamido',
    'by',
    'MOD_ROCKET_SPLASH'
  ]
}

module.exports = logLines