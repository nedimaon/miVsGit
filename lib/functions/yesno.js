// name: Безымянный function
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var peremennaya1=global.get('peremennaya1');
var peremennaya2=global.get('peremennaya2');
var msg2 = {};

if (msg.payload != 'home' && peremennaya1 == '0'){
global.set('peremennaya1','1');
global.set('peremennaya2','0');
msg2.payload = 'ishome';

}

else if (msg.payload == 'goaway' && peremennaya2 == '0'){
global.set('peremennaya1','0');
global.set('peremennaya2','1');
msg2.payload = 'away';
}

return msg2;