
var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "OUT 📷",
                    "callback_data": "camOutSnap"            
                }, 
                 {
                    "text": "OUT ⏺",
                    "callback_data": "camOutStart15"           
                }], 
               [  {
                    "text": "IN 📷",
                    "callback_data": "camInSnap"            
                }, 
                 {
                    "text": "IN ⏺",
                    "callback_data": "camInStart15"            
                }],
                
            ],
  })
};
var dd = msg.originalMessage.data
if (dd === '1'){
    dd = "CamOUT"
    
;}
else if (dd === '5'){
    dd = "CamIN"
;}


var pl = {
  content: msg.payload,
  type : 'photo',
  chatId: msg.originalMessage.from.id,
  caption: dd,
  options: opts
}
msg.payload = pl;
return [msg];