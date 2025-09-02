// name: Separate
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
let txt = msg.payload.codigo
txt = txt.slice(0, 3) + "-" + txt.slice(3);
msg.payload.codigo=txt
return msg;