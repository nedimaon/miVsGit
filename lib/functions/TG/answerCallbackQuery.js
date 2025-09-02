
var text = "You clicked " + msg.payload.content;
var options = {
    // text : text, <-- you can set the text here or use msg.payload.content 
    show_alert : true,
    cache_time : 10
};

msg.payload.content = text;
msg.payload.options = options;
msg.payload.type = "answerCallbackQuery";

return [ msg ];
