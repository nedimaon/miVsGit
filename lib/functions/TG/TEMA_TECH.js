var time = global.get('XATAa.time');
var vent = global.get('TEMA.D11_vent');
var okno = global.get('XATAa.okno');
var ok;
if (vent == 0){
    vent = "OFF";
}else{
    vent = 'Скорость X' + vent;
}
if (okno == "Открыто"){
    ok = "Закрыть";
}else{
    ok = "Открыть";}
var opts = {
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
                    "text": 'ВЕНТИЛЯТОР -  ' + vent,
                    "callback_data": "event,SingleValue=65"            
                }],
               [  
                 {
                    "text": "❌ OFF",
                    "callback_data": "event,SingleValue=60"           
                },
                {
                    "text": "✖1️⃣",
                    "callback_data": "event,SingleValue=61"            
                },
                {
                    "text": "✖2️⃣",
                    "callback_data": "event,SingleValue=62"            
                },
                {
                    "text": "✖3️⃣",
                    "callback_data": "event,SingleValue=63"            
                }], 
               [{
                    "text": '🏢  ОКНО:' + okno,
                    "callback_data": "event,SingleValue"            
                }],
                [    {
                    "text": 'БУДИЛЬНИК:' + time,
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
  content:`${msg.originalMessage.from.first_name}, здесь происходит управление техникой. Отправьте сообщение в виде 10,30 для включения будильника или 0,0 для его отключения`,
  type : 'message',
  chatId: msg.originalMessage.from.id,
  chat: msg.originalMessage.chat,
  from: msg.originalMessage.from,
  message_id : msg.originalMessage.message_id,
  options: opts
}
msg.payload = pl;
return msg;