// name: send picture
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var pl = {
  content: msg.payload,
  message: `Hey ${msg.originalMessage.from.first_name}, here is ${msg.originalMessage.text} you requested`,
  type : 'video',
  chatId: msg.originalMessage.chat.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id
}

msg.payload = pl;


/* type can be one of the following
photo
audio
video
sticker
voice
document
*/

return msg;