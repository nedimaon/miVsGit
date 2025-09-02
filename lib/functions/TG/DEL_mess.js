// Hide the keyboard and forget the messageId
msg.payload.type = 'deleteMessage';
msg.payload.content = context.global.keyboard.messageId;
context.global.keyboard.messageId = null;

// You could also send a editMessageReplyMarkup with an empty reply_markup here
return msg;
