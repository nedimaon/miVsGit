// name: F1
// outputs: 1
// timeout:
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info:
var tk = global.get('topp.COOK/t');
var to = global.get('topp.OKHO/t');
var tc = global.get('topp.ALL/t');
var arr =[["Paul","Doe","tk"],["Greg","Jones",to],["Able","Smith",tc]];
msg.payload = arr;
return msg;
