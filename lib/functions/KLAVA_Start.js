var opts = {
  reply_markup: JSON.stringify({
    keyboard: [
     ['LED 🌟','RGB 🌈','BRA 💡'],
      ['CBET ❗ OFF','ALL ‼ OFF']],
      'resize_keyboard' : true, 
      'one_time_keyboard' : true
  })
};

// Dialogaufbau
msg.payload.content = "Для управления воспользуйтесь МЕНЮ и клавиатурой ниже";
msg.payload.options = opts;
msg.payload.chatId = msg.originalMessage.from.id;
msg.payload.messageId = 99;
msg.payload.sentMessageId = 99;
msg.payload.type = "message";
return [ msg ];
