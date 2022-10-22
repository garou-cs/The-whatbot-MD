import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
let info = await fetch('https://raw.githubusercontent.com/Skidy89/pack-travas-2/main/laura.txt').then(v => v.text());
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥* 🔥', 'status@broadcast')}
handler.command = ['crash10'] 
handler.rowner = false
handler.fail = null
export default handler 
