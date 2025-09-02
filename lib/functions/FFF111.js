var sens = {};
var tempp = {};
var luxx = {};
var air = {};
var svett = {};
var esp = {};

if (msg.topic === 'CTOL/co'){
var gas = msg.payload;
global.set('dom.co',gas);
air.ip = "192.168.1.69";
air.topic = "Воздух";
air.payload = gas;
}
else if (msg.topic === 'CTOL/poliv'){
var pol = msg.payload;
global.set('dom.poliv',pol);
sens.ip = "192.168.1.69";
sens.topic = "Полив";
sens.payload = pol;
}
else if (msg.topic === 'CTOL/gir'){
var girr = msg.payload;
global.set('dom.gir',girr);
svett.ip = "192.168.1.69";
svett.topic = "Гирлянда";
svett.payload = girr;
}
else if (msg.topic === 'CTOL/led'){
var bras = msg.payload;
global.set('dom.braled',bras);
svett.ip = "192.168.1.69";
svett.topic = "БраСтол";
svett.payload = bras;
}
else if (msg.topic === 'CTOL/rgb'){
var brak = msg.payload;
global.set('dom.brargb',brak);
svett.ip = "192.168.1.69";
svett.topic = "БраКухня";
svett.payload = brak;
}
else if (msg.topic === 'OKHO/t'){
var tempo = msg.payload;
global.set('dom.tempOut',tempo);
tempp.ip = "192.168.1.68";
tempp.topic = "tУлица";
tempp.payload = tempo;
}
else if (msg.topic === 'OKHO/svet'){
var sun = msg.payload;
global.set('dom.solnce',sun);
svett.ip = "192.168.1.68";
svett.topic = "Солнце";
svett.payload = sun;
}
else if (msg.topic === 'OKHO/time'){
var timeo = msg.payload;
global.set('dom.time',timeo);
sens.ip = "192.168.1.68";
sens.topic = "Будильник";
sens.payload = timeo;
}
else if (msg.topic === 'OKHO/utro'){
var suun = msg.payload;
global.set('dom.utro',suun);
sens.ip = "192.168.1.68";
sens.topic = "Утро";
sens.payload = suun;
}
else if (msg.topic === 'OKHO/open'){
var saan = msg.payload;
global.set('dom.okno',saan);
sens.ip = "192.168.1.68";
sens.topic = "Окно";
sens.payload = saan;
}
else if (msg.topic === 'COOK/t'){
var temppk = msg.payload;
global.set('dom.tempK',temppk);
tempp.ip = "192.168.1.61";
tempp.topic = "tКухня";
tempp.payload = temppk;
}
else if (msg.topic === 'COOK/h'){
var humi = msg.payload;
global.set('dom.humi',humi);
air.ip = "192.168.1.61";
air.topic = "ВлагаКухня";
}
else if (msg.topic === 'COOK/lux'){
var luxk = msg.payload;
global.set('dom.luxC',luxk);
luxx.ip = "192.168.1.61";
luxx.topic = "СветКухня";
luxx.payload = luxk;
}
else if (msg.topic === 'COOK/pir'){
var pirk = msg.payload;
global.set('dom.pirCook',pirk);
sens.ip = "192.168.1.61";
sens.topic = "PIRКухня";
sens.payload = pirk;
}
else if (msg.topic === 'COOK/rgb'){
var rgbb = msg.payload;
global.set('dom.raduga',rgbb);
svett.ip = "192.168.1.61";
svett.topic = "Радуга";
svett.payload = rgbb;
}
else if (msg.topic === 'COOK/led'){
var ledd = msg.payload;
global.set('dom.svet',ledd);
svett.ip = "192.168.1.61";
svett.topic = "LED";
svett.payload = ledd;
}
else if (msg.topic === 'COOK/cook'){
var svetk = msg.payload;
global.set('dom.svetCook',svetk);
svett.ip = "192.168.1.61";
svett.topic = "Кухня";
svett.payload = svetk;
}
else if (msg.topic === 'CAB/t'){
var tempinn = msg.payload;
global.set('dom.tempIn',tempinn);
tempp.ip = "192.168.1.67";
tempp.topic = "tКомната";
tempp.payload = tempinn;
}
else if (msg.topic === 'CAB/lux'){
var luxh = msg.payload;
global.set('dom.luxK',luxh);
luxx.ip = "192.168.1.67";
luxx.topic = "lКомната";
luxx.payload = luxh;
}
else if (msg.topic === 'CAB/svet'){
var cabsv = msg.payload;
global.set('dom.cabinet',cabsv);
svett.ip = "192.168.1.67";
svett.topic = "Кабинет";
svett.payload = cabsv;
}
else if (msg.topic === 'CAB/divan'){
var cabdi = msg.payload;
global.set('dom.divan',cabdi);
svett.ip = "192.168.1.67";
svett.topic = "Диван";
svett.payload = cabdi;
}
else if (msg.topic === 'CAB/home'){
var luxho = msg.payload;
global.set('dom.home',luxho);
sens.ip = "192.168.1.67";
sens.topic = "Дом";
sens.payload = luxho;
}
else if (msg.topic === 'CAB/pir'){
var piro = msg.payload;
global.set('dom.pirCab',piro);
sens.ip = "192.168.1.67";
sens.topic = "PIR кабинет";
sens.payload = piro;
}
else if (msg.topic === 'BXOD/lux'){
var luxs = msg.payload;
global.set('dom.luxV',luxs);
luxx.ip = "192.168.1.63";
luxx.topic = "СветПрихожая";
luxx.payload = luxs;
}
else if (msg.topic === 'BXOD/in'){
var reltuu = msg.payload;
global.set('dom.wc',reltuu);
svett.ip = "192.168.1.63";
svett.topic = "Туалет";
svett.payload = reltuu;
}
else if (msg.topic === 'BXOD/wc'){
var reltu = msg.payload;
global.set('dom.wc',reltu);
svett.ip = "192.168.1.63";
svett.topic = "Туалет";
svett.payload = reltu;
}
else if (msg.topic === 'BXOD/bath'){
var relwa = msg.payload;
global.set('dom.bath',relwa);
svett.ip = "192.168.1.63";
svett.topic = "Ванная";
svett.payload = relwa;
}
else if (msg.topic === 'TEMA/auto'){
var temav = msg.payload;
global.set('dom.auto',temav);
sens.ip = "192.168.1.66";
sens.topic = "АВТО";
sens.payload = temav;
}
else if (msg.topic === 'TEMA/vent'){
var ventv = msg.payload;
global.set('dom.ventV',ventv);
sens.ip = "192.168.1.66";
sens.topic = "Вентилятор";
sens.payload = ventv;
}
else if (msg.topic === 'TEMA/bra'){
var brav = msg.payload;
global.set('dom.bra',brav);
svett.ip = "192.168.1.66";
svett.topic = "Бра";
svett.payload = brav;
}
else if (msg.topic === 'TEMA/svet'){
var bravv = msg.payload;
global.set('dom.tema',bravv);
sens.ip = "192.168.1.66";
sens.topic = "Тема";
sens.payload = bravv;
}
else if (msg.topic === 'TEMA/home'){
var brava = msg.payload;
global.set('dom.home',brava);
sens.ip = "192.168.1.66";
sens.topic = "Дома";
sens.payload = brava;
}
else if (msg.topic === 'TEMA/out'){
var bravva = msg.payload;
global.set('dom.out',bravva);
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