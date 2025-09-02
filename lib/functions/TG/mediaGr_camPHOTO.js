
msg.payload.chatId = 527764256;
msg.payload.type = "mediaGroup";
var f1 ="D:/FTP/CAM/cam_out.jpg";
var f2 ="D:/FTP/CAM/cam_in.jpg";
msg.payload.options = opts;
msg.payload.content = [
    {
        type : "photo",
        media : f1,
        caption : "Photo 1"
    },
    {
        type : "photo",
        media : f2,
        caption : "Photo 2"
    }
];

return msg;