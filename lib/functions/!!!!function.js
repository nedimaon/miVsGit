// name: Безымянный function
// outputs: 2
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
//var peremennaya1=global.get('peremennaya1');
//var peremennaya2=global.get('peremennaya2');
var msg2 = {};
var msg3 = {};


//if (msg.topic === 'xa/ESP_S'){
if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gass',gas);
msg2.ip = "192.168.1.69";
msg2.topic = "Воздух";
msg2.payload = gas;

}
else if (msg.topic === 'xa/ESP_S/rel3/state'){
var bras = msg.payload;
global.set('bras',bras);
msg2.ip = "192.168.1.69";
msg2.topic = "БраСтол";
msg2.payload = bras;

}
else if (msg.topic === 'xa/ESP_S/rel4/state'){
var brak = msg.payload;
global.set('brak',brak);
msg2.ip = "192.168.1.69";
msg2.topic = "БраКухня";
msg2.payload = brak;

}
else if (msg.topic === 'xa/ESP_S/test'){
var tests = msg.payload;
global.set('testS',tests);
msg2.ip = "192.168.1.69";
msg2.topic = "ESP_S";
msg2.payload = tests;

}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('tempo',tempo);
msg2.ip = "192.168.1.68";
msg2.topic = "ТемпУлица";
msg2.payload = tempo;

}
else if (msg.topic === 'xa/ESP_W/test'){
var testw = msg.payload;
global.set('testW',testw);
msg2.ip = "192.168.1.68";
msg2.topic = "ESP_W";
msg2.payload = testw;

}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('tempk',tempk);
msg2.ip = "192.168.1.61";
msg2.topic = "ТемпКухня";
msg2.payload = tempk;

}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('humi',humi);
msg2.ip = "192.168.1.61";
msg2.topic = "ВлагаКухня";
msg2.payload = humi;

}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('luxkk',luxk);
msg2.ip = "192.168.1.61";
msg2.topic = "СветКухня";
msg2.payload = luxk;

}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pirk',pirk);
msg2.ip = "192.168.1.61";
msg2.topic = "PIRКухня";
msg2.payload = pir;

}
else if (msg.topic === 'xa/ESP_K/test'){
var testk = msg.payload;
msg2.ip = "192.168.1.61";
msg2.topic = "ESP_K";
msg2.payload = testk;

}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxc = msg.payload;
global.set('luxc',luxc);
msg2.ip = "192.168.1.67";
msg2.topic = "СветКабинет";
msg2.payload = luxc;

}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxh = msg.payload;
global.set('luxh',luxh);
msg2.ip = "192.168.1.67";
msg2.topic = "СветКомната";
msg2.payload = luxh;

}
else if (msg.topic === 'xa/ESP_L/test'){
var testl = msg.payload;
global.set('testL',testl);
msg2.ip = "192.168.1.67";
msg2.topic = "ESP_L";
msg2.payload = testl;

}
else if (msg.topic === 'xa/ESP_E/test'){
var teste = msg.payload;
global.set('testE',teste);
msg2.ip = "192.168.1.65";
msg2.topic = "ESP_E";
msg2.payload = teste;

}
else if (msg.topic === 'xa/ESP_C/test'){
var testc = msg.payload;
global.set('testC',testc);
msg2.ip = "192.168.1.63";
msg2.topic = "ESP_C";
msg2.payload = testc;

}
else if (msg.topic === 'xa/ESP_V/test'){
var testv = msg.payload;
global.set('testV',testv);
msg2.ip = "192.168.1.66";
msg2.topic = "ESP_V";
msg2.payload = testv;

}
else if (msg.payload === '0'){
    msg3.payload = '0';
}
return [msg2,msg3];
