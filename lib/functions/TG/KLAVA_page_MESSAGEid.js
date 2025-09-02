// КЛАВА страница +1
var messageId = context.global.keyboard.messageId;
var reply_markup = JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "Are you really sure?",
                    "callback_data": "FOO YES REALLY"            
                }, 
                {
                    "text": "No",
                    "callback_data": "FOO NO"            
                }]
            ]
  });


var options = {
    chat_id : msg.payload.chatId,
    reply_markup : reply_markup,
    message_id : messageId
};

msg.payload.type = 'editMessageReplyMarkup';
msg.payload.content = reply_markup;
msg.payload.options = options;

return [ msg ];

// We store the messageId to be able to edit this reply in the callback query. 
context.global.keyboard.messageId = msg.payload.sentMessageId;
return [ msg ];