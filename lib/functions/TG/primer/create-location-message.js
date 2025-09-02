// name: create location message
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
if(msg.payload.type == 'location')
{
    var lat = msg.payload.content.latitude;
    var lng = msg.payload.content.longitude;
    
    msg.payload.type = 'message';
    msg.payload.content = 'lat=' + lat + ' lon=' + lng;
    return msg;
}
else
{
    return null;
}
