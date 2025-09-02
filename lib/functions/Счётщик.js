// name: Безымянный function
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
context.get('count', function(err, count) {
    if (err) {
        node.error(err, msg);
    } else {
        // Если счетчика еще нет, инициализируем его со значением «0»:
        count = count || 0;
        count += 1;
        // Сохраняем измененное значение обратно:
        context.set('count',count, function(err) {
            if (err) {
                node.error(err, msg);
            } else {
                // Делаем сообщение частью выходящего объекта «msg»:
                msg.count = count;
                // Отправляем сообщение:
                node.send(msg);
            }
        });
    }
});
