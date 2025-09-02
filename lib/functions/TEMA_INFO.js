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
var pl = {
  content:`Hey ${msg.originalMessage.from.first_name}, here is ${msg.originalMessage.text} you requested`,
  type : 'message',
  chatId: msg.originalMessage.from.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}
msg.payload = pl;
return msg;