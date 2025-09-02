// name: send picture
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var pl = {
  content: msg.payload,
  type : 'video',
  chatId: 527764256,
  chat: 'nedimaon',
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