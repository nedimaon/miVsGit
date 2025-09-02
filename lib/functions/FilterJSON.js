// name: FilterJSON
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var nachricht="Die Temperatur ist "  + msg.payload["CPU Temperature"] + " Grad Celsius";
var tstamp=(new Date()).toISOString().replace(/t/gi,' ').trim();
msg.payload = nachricht + " am " + tstamp;
msg.topic=nachricht;
return msg;