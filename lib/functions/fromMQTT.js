// name: fromMQTT
// outputs: 14
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg2 = {};
var msg3 = {};
var msg4 = {};
var msg5 = {};
var msg6 = {};
var msg7 = {};
var msg8 = {};
var msg9 = {};
var msg10 = {};
var msg11 = {};
var msg12 = {};
var msg13 = {};
var msg14 = {};
var msg15 = {};

if (msg.topic === 'xa/ESP_S/gas/gas'){
var gas = msg.payload;
global.set('gas',gas);
msg2.topic = 'gas';
msg2.payload = gas;
return [null,null,null,null,null,null,null,null,null,null,null,null,null,msg2];
}
else if (msg.topic === 'xa/ESP_S/dsd/du1'){
var dsd = msg.payload;
global.set('flower',dsd);
msg3.topic = "day";
msg3.payload = dsd;
return [null,msg3,null,null,null,null,null,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_W/TempOut/temp'){
var tempo = msg.payload;
global.set('temp_o',tempo);
msg4.payload = tempo;
msg4.topic = "Tout";
return [null,null,msg4,null,null,null,null,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_K/PIRkyx/state'){
var pirk = msg.payload;
global.set('pir_k',pirk);
msg5.payload = pirk;
msg5.topic = "PIRk";
return [null,null,null,msg5,null,null,null,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Temp'){
var tempk = msg.payload;
global.set('temp_k',tempk);
msg6.payload = tempk;
msg6.topic = "TKyx";
return [null,null,null,null,msg6,null,null,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_K/Tkyx/Humi'){
var humi = msg.payload;
global.set('hum_k',humi);
msg7.topic = "HumiK";
msg7.payload = humi;
return [null,null,null,null,null,msg7,null,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_K/swk/lux'){
var luxk = msg.payload;
global.set('svet_k',luxk);
msg8.payload = luxk;
msg8.topic = "luxK";
return [null,null,null,null,null,null,msg8,null,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_L/lux'){
var luxc = msg.payload;
global.set('svet_c',luxc);
msg9.payload = luxc;
msg9.topic = "luxCab";
return [null,null,null,null,null,null,null,msg9,null,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_L/ss/lux'){
var luxh = msg.payload;
global.set('svet_h',luxh);
msg10.payload = luxh;
msg10.topic = "luxZal";
return [null,null,null,null,null,null,null,null,msg10,null,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_L/temp'){
var tempin = msg.payload;
global.set('temp_h',tempin);
msg11.payload = tempin;
msg11.topic = "TempIn";
return [null,null,null,null,null,null,null,null,null,msg11,null,null,null,null];
}
else if (msg.topic === 'xa/ESP_E/PirK2/state'){
var pire = msg.payload;
global.set('pir_p',pire);
msg12.topic = "PIRk2";
msg12.payload = pire;
return [null,null,null,null,null,null,null,null,null,null,msg12,null,null,null];
}
else if (msg.topic === 'xa/ESP_V/D1/tema'){
var temav = msg.payload;
global.set('tema',temav);
msg13.payload = temav;
msg13.topic = "tema";
return [null,null,null,null,null,null,null,null,null,null,null,msg13,null,null];
}
else if (msg.topic === 'xa/ESP_V/D1/vent'){
var ventv = msg.payload;
global.set('vent',ventv);
msg14.payload = ventv;
msg14.topic = "tema";
return [null,null,null,null,null,null,null,null,null,null,null,null,msg14,null];
}
else if (msg.topic === 'xa/ESP/alarm'){
var alarm = msg.payload;
global.set('Alarm',alarm);
msg15.payload = alarm;
msg15.topic = "ala";
return [msg15,null,null,null,null,null,null,null,null,null,null,null,null,null];
}

//return [msg2,msg2,msg2,msg2,msg2,msg2,msg2,msg2];
