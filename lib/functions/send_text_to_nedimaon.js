// name: send_text_to_nedimaon
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var pl = {
  content: msg.payload,
  type : 'message',
  chatId: -1001901360647,
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