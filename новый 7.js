var msg1 = msg.payload;
var name = msg.name;
msg.ip = msg.topic;
var myCount = flow.get("count");
flow.set("count",0);
var count = flow.get('count1')||0;
if (msg.msg1 === 'false'){
msg.topic = "192.168.1.69";
msg.payload = "GPIOtoggle,2";
count += 1;
flow.set('count1',count);
}
else {
msg.topic = "192.168.1.69";
msg.payload = "GPIOtoggle,16";
}
return msg;