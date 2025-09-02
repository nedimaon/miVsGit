//Стартовая клавиатура 0
var mesId = { messageId : msg.payload.messageId, pending : true};
var pog = global.get('pogoda',"storeInFile");
var xata = global.get('XATAa',"storeInFile");
var ok;

if (xata.okno == "Открыто"){
    ok = "Закрыть окно";
}else{
    ok = "Открыть окно";
}
var keyb = 1;
flow.set('keyB',keyb,"memoryOnly");
var opts = {
    reply_to_message_id: msg.payload.messageId,
    reply_markup: JSON.stringify({
          "inline_keyboard": [[
                {   "text": "Бра 🚥",
                    "callback_data": "GPIOtoggle,13"                 
                }, 
                {   "text": "Радуга 🧂",
                    "callback_data": "GPIOtoggle,5"                
                 },
                {   "text": "Стол ⛲",
                    "callback_data": "GPIOtoggle,16"       
                }],
                [{  "text": "Стул 🪑",
                    "callback_data": "GPIOtoggle,2"          
                },
                {   "text": "Туалет 🚽 ",
                    "callback_data": "GPIOtoggle,4"            
                },                  {
                    "text": "Ванна 🛁",
                    "callback_data": "GPIOtoggle,0"            
                }],          
                [{
                    "text": "Кухня",
                    "callback_data": "svet_cook"           
                },                {
                    "text": "Свет ☀️",
                    "callback_data": "svet_led"            
                },                {
                    "text": "Холл",
                    "callback_data": "svet_holl"           
                }],                
                [{
                    "text": 'Вентилятор- ' + xata.vent,
                    "callback_data": "event,SingleValue=60"            
                },                {
                    "text": '➕1️⃣',
                    "callback_data": "event,SingleValue=65"            
                }],              
                [{
                    "text": "❌ OFF",
                    "callback_data": "event,SingleValue=60"           
                },                {
                    "text": "✖1️⃣",
                    "callback_data": "event,SingleValue=61"            
                },                {
                    "text": "✖2️⃣",
                    "callback_data": "event,SingleValue=62"            
                },                {
                    "text": "✖3️⃣",
                    "callback_data": "event,SingleValue=63"            
                }],
                [{  "text": '⏰Будильник на:' + xata.time,
                    "callback_data": "event,SingleValue"            
                },{
                    "text": ok,
                    "callback_data": "event,SingleValue"            
                }],                
                [{
                    "text": "LED 🔆",
                    "callback_data": "event,SingleValue=73"            
                },                  {
                    "text": "RGB 🌈",
                    "callback_data": "event,SingleValue=72"           
                },                {
                    "text": "БРА 🚥",
                    "callback_data": "event,SingleValue=74"            
                }],    
                [{  "text": "Тема: " + xata.tema + keyb,
                    "callback_data": "event,SingleValue=76"            
                },                 {
                    "text": "OFF ❌",
                    "callback_data": "event,SingleValue=71"            
                },
                {   "text": "OFFall ❌",
                    "callback_data": "event,SingleValue=75"            
                }]]
  })
};
var cont = "Сегодня - "  + pog.detail + "\n 🌡" + pog.tempc + "°C   💧 " + pog.humidity + "%  ☔ " + pog.pressure + " мм.рт.ст." + pog.veter  + pog.windspeed + " м/с" ;
msg.payload.content = cont;
msg.payload.options = opts;
return [ msg ];
