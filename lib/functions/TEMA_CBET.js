var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "Бра 🚥",
                    "callback_data": "svet_bra"            
                }, 
                 {
                    "text": "Кухня 🧂",
                    "callback_data": "svet_cook"           
                }],
               [ {
                    "text": "Стол ⛲",
                    "callback_data": "svet_stol"            
                },
                {
                    "text": "Стул 🪑",
                    "callback_data": "svet_stul"            
                }], 
               [  {
                    "text": "Туалет 🚽 ",
                    "callback_data": "svet_wc"            
                }, 
                 {
                    "text": "Ванная 🛁",
                    "callback_data": "svet_bath"            
                }],
               [ {
                    "text": "Радуга ",
                    "callback_data": "svet_rainbow"            
                },
                {
                    "text": "Солнце ☀️",
                    "callback_data": "svet_sun"            
                }],
                
            ],
  })
};
var pl = {
  content: `${msg.originalMessage.from.first_name}. Здесь можно управлять освещением. Отправьте сообщение с числом от 0 до 100 для управления яркостью верхнего света.`,
  type : 'message',
  chatId: msg.originalMessage.from.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}
msg.payload = pl;
return msg;