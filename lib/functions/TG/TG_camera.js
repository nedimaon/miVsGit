var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "Внешняя камера 📷",
                    "callback_data": "camOut"            
                }],
        [
                {
                    "text": "Снимок 📷",
                    "callback_data": "camOut_snap"            
                }, 
                 {
                    "text": "Запись ⏺",
                    "callback_data": "camOut_start"                 
                }, 
                 {
                    "text": "Стоп ⏹",
                    "callback_data": "camOut_stop"           
                }], 
               [  
                {
                    "text": "ON ▶",
                    "callback_data": "canOut_on"            
                },
                {
                    "text": "OFF ⏸",
                    "callback_data": "camOut_off"            
                }],[
                {
                    "text": "Внутренная камера 📷",
                    "callback_data": "camIn"            
                }],
                 [  {
                    "text": "Снимок 📷",
                    "callback_data": "camIn_snap"            
                }, 
                 {
                    "text": "Запись ⏺",
                    "callback_data": "camIn_start"            
                }, 
                 {
                    "text": "Стоп ⏹",
                    "callback_data": "camIn_stop"           
                }],
                 [  
                {
                    "text": "ON ▶",
                    "callback_data": "camIn_on"            
                },
                {
                    "text": "OFF ⏸",
                    "callback_data": "camIn_off"            
                }],
                
            ],
  })
};
var pl = {
  content:`Привет ${msg.originalMessage.from.first_name}, это управление камерами`,
  type : 'message',
  chatId: msg.originalMessage.from.id,
//  chat: msg.originalMessage.chat,
//  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}

msg.payload = pl;
return msg;