// name: IP
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var values = msg.payload;
if (typeof context.index === 'undefined') {
context.index = 0;
}
msg.payload = values[context.index];
msg.topic = values[context.index];
context.index = (context.index + 1) % values.length; 
return msg;