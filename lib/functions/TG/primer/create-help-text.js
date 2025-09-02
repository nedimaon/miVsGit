// name: create help text
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 

var helpMessage = "/help - shows help\r\n";
helpMessage += "/foo - opens a dialog\r\n";
helpMessage += "Your chat id is " + msg.payload.chatId;

helpMessage += "\r\n";
helpMessage += "You are welcome: "+msg.originalMessage.from.username;
helpMessage += "\r\n";



msg.payload.content = helpMessage;
return msg;