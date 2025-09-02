// name: Безымянный function
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg2 = {};

if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gas',gas);
msg2.topic = 'gas';
msg2.payload = gas;
return msg2;
}
else if (msg.topic === 'xa/ESP_S/dsd/du1'){
var dsd = msg.payload;
global.set('flower',dsd);
msg2.topic = "day";
msg2.payload = dsd;
return msg2;
}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('temp_o',tempo);
msg2.payload = tempo;
msg2.topic = "Tout";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pir_k',pirk);
msg2.payload = pirk;
msg2.topic = "PIRk";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('temp_k',tempk);
msg2.payload = tempk;
msg2.topic = "TKyx";
return msg2;
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('hum_k',humi);
msg2.topic = "HumiK";
msg2.payload = humi;
return msg2;
}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('svet_k',luxk);
msg2.payload = luxk;
msg2.topic = "luxK";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxc = msg.payload;
global.set('svet_c',luxc);
msg2.payload = luxc;
msg2.topic = "luxCab";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxh = msg.payload;
global.set('svet_h',luxh);
msg2.payload = luxh;
msg2.topic = "luxZal";
return msg2;
}
else if (msg.topic === 'xa/ESP_L/temp'){
var tempin = msg.payload;
global.set('temp_h',tempin);
msg2.payload = tempin;
msg2.topic = "TempIn";
return msg2;
}
else if (msg.topic === 'xa/ESP_E/PirK2/state'){
var pire = msg.payload;
global.set('pir_p',pire);
msg2.topic = "PIRk2";
msg2.payload = pire;
return msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/tema'){
var temav = msg.payload;
global.set('tema',temav);
msg2.payload = temav;
msg2.topic = "tema";
return msg2;
}
else if (msg.topic === 'xa/ESP_V/D1/vent'){
var ventv = msg.payload;
global.set('vent',ventv);
msg2.payload = ventv;
msg2.topic = "tema";
return msg2;
}
else if (msg.topic === 'xa/ESP/alarm'){
var alarm = msg.payload;
global.set('Alarm',alarm);
msg2.payload = alarm;
msg2.topic = "ala";
return msg2;
}

//return [msg2,msg2,msg2,msg2,msg2,msg2,msg2,msg2];
