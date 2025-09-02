// name: Безымянный function
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var per1=global.get('temp_o');
var per2=flow.get('temp2');
var raz;
var msg2 = {};



raz = per1 - per2;
flow.set('temp2',per1);
global.set('tempp',raz)
msg2.payload = raz;


return msg2;