msg.payload.type = 'answerCallbackQuery';
msg.payload.options = {
    text : msg.payload.content,
    show_alert : true,  // you can set this to true to open a dialog with the answer in the client.
};

return msg;
