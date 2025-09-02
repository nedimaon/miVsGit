// name: Безымянный function
// outputs: 8
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg2 = {};
var msg3 = {};
var msg5 = {};
var msg6 = {};
var msg7 = {};
var msg8 = {};
var msg9 = {};
var msg12 = {};

if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gass',gas);
msg2.ip = "192.168.1.69";
msg2.topic = "Воздух";
msg2.payload = gas;
//return msg2;
}
else if (msg.topic === 'xa/ESP_S/rel3/state'){
var bras = msg.payload;
global.set('bras',bras);
msg2.ip = "192.168.1.69";
msg2.topic = "БраСтол";
msg2.payload = bras;
//return msg2;
}
else if (msg.topic === 'xa/ESP_S/rel4/state'){
var brak = msg.payload;
global.set('brak',brak);
msg2.ip = "192.168.1.69";
msg2.topic = "БраКухня";
msg2.payload = brak;
//return msg2;
}
else if (msg.topic === 'xa/ESP_S/test'){
var tests = msg.payload;
global.set('testS',tests);
msg12.ip = "192.168.1.69";
msg12.topic = "ESP_S";
msg12.payload = tests;
//return msg2;
}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('tempo',tempo);
msg3.ip = "192.168.1.68";
msg3.topic = "ТемпУлица";
msg3.payload = tempo;
//return msg3;
}
else if (msg.topic === 'xa/ESP_W/rele2/state'){
var sun = msg.payload;
global.set('solnce',sun);
msg3.ip = "192.168.1.68";
msg3.topic = "Солнце";
msg3.payload = sun;
//return msg3;
}
else if (msg.topic === 'xa/ESP_W/test'){
var testw = msg.payload;
global.set('testW',testw);
msg12.ip = "192.168.1.68";
msg12.topic = "ESP_W";
msg12.payload = testw;
//return msg3;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('tempk',tempk);
msg5.ip = "192.168.1.61";
msg5.topic = "ТемпКухня";
msg5.payload = tempk;
//return msg5;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('humi',humi);
msg5.ip = "192.168.1.61";
msg5.topic = "ВлагаКухня";
//return msg5;
}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('luxk',luxk);
msg5.ip = "192.168.1.61";
msg5.topic = "СветКухня";
msg5.payload = luxk;
//return msg5;
}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pirK',pirk);
msg5.ip = "192.168.1.61";
msg5.topic = "PIRКухня";
msg5.payload = pirk;
//eturn msg5;
}
else if (msg.topic === 'xa/ESP_K/rele1/state'){
var rgb = msg.payload;
global.set('raduga',rgb);
msg5.ip = "192.168.1.61";
msg5.topic = "Радуга";
msg5.payload = rgb;
//return msg5;
}
else if (msg.topic === 'xa/ESP_K/rele2/state'){
var svetk = msg.payload;
global.set('svetK',svetk);
msg5.ip = "192.168.1.61";
msg5.topic = "Кухня";
msg5.payload = svetk;
//return msg5;
}
else if (msg.topic === 'xa/ESP_K/test'){
var testk = msg.payload;
global.set('testK',testk);
msg12.ip = "192.168.1.61";
msg12.topic = "ESP_K";
msg12.payload = testk;
//return msg5;
}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxc = msg.payload;
global.set('luxc',luxc);
msg6.ip = "192.168.1.67";
msg6.topic = "СветКабинет";
msg6.payload = luxc;
//return msg6;
}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxh = msg.payload;
global.set('luxh',luxh);
msg6.ip = "192.168.1.67";
msg6.topic = "СветКомната";
msg6.payload = luxh;
//return msg6;
}
else if (msg.topic === 'xa/ESP_L/test'){
var testl = msg.payload;
global.set('testL',testl);
msg12.ip = "192.168.1.67";
msg12.topic = "ESP_L";
msg12.payload = testl;
//return msg6;
}
else if (msg.topic === 'xa/ESP_E/test'){
var teste = msg.payload;
global.set('testE',teste);
msg12.ip = "192.168.1.65";
msg12.topic = "ESP_E";
msg12.payload = teste;
//return msg7;
}
else if (msg.topic === 'xa/ESP_E/PirK2/state'){
var pire = msg.payload;
global.set('pirE',pire);
msg7.ip = "192.168.1.65";
msg7.topic = "Прихожая";
msg7.payload = pire;
//return msg7;
}
else if (msg.topic === 'xa/ESP_C/test'){
var testc = msg.payload;
global.set('testC',testc);
msg12.ip = "192.168.1.63";
msg12.topic = "ESP_C";
msg12.payload = testc;
//return msg8;
}
else if (msg.topic === 'xa/ESP_C/reltu/state'){
var reltu = msg.payload;
global.set('tualett',reltu);
msg8.ip = "192.168.1.63";
msg8.topic = "Туалет";
msg8.payload = reltu;
//return msg8;
}
else if (msg.topic === 'xa/ESP_C/relwa/state'){
var relwa = msg.payload;
global.set('wanna',relwa);
msg8.ip = "192.168.1.63";
msg8.topic = "Ванная";
msg8.payload = relwa;
//return msg8;
}
else if (msg.topic === 'xa/ESP_V/test'){
var testv = msg.payload;
global.set('testV',testv);
msg12.ip = "192.168.1.66";
msg12.topic = "ESP_V";
msg12.payload = testv;
//return msg9;
}
else if (msg.topic === 'xa/ESP_V/D1/tema'){
var temav = msg.payload;
global.set('temaV',temav);
msg9.ip = "192.168.1.66";
msg9.topic = "Тема";
msg9.payload = temav;
//return msg9;
}
else if (msg.topic === 'xa/ESP_V/D1/vent'){
var ventv = msg.payload;
global.set('ventV',ventv);
msg9.ip = "192.168.1.66";
msg9.topic = "Вентилятор";
msg9.payload = ventv;
//return msg9;
}
else if (msg.topic === 'xa/ESP_V/sw4/state'){
var brav = msg.payload;
global.set('braV',brav);
msg9.ip = "192.168.1.66";
msg9.topic = "Бра";
msg9.payload = brav;
//return msg9;
}

return [msg2,msg3,msg5,msg6,msg7,msg8,msg9,msg12];
