// name: Безымянный function
// outputs: 6
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
 // CAB/temp  CAB/mihome. CAB/luxx  CAB/ping  CAB/t CAB/pir  CAB/sv  CAB/tempIn
 // OKHO/open  OKHO/utro  OKHO/hh  OKHO/mm  OKHO/t OKHO/time OKHO/test  OKHO/svet  OKHO/vre 
 // COOK/led  COOK/cook  COOK/t COOK/h  COOK/lux  COOK/pir 
 // CTOL/co2  CTOL/poliv  CTOL/svet  CTOL/led  CTOL/rgb 
 // TEMA/svet  TEMA/auto  TEMA/vent  TEMA/mihome. TEMA/Output 
 // BXOD/lux  BXOD/wc  BXOD/bath  BXOD/in  BXOD/vent 
var sens = {};
var tempp = {};
var luxx = {};
var air = {};
var svett = {};
var esp = {};

if (msg.topic === 'CTOL/co2'){
var gas = msg.payload;
global.set('mihome.co',gas);
air.ip = "192.168.1.69";
air.topic = "Воздух";
air.payload = gas;
}
else if (msg.topic === 'CTOL/led'){
var bras = msg.payload;
global.set('mihome.braled',bras);
svett.ip = "192.168.1.69";
svett.topic = "БраСтол";
svett.payload = bras;
}
else if (msg.topic === 'CTOL/rgb'){
var brak = msg.payload;
global.set('mihome.brarg',brak);
svett.ip = "192.168.1.69";
svett.topic = "БраКухня";
svett.payload = brak;
}
else if (msg.topic === 'OKHO/t'){
var tempo = msg.payload;
global.set('mihome.tempOut',tempo);
tempp.ip = "192.168.1.68";
tempp.topic = "ТемпУлица";
tempp.payload = tempo;
}
else if (msg.topic === 'OKHO/svet'){
var sun = msg.payload;
global.set('mihome.solnce',sun);
svett.ip = "192.168.1.68";
svett.topic = "Солнце";
svett.payload = sun;
}
else if (msg.topic === 'OKHO/time'){
var timeo = msg.payload;
global.set('mihome.time',timeo);
sens.ip = "192.168.1.68";
sens.topic = "Будильник";
sens.payload = timeo;
}
else if (msg.topic === 'OKHO/utro'){
var suun = msg.payload;
global.set('mihome.utro',suun);
sens.ip = "192.168.1.68";
sens.topic = "Утро";
sens.payload = suun;
}
else if (msg.topic === 'OKHO/open'){
var saan = msg.payload;
global.set('mihome.okno',saan);
sens.ip = "192.168.1.68";
sens.topic = "Окно";
sens.payload = saan;
}
else if (msg.topic === 'COOK/t'){
var temppk = msg.payload;
global.set('mihome.tempK',temppk);
tempp.ip = "192.168.1.61";
tempp.topic = "ТемпКухня";
tempp.payload = temppk;
}
else if (msg.topic === 'COOK/h'){
var humi = msg.payload;
global.set('mihome.humi',humi);
air.ip = "192.168.1.61";
air.topic = "ВлагаКухня";
}
else if (msg.topic === 'COOK/lux'){
var luxk = msg.payload;
global.set('mihome.luxC',luxk);
luxx.ip = "192.168.1.61";
luxx.topic = "СветКухня";
luxx.payload = luxk;
}
else if (msg.topic === 'COOK/pir'){
var pirk = msg.payload;
global.set('mihome.pirCook',pirk);
sens.ip = "192.168.1.61";
sens.topic = "PIRКухня";
sens.payload = pirk;
}
else if (msg.topic === 'COOK/rgb'){
var rgbb = msg.payload;
global.set('mihome.raduga',rgbb);
svett.ip = "192.168.1.61";
svett.topic = "Радуга";
svett.payload = rgbb;
}
else if (msg.topic === 'COOK/led'){
var ledd = msg.payload;
global.set('mihome.svet',ledd);
svett.ip = "192.168.1.61";
svett.topic = "LED";
svett.payload = ledd;
}
else if (msg.topic === 'COOK/cook'){
var svetk = msg.payload;
global.set('mihome.svetCook',svetk);
svett.ip = "192.168.1.61";
svett.topic = "Кухня";
svett.payload = svetk;
}
else if (msg.topic === 'CAB/t'){
var tempin = msg.payload;
global.set('mihome.tempIn',tempin);
tempp.ip = "192.168.1.67";
tempp.topic = "temppIn";
tempp.payload = tempin;
}
else if (msg.topic === 'CAB/lux'){
var luxh = msg.payload;
global.set('mihome.luxK',luxh);
luxx.ip = "192.168.1.67";
luxx.topic = "СветКомната";
luxx.payload = luxh;
}
else if (msg.topic === 'CAB/svet'){
var cabsv = msg.payload;
global.set('mihome.cabinet',cabsv);
svett.ip = "192.168.1.67";
svett.topic = "Кабинет";
svett.payload = cabsv;
}
else if (msg.topic === 'CAB/divan'){
var cabdi = msg.payload;
global.set('mihome.divan',cabdi);
svett.ip = "192.168.1.67";
svett.topic = "Диван";
svett.payload = cabdi;
}
else if (msg.topic === 'CAB/home'){
var luxho = msg.payload;
global.set('mihome.hhome',luxho);
sens.ip = "192.168.1.67";
sens.topic = "Дом";
sens.payload = luxho;
}
else if (msg.topic === 'CAB/pir'){
var piro = msg.payload;
global.set('mihome.pirCab',piro);
sens.ip = "192.168.1.67";
sens.topic = "PIR кабинет";
sens.payload = piro;
}
else if (msg.topic === 'BXOD/lux'){
var luxs = msg.payload;
global.set('mihome.luxV',luxs);
luxx.ip = "192.168.1.63";
luxx.topic = "СветПрихожая";
luxx.payload = luxs;
}
else if (msg.topic === 'BXOD/in'){
var reltuu = msg.payload;
global.set('mihome.wc',reltuu);
svett.ip = "192.168.1.63";
svett.topic = "Туалет";
svett.payload = reltuu;
}
else if (msg.topic === 'BXOD/wc'){
var reltu = msg.payload;
global.set('mihome.wc',reltu);
svett.ip = "192.168.1.63";
svett.topic = "Туалет";
svett.payload = reltu;
}
else if (msg.topic === 'BXOD/bath'){
var relwa = msg.payload;
global.set('mihome.bath',relwa);
svett.ip = "192.168.1.63";
svett.topic = "Ванная";
svett.payload = relwa;
}
else if (msg.topic === 'TEMA/auto'){
var temav = msg.payload;
global.set('mihome.auto',temav);
sens.ip = "192.168.1.66";
sens.topic = "АВТО";
sens.payload = temav;
}
else if (msg.topic === 'TEMA/vent'){
var ventv = msg.payload;
global.set('mihome.ventV',ventv);
sens.ip = "192.168.1.66";
sens.topic = "Вентилятор";
sens.payload = ventv;
}
else if (msg.topic === 'TEMA/bra'){
var brav = msg.payload;
global.set('mihome.bra',brav);
svett.ip = "192.168.1.66";
svett.topic = "Бра";
svett.payload = brav;
}
else if (msg.topic === 'TEMA/svet'){
var bravv = msg.payload;
global.set('mihome.tema',bravv);
sens.ip = "192.168.1.66";
sens.topic = "Тема";
sens.payload = bravv;
}
else if (msg.topic === 'TEMA/home'){
var brava = msg.payload;
global.set('mihome.home',brava);
sens.ip = "192.168.1.66";
sens.topic = "Дома";
sens.payload = brava;
}
else if (msg.topic === 'TEMA/out'){
var bravva = msg.payload;
global.set('mihome.out',bravva);
sens.ip = "192.168.1.66";
sens.topic = "Out";
sens.payload = bravva;
}
else if (msg.topic === 'CTOL/test'){
var tests = msg.payload;
global.set('ecp.stol',tests);
esp.ip = "192.168.1.69";
esp.topic = "CTOL";
esp.payload = tests;
}
else if (msg.topic === 'OKHO/test'){
var testw = msg.payload;
global.set('esp.okno',testw);
esp.ip = "192.168.1.68";
esp.topic = "OKHO";
esp.payload = testw;
}
else if (msg.topic === 'CAB/test'){
var testl = msg.payload;
global.set('esp.cab',testl);
esp.ip = "192.168.1.67";
esp.topic = "CAB";
esp.payload = testl;
}
else if (msg.topic === 'BXOD/test'){
var testc = msg.payload;
global.set('esp.vxod',testc);
esp.ip = "192.168.1.63";
esp.topic = "BXOD";
esp.payload = testc;
}
else if (msg.topic === 'TEMA/test'){
var testv = msg.payload;
global.set('esp.tema',testv);
esp.ip = "192.168.1.66";
esp.topic = "TEMA";
esp.payload = testv;
}
else if (msg.topic === 'COOK/test'){
var testk = msg.payload;
global.set('esp.cook',testk);
esp.ip = "192.168.1.61";
esp.topic = "COOK";
esp.payload = testk;
}

return [sens,tempp,luxx,air,svett,esp];