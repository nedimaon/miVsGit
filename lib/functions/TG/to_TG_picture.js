
var opts = {
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "OUT 📷",
                    "callback_data": "1"            
                }, 
                 {
                    "text": "OUT ⏺",
                    "callback_data": "2"           
                },
                {
                    "text": "OUT ON",
                    "callback_data": "3"            
                },
                {
                    "text": "OUT OFF",
                    "callback_data": "4"            
                }], 
               [  {
                    "text": "IN 📷",
                    "callback_data": "5"            
                }, 
                 {
                    "text": "IN ⏺",
                    "callback_data": "6"            
                },
                {
                    "text": "IN ON",
                    "callback_data": "7"            
                },
                {
                    "text": "IN OFF",
                    "callback_data": "8"            
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
//var msg1 = {};
//var msg2 ={};

    if (msg.payload.data === 1){
    var aa = msg.filename;
}else if(msg.payload.data === 5){
    var bb = msg.filename;
}else{
   // msg3.payload = 0;
}
var pl = {
  content: msg.payload,
  type : 'photo',
  chatId: msg.originalMessage.from.id,
  caption: dd,
  options: opts,
  op1:aa,
  op2:bb
}
msg.payload = pl;
return [msg];