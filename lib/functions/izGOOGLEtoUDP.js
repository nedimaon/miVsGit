var v1v, v2v, v3v;
var comm = {};
var ind = [];
var gpio = [
  "GPIOtoggle,",
  "event,SingleValue",
  "event,SingleValues",
  "192.168.1.66",
  "192.168.1.61",
  "192.168.1.63",
  "192.168.1.68",
  "event,SingleValue=",
];
var home = global.get("XATAa.home1", "storeInFile");
if (msg.payload == "ON") {
  v3v = 100;
  v2v = 65;
} else if (msg.payload == "OFF") {
  v3v = 0;
  v2v = 60;
} else {
  v1v, (v3v = msg.payload);
}
if (msg.name == "Ванна") {
  comm = [gpio[0], gpio[5], "0"];
} else if (msg.name == "Туалет") {
  comm = [gpio[0], gpio[5], "4"];
} else if (msg.name == "Радуга") {
  comm = [gpio[0], gpio[4], "5"];
} else if (msg.name == "Окно") {
  comm = [gpio[1], gpio[6], ""];
} else if (msg.name == "Бра") {
  comm = [gpio[0], gpio[3], "13"];
} else if (msg.name == "Прихожая") {
  comm = [gpio[7], gpio[5], v3v];
} else if (msg.name == "Кухня") {
  comm = [gpio[7], gpio[4], `11,${v3v}`];
} else if (msg.name == "Свет") {
  comm = [gpio[7], gpio[4], `10,${v3v}`];
} else if (msg.name == "Солнце") {
  comm = [gpio[0], gpio[6], "12"];
} else if (msg.name == "Тема ночь") {
  comm = [gpio[7], gpio[3], "71"];
} else if (msg.name == "Тема off") {
  comm = [gpio[7], gpio[3], "75"];
} else if (msg.name == "Тема LED") {
  comm = [gpio[7], gpio[3], "73"];
} else if (msg.name == "Тема RGB") {
  comm = [gpio[7], gpio[3], "72"];
} else if (msg.name == "Тема Бра") {
  comm = [gpio[7], gpio[3], "74"];
} else if (msg.name == "Вент") {
  comm = [gpio[7], gpio[3], v2v];
}
msg = {
  payload: comm[0] + comm[2],
  ip: comm[1],
  topic: msg.name,
  command: msg.payload,
  to: "udp",
};
msg2 = {
  payload: "http://" + comm[1] + "/control?cmd=" + comm[0] + comm[2],
  ip: comm[1],
  topic: msg.topic,
  command: msg.command,
  to: "http",
};

return [msg, msg2];
