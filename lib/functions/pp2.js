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
var msg9 = { payload:"gpio,16,0" };
var msg10 = { payload:"gpio,12,0" };
var msg11 = { payload:"gpio,2,0" };
var msg12 = { payload:"gpio,0,0" };
var msg13 = { payload:"gpio,4,0" };
var msg14 = { payload:"gpio,13,0" };
var msg15 = { payload:"gpio,5,0" };
var msg16 = { payload:"pwm,13,100" };
var msg17 = { payload:"pwm,13,500" };
var msg18 = { payload:"pwm,13,900" };
var msg19 = { payload:"pwm,13,1020" };
var msg20 = { payload:"GPIOtoggle,2" };
var msg21 = { payload:"GPIOtoggle,13" };
if (msg.payload === "key1") {
return [[msg1, msg2], [msg5, msg6], msg4, [msg1, msg5, msg7], [msg7, msg6], msg8];
} else if (msg.payload === "key3")  {
   return [[ msg2, msg15 ], msg12, null, msg13, null, msg14];
}
 else if (msg.payload === "key4")  {
  return [[ msg17, msg1 ], null, msg10, null, null, null];
}
 else if (msg.payload === "key5")  {
  return [null,null,null,msg20,null,null];
}
 else if (msg.payload === "key2")  {
  return [null,null,null,null,null,msg21];
}

