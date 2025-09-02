// name: create response
// outputs: 2
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
if(msg.payload.content === 'Yes')
{
    msg.payload.content = 'Yes';
    return [msg, null];   
}
else
{
    msg.payload.content = 'No';
    return [null, msg];   
}
