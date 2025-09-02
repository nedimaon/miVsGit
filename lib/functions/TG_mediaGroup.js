// name: TG_mediaGroup
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
msg.payload.chatId = msg.payload.id;
msg.payload.type = "mediaGroup";
msg.payload.content = [
    {
        type : "photo",
        media : msg.payload.f1,
        caption : "Photo 1"
    },
    {
        type : "photo",
        media : msg.payload.f2,
        caption : "Photo 2"
    }
];

return msg;