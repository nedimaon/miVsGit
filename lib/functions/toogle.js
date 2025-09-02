// name: toogle
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var output = !(context.get("toogle")||false);
context.set("toogle",output);
msg.payload = output ? "udp1" : "udp2";
return msg;