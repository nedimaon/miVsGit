// name: pp
// outputs: 6
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg1 = { payload:"gpio,5,1" };
var msg2 = { payload:"pwm,13,0" };
var msg3 = { payload:"gpio,16,1" };
var msg4 = { payload:"gpio,12,1" };
var msg5 = { payload:"gpio,2,1" };
var msg6 = { payload:"gpio,0,1" };
var msg7 = { payload:"gpio,4,1" };
var msg8 = { payload:"gpio,13,1" };
return [msg1, msg2];
//return [[msg1, msg2], [msg1, msg3], msg4, [msg1, msg5, msg7], [msg7, msg6], msg8];