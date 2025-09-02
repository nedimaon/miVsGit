var v1value;
var v2value;
var v3value;
var pin;
var gpio = 'gpio,';
var eventt = 'event,SingleValue';
var even = 'event,SingleValues';
var home = global.get("XATAa.home1");
if (msg.payload == "ON") {
    v1value = 0;
    v3value = 100;
}else if (msg.payload == "OFF"){
     v1value = 1; 
     v3value = 0;
}else if (msg.payload == "led"){
    msg.name = "Тема LED";
}else if (msg.payload == "rgb"){
    msg.name = "Тема RGB";
}else if (msg.payload == "bra"){
    msg.name = "Тема Бра";
}else if (msg.payload == "off1"){
    msg.name = "Тема ночь";
}
else if (msg.payload == "off2"){
    msg.name = "Тема off";
}
else{
   v1value = msg.payload;   
    v3value = msg.payload; 
}
if (msg.topic == "vent"){
    var vv = v3value + 60;
    v2value = eventt + '=' + vv;
    msg.ip = "192.168.1.66";
}else if (msg.topic == "svet"){
    v2value = eventt + '=' + v3value + ",1";
    msg.ip = "192.168.1.61";
}else if (msg.topic == "vhod"){
   v2value = eventt + '=' + v3value;
    msg.ip = "192.168.1.63";
}else if (msg.topic == "cook"){
    v2value = eventt + '=' + v3value + ",2";
    msg.ip = "192.168.1.61";
}else{
    msg.ip = msg.topic;
}

if (msg.name == "Ванна") {
    pin = 0;
    v2value = gpio + pin + ',' + v1value;
}else if (msg.name == "Туалет") {
    pin = 4;
      v2value = gpio + pin + ',' + v1value;
}
else if (msg.name == "Радуга") {
    pin = 5;
      v2value = gpio + pin + ',' + v1value;
}
else if (msg.name == "Окно") {
      v2value = eventt;
}
else if (msg.name == "Бра") {
    pin = 13;
      v2value = gpio + pin + ',' + v1value;
}
else if (msg.name == "Прихожая") {
    pin = 1;
      v2value = eventt + '=' + v3value + ',' + pin;
}
else if (msg.name == "Кухня") {
    pin = 2;
      v2value = eventt + '=' + v3value + ',' + pin;
}
else if (msg.name == "Свет") {
      pin = 1;
      v2value = eventt + '=' + v3value + ',' + pin;
}
else if (msg.name == "Солнце") {
      pin = 12;
      v2value = gpio + pin + ',' + v1value;
}
else if (msg.name == "Тема ночь") {
          v2value = eventt + "=" + 71;
}
else if (msg.name == "Тема off") {
          v2value = eventt + "=" + 75;
}
else if (msg.name == "Тема LED") {
     v2value = eventt + "=" + 73;
}
else if (msg.name == "Тема RGB") {
     v2value = eventt + "=" + 72;
}
else if (msg.name == "Тема Бра") {
     v2value = eventt + "=" + 74;
}
else if (msg.name == "Вент") {
    var vent = 60 + v1value;
      v2value = eventt + "=" + vent;
}
else if (msg.name == "Вход") {
    if ( msg.payload == "ON"){
       home = "Дома";
      // h = 73;
    }else{
         home  = "Вышел";
       //  h = 75;
    }
   //var vv = v1value.toString();
   //  v2value = eventt + "=" + v1value;
    global.set("XATAa.home2",home);
   // global.set("XATAa.home2",vv);
     global.set("XATAa.home3",v1value);
    }
 msg.paa = home;
   msg.payload = v2value;
   return msg;