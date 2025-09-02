var opts = {
  reply_markup: JSON.stringify({
    keyboard: [
     ['TEMA ✨','TECH 🛠'],
     ['CBET 🔆','INFO ❓']],  
      'resize_keyboard' : true, 
      'one_time_keyboard' : true
  })
};

msg.payload.content ="Выбрать нужную функцию можно в МЕНЮ, а управлять клавиатурой ниже";
msg.payload.options = opts;
msg.payload.chatId = msg.originalMessage.from.id;
msg.payload.messageId = 99;
msg.payload.sentMessageId = 99;
msg.payload.type = "message";
return [ msg ];
