
var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "ТЕМПЕРАТУРА",
                    "callback_data": "1"            
                }, 
                 {
                    "text": "ЯРКОСТЬ",
                    "callback_data": "2"            
                }, 
                 {
                    "text": "ДАТЧИКИ",
                    "callback_data": "3"            
                }, 
                 {
                    "text": "СОСТОЯНИЕ",
                    "callback_data": "4"            
                }]
            ]
  })
};

msg.payload.content = "СЕНСОРЫ";
msg.payload.options = opts;
msg.payload.chatId = 527764256;
msg.payload.messageId = 29;
msg.payload.sentMessageId = 29;
msg.payload.type = "message";

return [ msg ];
