import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*γ Owner Intro γ*

 *Name*

               *π·π₯ππ« π·π―π»πͺπΏ ππ΅π°π€*


*From*

           *Rawalpindi, Pakistan π΅π°*


*Age*

       *160000*


*Github Id Link!*

*https://github.com/umar404*


*Owner Number*


*wa.me/923165123719*


*Save Owner Number For Whatsapp Status Views And Say Doneπ«π€*


`.trim()
  m.reply(caption)
}
handler.help = ['ownerintro']
handler.tags = ['intro']
handler.command = /^(ownerintro)$/i


export default handler
