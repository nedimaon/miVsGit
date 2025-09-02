var topp = msg.payload;
var home = global.get('XATAa.home',"storeInFile");
var msg2 = {};
var msg3 ={};
/* var datta = ["toCam",
    "192.168.1.66"
] */
msg2.topic = 7;
msg.ip = '192.168.1.66';
msg2.ip = '192.168.1.57';
var myCount = flow.get('count1',"memoryOnly")||0;
var count = flow.get('count',"memoryOnly")||0;
if (msg.payload === false){
count += 1;
flow.set('count',count,"memoryOnly");
msg.topic = 1;
if (count === 3){
global.set(['XATAa.home','XATAa.home1'],["0","Вышел"],["storeInFile","storeInFile"]);
msg.payload = "event,SingleValue=0";
msg3.payload = "Вышел";
msg.name = "Вышел";
msg.topic = 5;
msg2.payload = "bringonline?ot=2&oid=4";
}
}else {
msg.payload = "event,SingleValue=1";
flow.set(["count1","count"],[myCount + count,0],["memoryOnly","memoryOnly"]);
global.set(['XATAa.home','XATAa.home1'],["1","Дома"],["storeInFile","storeInFile"]);
msg.name = "Дома";
msg3.payload = "Дома";
msg.topic = 2;
msg2.payload = "takeoffline?ot=2&oid=4";
}

return [msg,msg2,msg3];  