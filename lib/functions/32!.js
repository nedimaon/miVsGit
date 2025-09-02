// name: Безымянный function
// outputs: 4
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg2 = {};
var msg12 = {};
var msg22 = {};
var msg32 = {};

if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gass',gas);
msg2.name = "Воздух";
msg2.topic = "sens1";
msg2.payload = gas;
//return  msg2;
}
else if (msg.topic === 'xa/ESP_S/rel3/state'){
var bras = msg.payload;
global.set('bras',bras);
msg22.name = "БраСтол";
msg22.topic = "svet1";
msg22.payload = bras;
//return  msg2;
}
else if (msg.topic === 'xa/ESP_S/rel4/state'){
var brak = msg.payload;
global.set('brak',brak);
msg22.name = "БраКухня";
msg22.topic = "svet2";
msg22.payload = brak;
//return  msg2;
}
else if (msg.topic === 'xa/ESP_S/test'){
var tests = msg.payload;
global.set('testS',tests);
msg32.name = "ESP_S";
msg32.payload = tests;
msg32.topic = "test1";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('tempo',tempo);
msg2.name = "ТемпУлица";
msg2.payload = tempo;
msg2.topic = "sens2";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_W/rele2/state'){
var sun = msg.payload;
global.set('solnce',sun);
msg22.name = "Солнце";
msg22.payload = sun;
msg22.topic = "svet3";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_W/test'){
var testw = msg.payload;
global.set('testW',testw);
msg32.name = "espw";
msg32.payload = testw;
msg32.topic = "test2";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('tempk',tempk);
msg2.ip = "192.168.1.61";
msg2.name = "ТемпКухня";
msg2.payload = tempk;
msg2.topic = "sens3";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('humi',humi);
msg2.ip = "192.168.1.61";
msg2.name = "ВлагаКухня";
msg2.topic = "sens4";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('luxk',luxk);
msg22.ip = "192.168.1.61";
msg22.name = "СветКухня";
msg22.payload = luxk;
msg22.topic = "luxK";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pirK',pirk);
msg12.ip = "192.168.1.61";
msg12.name = "PIRКухня";
msg12.payload = pirk;
msg12.topic = "PIRk";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/rele1/state'){
var rgb = msg.payload;
global.set('raduga',rgb);
msg22.ip = "192.168.1.61";
msg22.name = "Радуга";
msg22.payload = rgb;
msg22.topic = "Радуга";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/rele2/state'){
var svetk = msg.payload;
global.set('svetK',svetk);
msg22.ip = "192.168.1.61";
msg22.name = "Кухня";
msg22.payload = svetk;
msg22.topic = "Кухня";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_K/test'){
var testk = msg.payload;
global.set('testK',testk);
msg32.name = "ESP_K";
msg32.payload = testk;
msg32.topic = "testK";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxc = msg.payload;
global.set('luxc',luxc);
msg2.name = "Яркость Кабинет";
msg2.payload = luxc;
msg2.topic = "luxC";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxh = msg.payload;
global.set('luxh',luxh);
msg2.name = "Яркость Комната";
msg2.payload = luxh;
msg2.topic = "sens6";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_L/test'){
var testl = msg.payload;
global.set('testL',testl);
msg32.name = "espl";
msg32.payload = testl;
msg32.topic = "test4";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_L/re4/state'){
var svdiv = msg.payload;
global.set('svDivan',svdiv);
msg32.name = "Диван";
msg32.payload = svdiv;
msg32.topic = "svet10";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_E/test'){
var teste = msg.payload;
global.set('testE',teste);
msg32.name = "ESP_E";
msg32.payload = teste;
msg32.topic = "test5";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_E/PirK2/state'){
var pire = msg.payload;
global.set('pirE',pire);
msg12.name = "Прихожая";
msg12.topic = "mot2";
msg12.payload = pire;
//return  msg2;
}
else if (msg.topic === 'xa/ESP_C/test'){
var testc = msg.payload;
global.set('testC',testc);
msg32.name = "ESP_C";
msg32.payload = testc;
msg32.topic = "test6";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_C/reltu/state'){
var reltu = msg.payload;
global.set('tualett',reltu);
msg22.name = "Туалет";
msg22.payload = reltu;
msg22.topic = "WC";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_C/relwa/state'){
var relwa = msg.payload;
global.set('wanna',relwa);
msg22.name = "Ванная";
msg22.payload = relwa;
msg22.topic = "Bad";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_V/test'){
var testv = msg.payload;
global.set('testV',testv);
msg32.name = "ESP_V";
msg32.payload = testv;
msg32.topic = "testV";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/tema'){
var temav = msg.payload;
global.set('temaV',temav);
msg12.name = "Тема";
msg12.payload = temav;
msg12.topic = "mot3";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/vent'){
var ventv = msg.payload;
global.set('ventV',ventv);
msg12.name = "Вентилятор";
msg12.payload = ventv;
msg12.topic = "mot4";
//return  msg2;
}
else if (msg.topic === 'xa/ESP_V/sw4/state'){
var brav = msg.payload;
global.set('braV',brav);
msg22.name = "Бра";
msg22.payload = brav;
msg22.topic = "svet9";
//return  msg2;
}

return  [msg2,msg12,msg22,msg32];
