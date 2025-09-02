// name: DELprefix
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var t=msg.topic;
   t = t.replace('/some_prefix/', '');
   t = t.replace('some_prefix/', '');
   while(t.search("/")!=-1){
     t = t.replace('/', '-');
   }
   msg.topic=t;
   msg.measurement=t;
   return msg;