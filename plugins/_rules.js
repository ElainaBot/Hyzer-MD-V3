const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─────{ *📌RULES* }─────
│  *📌DILARANG*
│➸ *DILARANG SHARE LINK PHISING/DLL
│➸ *DILARANG KIRIM PESAN/STICKER/FOTO/VIDEO FORNOGRAFI*
│➸ *DILARANG SPAM PESAN/STICKER/FOTO/VIDEO*
│➸ *DILARANG BERBICARA KASAR*
┬
╰──────────···
╭─────{ *📌HUKUMAN* }─────
│➸ 2X = KICK
╰──────────···
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🤖 PILIH MENU BIBAWAH',
           hydratedButtons: [{
             urlButton: {
               displayText: '🤖GroupZiiStore🤖',
               url: 'https://chat.whatsapp.com/BRUbgc97gWw4zGDH5eeteo'
             }

           },
                {
               urlButton: {
               displayText: 'YOUTUBE ME',
               url: 'https://youtu.be/tH-0Uq_s_H4'
             }

           },
               {
             quickReplyButton: {
               displayText: 'JANGAN DIPENCET',
               id: '',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'RUNTIME',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler
