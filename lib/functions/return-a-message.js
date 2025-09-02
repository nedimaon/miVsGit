// name: return a message
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
// returning message send it to output port
msg.payload = "Hello, "+msg.payload +"!";
return msg;