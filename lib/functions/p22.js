// name: pp002
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg1 = { payload:"event,SingleValue=71", topic:"192.168.1.66" };
var msg2 = { payload:"event,SingleValue=72", topic:"192.168.1.66" };
var msg3 = { payload:"event,SingleValue=73", topic:"192.168.1.66" };
var msg4 = { payload:"event,SingleValue=74", topic:"192.168.1.66" };
var msg5 = { payload:"event,SingleValue=75", topic:"192.168.1.66" };
if (msg.payload.content == "/off") {
return [msg1];
} else if (msg.payload.content == "/temargb")  {
   return [msg2];
}
 else if (msg.payload.content == "/temaled")  {
  return [msg3];
}
else if (msg.payload.content == "/temabra") {
    return [msg4];
}
else if (msg.payload.content == "/offall") {
    return [msg5];
}