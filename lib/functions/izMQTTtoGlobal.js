var msg2 = {};

if (msg2.topic === 'CTOL/co'){
var gas = msg.payload;
global.set('dom.co',gas);
msg2.ip = "192.168.1.69";
msg2.topic = "Воздух";
msg2.payload = gas;
return msg2;
}
else if (msg2.topic === 'CTOL/poliv'){
var pol = msg.payload;
global.set('dom.poliv',pol);
msg2.ip = "192.168.1.69";
msg2.topic = "Полив";
msg2.payload = pol;
return msg2;
}
else if (msg2.topic === 'CTOL/gir'){
var girr = msg.payload;
global.set('dom.gir',girr);
msg2.ip = "192.168.1.69";
msg2.topic = "Гирлянда";
msg2.payload = girr;
return msg2;
}
else if (msg2.topic === 'CTOL/led'){
var bras = msg.payload;
global.set('dom.braled',bras);
msg2.ip = "192.168.1.69";
msg2.topic = "БраСтол";
msg2.payload = bras;
return msg2;
}
else if (msg2.topic === 'CTOL/rgb'){
var brak = msg.payload;
global.set('dom.brargb',brak);
msg2.ip = "192.168.1.69";
msg2.topic = "БраКухня";
msg2.payload = brak;
return msg2;
}
else if (msg2.topic === 'OKHO/t'){
var tempo = msg.payload;
global.set('dom.tempOut',tempo);
msg2.ip = "192.168.1.68";
msg2.topic = "tУлица";
msg2.payload = tempo;
return msg2;
}
else if (msg2.topic === 'OKHO/svet'){
var sun = msg.payload;
global.set('dom.solnce',sun);
msg2.ip = "192.168.1.68";
msg2.topic = "Солнце";
msg2.payload = sun;
return msg2;
}
else if (msg2.topic === 'OKHO/time'){
var timeo = msg.payload;
global.set('dom.time',timeo);
msg2.ip = "192.168.1.68";
msg2.topic = "Будильник";
msg2.payload = timeo;
return msg2;
}
else if (msg2.topic === 'OKHO/utro'){
var suun = msg.payload;
global.set('dom.utro',suun);
msg2.ip = "192.168.1.68";
msg2.topic = "Утро";
msg2.payload = suun;
return msg2;
}
else if (msg2.topic === 'OKHO/open'){
var saan = msg.payload;
global.set('dom.okno',saan);
msg2.ip = "192.168.1.68";
msg2.topic = "Окно";
msg2.payload = saan;
return msg2;
}
else if (msg2.topic === 'COOK/t'){
var msg2k = msg.payload;
global.set('dom.tempK',msg2k);
msg2.ip = "192.168.1.61";
msg2.topic = "tКухня";
msg2.payload = msg2k;
return msg2;
}
else if (msg2.topic === 'COOK/h'){
var humii = msg.payload;
global.set('dom.humi',humii);
msg2.ip = "192.168.1.61";
msg2.topic = "Влажность";
msg2.payload = humii;
return msg2;
}
else if (msg2.topic === 'COOK/lux'){
var luxk = msg.payload;
global.set('dom.luxC',luxk);
msg2.ip = "192.168.1.61";
msg2.topic = "СветКухня";
msg2.payload = luxk;
return msg2;
}
else if (msg2.topic === 'COOK/pir'){
var pirk = msg.payload;
global.set('dom.pirCook',pirk);
msg2.ip = "192.168.1.61";
msg2.topic = "PIRКухня";
msg2.payload = pirk;
return msg2;
}
else if (msg2.topic === 'COOK/rgb'){
var rgbb = msg.payload;
global.set('dom.raduga',rgbb);
msg2.ip = "192.168.1.61";
msg2.topic = "Радуга";
msg2.payload = rgbb;
return msg2;
}
else if (msg2.topic === 'COOK/led'){
var ledd = msg.payload;
global.set('dom.svet',ledd);
msg2.ip = "192.168.1.61";
msg2.topic = "LED";
msg2.payload = ledd;
return msg2;
}
else if (msg2.topic === 'COOK/cook'){
var svetk = msg.payload;
global.set('dom.svetCook',svetk);
msg2.ip = "192.168.1.61";
msg2.topic = "Кухня";
msg2.payload = svetk;
return msg2;
}
else if (msg2.topic === 'CAB/tin'){
var tempdom = msg.payload;
global.set('dom.tempIn',tempdom);
msg2.ip = "192.168.1.67";
msg2.topic = "tКомната";
msg2.payload = tempdom;
return msg2;
}
else if (msg2.topic === 'CAB/lux'){
var luxh = msg.payload;
global.set('dom.luxK',luxh);
msg2.ip = "192.168.1.67";
msg2.topic = "lКомната";
msg2.payload = luxh;
return msg2;
}
else if (msg2.topic === 'CAB/svet'){
var cabsv = msg.payload;
global.set('dom.cabinet',cabsv);
msg2.ip = "192.168.1.67";
msg2.topic = "Кабинет";
msg2.payload = cabsv;
return msg2;
}
else if (msg2.topic === 'CAB/divan'){
var cabdi = msg.payload;
global.set('dom.divan',cabdi);
msg2.ip = "192.168.1.67";
msg2.topic = "Диван";
msg2.payload = cabdi;
return msg2;
}
else if (msg2.topic === 'CAB/home'){
var luxho = msg.payload;
global.set('dom.home',luxho);
msg2.ip = "192.168.1.67";
msg2.topic = "Дом";
msg2.payload = luxho;
return msg2;
}
else if (msg2.topic === 'CAB/pir'){
var piro = msg.payload;
global.set('dom.pirCab',piro);
msg2.ip = "192.168.1.67";
msg2.topic = "PIR кабинет";
msg2.payload = piro;
return msg2;
}
else if (msg2.topic === 'BXOD/lux'){
var luxs = msg.payload;
global.set('dom.luxV',luxs);
msg2.ip = "192.168.1.63";
msg2.topic = "СветПрихожая";
msg2.payload = luxs;
return msg2;
}
else if (msg2.topic === 'BXOD/in'){
var reltuu = msg.payload;
global.set('dom.wc',reltuu);
msg2.ip = "192.168.1.63";
msg2.topic = "Туалет";
msg2.payload = reltuu;
return msg2;
}
else if (msg2.topic === 'BXOD/wc'){
var reltu = msg.payload;
global.set('dom.wc',reltu);
msg2.ip = "192.168.1.63";
msg2.topic = "Туалет";
msg2.payload = reltu;
return msg2;
}
else if (msg2.topic === 'BXOD/bath'){
var relwa = msg.payload;
global.set('dom.bath',relwa);
msg2.ip = "192.168.1.63";
msg2.topic = "Ванная";
msg2.payload = relwa;
return msg2;
}
else if (msg2.topic === 'TEMA/auto'){
var temav = msg.payload;
global.set('dom.auto',temav);
msg2.ip = "192.168.1.66";
msg2.topic = "АВТО";
msg2.payload = temav;
return msg2;
}
else if (msg2.topic === 'TEMA/vent'){
var ventv = msg.payload;
global.set('dom.ventV',ventv);
msg2.ip = "192.168.1.66";
msg2.topic = "Вентилятор";
msg2.payload = ventv;
return msg2;
}
else if (msg2.topic === 'TEMA/bra'){
var brav = msg.payload;
global.set('dom.bra',brav);
msg2.ip = "192.168.1.66";
msg2.topic = "Бра";
msg2.payload = brav;
return msg2;
}
else if (msg2.topic === 'TEMA/svet'){
var bravv = msg.payload;
global.set('dom.tema',bravv);
msg2.ip = "192.168.1.66";
msg2.topic = "Тема";
msg2.payload = bravv;
return msg2;
}
else if (msg2.topic === 'TEMA/out'){
var bravva = msg.payload;
global.set('dom.out',bravva);
msg2.ip = "192.168.1.66";
msg2.topic = "Out";
msg2.payload = bravva;
return msg2;
}
else if (msg2.topic === 'CTOL/test'){
var tests = msg.payload;
global.set('ecp.stol',tests);
esp.ip = "192.168.1.69";
esp.topic = "CTOL";
esp.payload = tests;
return esp;
}
else if (msg2.topic === 'OKHO/test'){
var testw = msg.payload;
global.set('esp.okno',testw);
esp.ip = "192.168.1.68";
esp.topic = "OKHO";
esp.payload = testw;
return esp;
}
else if (msg2.topic === 'CAB/test'){
var testl = msg.payload;
global.set('esp.cab',testl);
esp.ip = "192.168.1.67";
esp.topic = "CAB";
esp.payload = testl;
return esp;
}
else if (msg2.topic === 'BXOD/test'){
var testc = msg.payload;
global.set('esp.vxod',testc);
esp.ip = "192.168.1.63";
esp.topic = "BXOD";
esp.payload = testc;
return esp;
}
else if (msg2.topic === 'TEMA/test'){
var testv = msg.payload;
global.set('esp.tema',testv);
esp.ip = "192.168.1.66";
esp.topic = "TEMA";
esp.payload = testv;
return esp;
}
else if (msg2.topic === 'COOK/test'){
var testk = msg.payload;
global.set('esp.cook',testk);
esp.ip = "192.168.1.61";
esp.topic = "COOK";
esp.payload = testk;
return esp;
}
