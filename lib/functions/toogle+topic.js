// name: toogle
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var output = !(context.get("toogle")||false);
context.set("toogle",output);
msg.payload = output ? "gpio,2,1" : "gpio,2,0";
msg.topic = "192.168.1.67";
return msg;