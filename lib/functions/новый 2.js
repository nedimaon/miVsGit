payload.Sensors[10].TaskValues[0].Value
nodemcu["192.168.1.69"].Sensors[9].TaskValues[0].Value
nodemcu["192.168.1.69"].Sensors[10].TaskValues[0].Value

var esp=msg.payload;
var msg2 = {};
global.set('nodemcu',esp);
var svett=global.get('nodemcu["192.168.1.61"].Sensors[6].TaskValues[0].Value');
var svetCookk=global.get('nodemcu["192.168.1.61"].Sensors[6].TaskValues[1].Value');
var tempKk=global.get('nodemcu["192.168.1.61"].Sensors[8].TaskValues[0].Value');
var humii=global.get(nodemcu["192.168.1.61"].Sensors[8].TaskValues[1].Value');
var oknoo=global.get('nodemcu["192.168.1.68"].Sensors[8].TaskValues[0].Value');
var utroo=global.get('nodemcu["192.168.1.68"].Sensors[8].TaskValues[1].Value');
var temaa=global.get('nodemcu["192.168.1.66"].Sensors[4].TaskValues[0].Value');
var autoo=global.get('nodemcu["192.168.1.66"].Sensors[4].TaskValues[1].Value');
var ventVv=global.get('nodemcu["192.168.1.66"].Sensors[4].TaskValues[2].Value');
var coo=global.get('nodemcu["192.168.1.69"].Sensors[11].TaskValues[0].Value');
var tempInn=global.get('nodemcu["192.168.1.67"].Sensors[5].TaskValues[0].Value');
var tempOutt=global.get('nodemcu["192.168.1.68"].Sensors[10].TaskValues[0].Value');
global.set('dom.svet',svett);
global.set('dom.tout',tempOutt);
global.set('dom.svet_k',svetCookk);
global.set('dom.temp_k',tempKk);
global.set('dom.humy',humii);
global.set('dom.co',coo);
global.set('dom.vent',ventVv);
global.set('dom.tema',temaa);
global.set('dom.okno',oknoo);
var esse=global.get('nodemcu');
msg2.payload = esse;


return msg2;
count