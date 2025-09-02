var time = global.get('XATAa.time');
var vent = global.get('TEMA.D11_vent');
var okno = global.get('XATAa.okno');
var ok;
var mesId = { messageId : msg.payload.messageId };
context.flow.MessID = mesId;
flow.set("mID",mesId,"memoryOnly");
/* if (vent == 0){
    vent = "OFF";
}else{
    vent = 'Скорость X' + vent;
}
if (okno == "Открыто"){
    ok = "Закрыть";
}else{
    ok = "Открыть";}
 */
var opts = {
    reply_to_message_id: msg.payload.messageId,
  reply_markup: JSON.stringify({
    "inline_keyboard": [[
                {
                    "text": "БРА 🚥",
                    "callback_data": "svet_bra"            
                }, 
                 {
                    "text": "КУХНЯ 🧂",
                    "callback_data": "svet_cook"           
                },
                {
                    "text": "СТОЛ ⛲",
                    "callback_data": "svet_stol"            
                }],
                [{
                    "text": "СТУЛ 🪑",
                    "callback_data": "svet_stul"            
                },
               {                    "text": "ТУАЛЕТ 🚽 ",
                    "callback_data": "svet_wc"            
                }, 
                 {
                    "text": "ВАННА 🛁",
                    "callback_data": "svet_bath"            
                }],
               [ {
                    "text": "РАДУГА 🌈",
                    "callback_data": "svet_rainbow"            
                },
                {
                    "text": "СОЛНЦЕ ☀️",
                    "callback_data": "svet_sun"            
                },
                {
                    "text": "Солнце ☀️",
                    "callback_data": "svet_sun"            
                }],        
                [
                {
                    "text": 'ВЕНТ-  ' + vent,
                    "callback_data": "event,SingleValue=60"            
                }, 
                {
                    "text": "➖",
                    "callback_data": "event,SingleValue=60"            
                },
                {
                    "text": "➕",
                    "callback_data": "event,SingleValue=65"            
                }], 
               [{
                    "text": '🏢ОКНО:' + okno,
                    "callback_data": "event,SingleValue"            
                },
                 {
                    "text": 'УТРО:' + time,
                    "callback_data": "event,SingleValues=00,01"            
                }, 
                                 {
                    "text": ok,
                    "callback_data": "event,SingleValue"            
                }],
                [
                {
                    "text": "LED 🔆",
                    "callback_data": "event,SingleValue=73"            
                }, 
                 {
                    "text": "RGB 🌈",
                    "callback_data": "event,SingleValue=72"           
                },
                {
                    "text": "БРА 🚥",
                    "callback_data": "event,SingleValue=74"            
                }],
                [{
                    "text": "ГОСТИ 🍺",
                    "callback_data": "event,SingleValue=76"            
                },
                 {
                    "text": "OFF ❌",
                    "callback_data": "event,SingleValue=71"            
                },
                {
                    "text": "OFFall ❌❌",
                    "callback_data": "event,SingleValue=75"            
                }],
                
            ],
  })
};
var pl = {
 content:`Привет ${msg.originalMessage.from.first_name}, это управление `,
  type : 'message',
  chatId: msg.originalMessage.from.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}
msg.payload = pl;
return msg;