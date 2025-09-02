// name: function 1
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 

var date = new Date(msg.payload);


msg.payload = {


"hour":date.getHours(),


"minutes":date.getMinutes(),


"seconds":date.getSeconds(),


"day":date.getDate(),


"month":date.getMonth(),


"year":date.getYear(),


}

return msg;