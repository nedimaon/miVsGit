var v3v = msg.payload.content;
var comm = [];
msg.topic = v3v;
var gpio = [
  "GPIOtoggle,",
  "event,SingleValue",
  "event,SingleValues",
  "192.168.1.66",
  "192.168.1.61",
  "192.168.1.63",
  "192.168.1.68",
  "event,SingleValue=",
  "192.168.1.69",
];

var sv = flow.get("sv", "memoryOnly") || 0;
var svv = parseInt(sv);
if (svv >= 80) {
  svv = -10;
}
if (msg.topic == "Ванна") {
  comm = [gpio[0], gpio[5], "0"];
} else if (msg.topic == "Туалет") {
  comm = [gpio[0], gpio[5], "4"];
} else if (msg.topic == "Радуга") {
  comm = [gpio[0], gpio[4], "5"];
} else if (msg.topic == "Окно") {
  comm = [gpio[1], gpio[6], ""];
} else if (msg.topic == "Бра") {
  comm = [gpio[0], gpio[3], "13"];
} else if (msg.topic == "Прихожая") {
  svv += 10;
  comm = [gpio[7], gpio[5], svv];
} else if (msg.topic == "Кухня") {
  svv += 10;
  comm = [gpio[7], gpio[4], `11,${svv}`];
} else if (msg.topic == "Свет") {
  svv += 10;
  comm = [gpio[7], gpio[4], `10,${svv}`];
} else if (msg.topic == "Солнце") {
  comm = [gpio[0], gpio[6], "12"];
} else if (msg.topic == "Тема ночь") {
  comm = [gpio[7], gpio[3], "71"];
} else if (msg.topic == "Тема off") {
  comm = [gpio[7], gpio[3], "75"];
} else if (msg.topic == "Тема LED") {
  comm = [gpio[7], gpio[3], "73"];
} else if (msg.topic == "Тема RGB") {
  comm = [gpio[7], gpio[3], "72"];
} else if (msg.topic == "Тема Бра") {
  comm = [gpio[7], gpio[3], "74"];
} else if (msg.topic == "ВентON") {
  comm = [gpio[7], gpio[3], "65"];
} else if (msg.topic == "ВентOFF") {
  comm = [gpio[7], gpio[3], "60"];
} else if (msg.topic == "Бра стол") {
  comm = [gpio[0], gpio[8], "16"];
} else if (msg.topic == "Бра стул") {
  comm = [gpio[0], gpio[8], "2"];
}
//if (sv == 0){
//svv = parseInt(sv);
//}else if(sv >= 800){
//svv = 0;
//}
flow.set("sv", svv, "memoryOnly");
msg = {
  payload: comm[0] + comm[2],
  ip: comm[1],
  topic: msg.topic,
  command: svv,
  to: sv,
};
msg2 = {
  payload: "http://" + comm[1] + "/control?cmd=" + comm[0] + comm[2],
  ip: comm[1],
  topic: msg.topic,
  command: msg.command,
  to: "http",
};

return [msg, msg2];
