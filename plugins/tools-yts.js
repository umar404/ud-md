import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Find what?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š« *${v.title}* (${v.url})
š« Duration: ${v.durationH}
š« Uploaded ${v.publishedTime}
š« ${v.view} views
      `.trim()
      case 'channel': return `
š« *${v.channelName}* (${v.url})
š« _${v.subscriberH} (${v.subscriber}) Subscriber_
š« ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join(`\nāāāāāāāāāāāāāāāāāāāāāā\n`)
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
