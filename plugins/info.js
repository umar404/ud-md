import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*γ Ud-Md Bot Cooded By Umar Rehman β¨γ*

*Thanks For Using Ud-md Bot*


*Source Link!*

*github.com/umar404/ud-md*


*Vru Don't Forget Star*


*SUBSCRIBE YOUTUBE CHANNELβ¨πΏπ»*


*https://www.youtube.com/c/UMARMODS*



*Save Owner Number For Status Views And Say Done π€€π€€π€€β¨π»πΏ*

*wa.me/923165123719*


*UMAR REHAN*


*16000000000*


*RAWALPINDI, PAKISTAN π΅π°*


*MOST FAMOUS PERSON ON WHATSAPP WORLD π»π€€π€€π€€π€€β¨π©*


*JOIN BOT GROUP π€ π« π*


*https://chat.whatsapp.com/BBQgiM0adHc1m3wM6fEw5Y*

*UD-MD WHATSAPP BOT CODED BY UMAR DEVIL π«*



*ALL CREADITS TO UMAR REHAN π« β¨ π¬*


`.trim()
  m.reply(caption)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i


export default handler 
