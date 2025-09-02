var sens = {};
var esp = {};

if (msg.topic === 'CTOL/co'){
var gas = msg.payload;
global.set('dom.co',gas);
sens.ip = "192.168.1.69";
sens.topic = "Воздух";
sens.payload = gas;
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
sens.ip = "192.168.1.69";
sens.topic = "Гирлянда";
sens.payload = girr;
}
else if (msg.topic === 'CTOL/led'){
var bras = msg.payload;
global.set('dom.braled',bras);
sens.ip = "192.168.1.69";
sens.topic = "БраСтол";
sens.payload = bras;
}
else if (msg.topic === 'CTOL/rgb'){
var brak = msg.payload;
global.set('dom.brargb',brak);
sens.ip = "192.168.1.69";
sens.topic = "БраКухня";
sens.payload = brak;
}
else if (msg.topic === 'OKHO/t'){
var tempo = msg.payload;
global.set('dom.tempOut',tempo);
sens.ip = "192.168.1.68";
sens.topic = "tУлица";
sens.payload = tempo;
}
else if (msg.topic === 'OKHO/svet'){
var sun = msg.payload;
global.set('dom.solnce',sun);
sens.ip = "192.168.1.68";
sens.topic = "Солнце";
sens.payload = sun;
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
var sensk = msg.payload;
global.set('dom.tempK',sensk);
sens.ip = "192.168.1.61";
sens.topic = "tКухня";
sens.payload = sensk;
}
else if (msg.topic === 'COOK/h'){
var humi = msg.payload;
global.set('dom.humi',humi);
sens.ip = "192.168.1.61";
sens.topic = "ВлагаКухня";
}
else if (msg.topic === 'COOK/lux'){
var luxk = msg.payload;
global.set('dom.luxC',luxk);
sens.ip = "192.168.1.61";
sens.topic = "СветКухня";
sens.payload = luxk;
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
sens.ip = "192.168.1.61";
sens.topic = "Радуга";
sens.payload = rgbb;
}
else if (msg.topic === 'COOK/led'){
var ledd = msg.payload;
global.set('dom.svet',ledd);
sens.ip = "192.168.1.61";
sens.topic = "LED";
sens.payload = ledd;
}
else if (msg.topic === 'COOK/cook'){
var svetk = msg.payload;
global.set('dom.svetCook',svetk);
sens.ip = "192.168.1.61";
sens.topic = "Кухня";
sens.payload = svetk;
}
else if (msg.topic === 'CAB/t'){
var tempinn = msg.payload;
global.set('dom.tempIn',tempinn);
sens.ip = "192.168.1.67";
sens.topic = "tКомната";
sens.payload = tempinn;
}
else if (msg.topic === 'CAB/lux'){
var luxh = msg.payload;
global.set('dom.luxK',luxh);
sens.ip = "192.168.1.67";
sens.topic = "lКомната";
sens.payload = luxh;
}
else if (msg.topic === 'CAB/svet'){
var cabsv = msg.payload;
global.set('dom.cabinet',cabsv);
sens.ip = "192.168.1.67";
sens.topic = "Кабинет";
sens.payload = cabsv;
}
else if (msg.topic === 'CAB/divan'){
var cabdi = msg.payload;
global.set('dom.divan',cabdi);
sens.ip = "192.168.1.67";
sens.topic = "Диван";
sens.payload = cabdi;
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
sens.ip = "192.168.1.63";
sens.topic = "СветПрихожая";
sens.payload = luxs;
}
else if (msg.topic === 'BXOD/in'){
var reltuu = msg.payload;
global.set('dom.wc',reltuu);
sens.ip = "192.168.1.63";
sens.topic = "Туалет";
sens.payload = reltuu;
}
else if (msg.topic === 'BXOD/wc'){
var reltu = msg.payload;
global.set('dom.wc',reltu);
sens.ip = "192.168.1.63";
sens.topic = "Туалет";
sens.payload = reltu;
}
else if (msg.topic === 'BXOD/bath'){
var relwa = msg.payload;
global.set('dom.bath',relwa);
sens.ip = "192.168.1.63";
sens.topic = "Ванная";
sens.payload = relwa;
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
sens.ip = "192.168.1.66";
sens.topic = "Бра";
sens.payload = brav;
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

return [sens,esp];