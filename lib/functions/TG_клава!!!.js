// name: InLineCAMERA
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "OUT 📷",
                    "callback_data": "1"            
                }, 
                 {
                    "text": "OUT ⏺",
                    "callback_data": "2"           
                },
                {
                    "text": "OUT ON",
                    "callback_data": "3"            
                },
                {
                    "text": "OUT OFF",
                    "callback_data": "4"            
                }], 
               [  {
                    "text": "IN 📷",
                    "callback_data": "5"            
                }, 
                 {
                    "text": "IN ⏺",
                    "callback_data": "6"            
                },
                {
                    "text": "IN ON",
                    "callback_data": "7"            
                },
                {
                    "text": "IN OFF",
                    "callback_data": "8"            
                }],
                
            ],
  })
};
//var dd = msg.originalMessage.from.id
msg.payload.content = "📷            📷";
msg.payload.options = opts;
msg.payload.chatId = msg.originalMessage.from.id;
msg.payload.messageId = 29;
msg.payload.sentMessageId = 29;
msg.payload.type = "message";
return [ msg ];
