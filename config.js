//=============『 owner 』================== //
global.owner = ['5492266466080' , '573170961470'] 
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = 'creador'
global.numberowner = '5492266466080' , '51935116539'
global.instagram = ''
global.github = ''
global.dana = '087892711054'
global.pulsa = '085212023766'
global.gopay = '087892711054'

//=============『 Info Bot 』=================//
global.namebot = 'superbot-MD'
global.gc = 'bit.ly/AnyaBot-Group'
global.web = 'https://github.com/Hyzerr' //conviértalo en su sitio web, puede vincular ig, vincular github, vincular yt, si el enlace es gc, la visualización volverá a ser diferente.
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======『 Pantalla y más 』============//
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //cambia a tu foto de bot
global.fotonya2 = 'https://telegra.ph/file/8c471d45b6cedad43cf84.jpg' //cambiar esto también
global.lolkey = 'Papah-Chan' //asi que es facil remplazarlo, por ejemplo el apikey esta caducado :v
global.zenzkey = 'BagasPrdn' //cambiar a su apikey si caduca
global.wm = 'The WhatBot-MD'
global.watermark = wm
global.wm2 = '                     「 The WhatBot-MD⁩ 」'
global.wm3 = 'superbot-𝙼𝙳'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/fed1c9d94b37511e570d5.mp4'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*espere unos minutos...*_'
global.eror = '_*Error*_'
global.benar = 'verdad ✅\n'
global.salah = 'falso ❌\n'
global.stiker_wait = 'Stiker'
global.packname = 'toma tu sticker'
global.author = '© The WhatBot-MD'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 JUEGOS | GAMES 』================== //
global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 No cambies 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
