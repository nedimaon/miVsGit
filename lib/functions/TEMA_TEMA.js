var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "Тема LED 🔆",
                    "callback_data": "event,SingleValue=73"            
                }, 
                 {
                    "text": "Тема RGB 🌈",
                    "callback_data": "event,SingleValue=72"           
                }],
               [ {
                    "text": "Тема БРА 🚥",
                    "callback_data": "event,SingleValue=74"            
                },
                {
                    "text": "Тема ГОСТИ 🍺",
                    "callback_data": "event,SingleValue=76"            
                }], 
                [ {
                    "text": "OFF ❌",
                    "callback_data": "event,SingleValue=71"            
                },
                {
                    "text": "OFF all ❌❌",
                    "callback_data": "event,SingleValue=75"            
                }],
               
            ],
  })
};
var pl = {
  content:`${msg.originalMessage.from.first_name},управление темами освещения. Отправьте сообщение с числом от 10 до 100 для управления яркостью верхнего света.`,
  type : 'message',
  chatId: msg.originalMessage.from.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}
msg.payload = pl;
return msg;