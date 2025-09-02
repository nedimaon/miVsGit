// name: +++!
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var v1value = flow.get("v1value");
var v2value = flow.get("v2value");
var total;


if (msg.topic == "A") {
    v1value = msg.payload;
    flow.set("v1value",msg.payload);
    
}else if (msg.topic == "B"){
    v2value = msg.payload;   
     v1value = msg.payload; 
    flow.set("v2value",msg.payload);
}
if (v1value !== undefined && v2value !== undefined) {
   total = parseInt(v1value) + parseInt(v2value);
   msg.payload = parseInt(total);
   flow.set("v2value",msg.payload);
   msg.topic = "BB";
   //flow.set(["v1value", "v2value"],[undefined,undefined]);
   return msg;
}