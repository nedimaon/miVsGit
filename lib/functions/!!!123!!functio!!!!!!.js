// name: Безымянный function
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg2 = {};

if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gass',gas);
msg2.name = "Воздух";
msg2.topic = "sens";
msg2.payload = gas;
return msg2;
}
else if (msg.topic === 'xa/ESP_S/rel3/state'){
var bras = msg.payload;
global.set('bras',bras);
msg2.name = "БраСтол";
msg2.topic = "svet";
msg2.payload = bras;
return msg2;
}
else if (msg.topic === 'xa/ESP_S/rel4/state'){
var brak = msg.payload;
global.set('brak',brak);
msg2.name = "БраКухня";
msg2.topic = "svet";
msg2.payload = brak;
return msg2;
}
else if (msg.topic === 'xa/ESP_S/test'){
var tests = msg.payload;
global.set('testS',tests);
msg2.name = "ESP_S";
msg2.payload = tests;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('tempo',tempo);
msg2.name = "ТемпУлица";
msg2.payload = tempo;
msg2.topic = "sens";
return msg2;
}
else if (msg.topic === 'xa/ESP_W/rele2/state'){
var sun = msg.payload;
global.set('solnce',sun);
msg2.name = "Солнце";
msg2.payload = sun;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_W/test'){
var testw = msg.payload;
global.set('testW',testw);
msg2.name = "espw";
msg2.payload = testw;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('tempk',tempk);
msg2.name = "ТемпКухня";
msg2.payload = tempk;
msg2.topic = "sens";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('humi',humi);
msg2.name = "ВлагаКухня";
msg2.topic = "sens";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('luxk',luxk);
msg2.name = "СветКухня";
msg2.payload = luxk;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pirK',pirk);
msg2.name = "PIRКухня";
msg2.payload = pirk;
msg2.topic = "mot";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/rele1/state'){
var rgb = msg.payload;
global.set('raduga',rgb);
msg2.name = "Радуга";
msg2.payload = rgb;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/rele2/state'){
var svetk = msg.payload;
global.set('svetK',svetk);
msg2.name = "Кухня";
msg2.payload = svetk;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/test'){
var testk = msg.payload;
global.set('testK',testk);
msg2.name = "ESP_K";
msg2.payload = testk;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxc = msg.payload;
global.set('luxc',luxc);
msg2.name = "Яркость Кабинет";
msg2.payload = luxc;
msg2.topic = "sens";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxh = msg.payload;
global.set('luxh',luxh);
msg2.name = "Яркость Комната";
msg2.payload = luxh;
msg2.topic = "sens";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/test'){
var testl = msg.payload;
global.set('testL',testl);
msg2.ip = "192.168.1.67";
msg2.name = "espl";
msg2.payload = testl;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_E/test'){
var teste = msg.payload;
global.set('testE',teste);
msg2.ip = "192.168.1.65";
msg2.name = "ESP_E";
msg2.payload = teste;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_E/PirK2/state'){
var pire = msg.payload;
global.set('pirE',pire);
msg2.ip = "192.168.1.65";
msg2.name = "Прихожая";
msg2.topic = "mot";
msg2.payload = pire;
return msg2;
}
else if (msg.topic === 'xa/ESP_C/test'){
var testc = msg.payload;
global.set('testC',testc);
msg2.ip = "192.168.1.63";
msg2.name = "ESP_C";
msg2.payload = testc;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_C/reltu/state'){
var reltu = msg.payload;
global.set('tualett',reltu);
msg2.ip = "192.168.1.63";
msg2.name = "Туалет";
msg2.payload = reltu;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_C/relwa/state'){
var relwa = msg.payload;
global.set('wanna',relwa);
msg2.ip = "192.168.1.63";
msg2.name = "Ванная";
msg2.payload = relwa;
msg2.topic = "svet";
return msg2;
}
else if (msg.topic === 'xa/ESP_V/test'){
var testv = msg.payload;
global.set('testV',testv);
msg2.ip = "192.168.1.66";
msg2.name = "ESP_V";
msg2.payload = testv;
msg2.topic = "test";
return msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/tema'){
var temav = msg.payload;
global.set('temaV',temav);
msg2.ip = "192.168.1.66";
msg2.name = "Тема";
msg2.payload = temav;
msg2.topic = "mot";
return msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/vent'){
var ventv = msg.payload;
global.set('ventV',ventv);
msg2.ip = "192.168.1.66";
msg2.name = "Вентилятор";
msg2.payload = ventv;
msg2.topic = "mot";
return msg2;
}
else if (msg.topic === 'xa/ESP_V/sw4/state'){
var brav = msg.payload;
global.set('braV',brav);
msg2.ip = "192.168.1.66";
msg2.name = "Бра";
msg2.payload = brav;
msg2.topic = "svet";
return msg2;
}

//return [msg2,msg2,msg2,msg2,msg2,msg2,msg2,msg2];
