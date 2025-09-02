// name: to_udp
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var ms = msg.payload;
var msg1 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg2 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg3 = { payload: "gpio,13," + ms, ip:"192.168.1.66" };
var msg4 = { payload: "gpio,4," + ms, ip:"192.168.1.63" };
var msg5 = { payload: "event,SingleValue=" + ms, ip:"192.168.1.61" };
var msg6 = { payload: "gpio,5," + ms, ip:"192.168.1.61" };
var msg7 = { payload: "gpio,4," + ms, ip:"192.168.1.61" };
var msg8 = { payload: "gpio,2," + ms, ip:"192.168.1.69" };
var msg9 = { payload: "gpio,16," + ms, ip:"192.168.1.69" };
var msg10 = { payload: "gpio,4," + ms, ip:"192.168.1.67" };
var msg11 = { payload: "gpio,2," + ms, ip:"192.168.1.63" };
var msg12 = { payload: "event,SVV=" + ms, ip:"192.168.1.68" };
if (msg._topic == "BXOD/bath") {
return [msg1];
} else if (msg._topic == "OKHO/svet")  {
   return [msg2];
}else if (msg._topic == "TEMA/bra")  {
   return [msg3];
}else if (msg._topic == "BXOD/wc")  {
   return [msg4];
}else if (msg._topic == "COOK/led")  {
   return [msg5];
}else if (msg._topic == "COOK/rgb")  {
   return [msg6];
}else if (msg._topic == "COOK/svet")  {
   return [msg7];
}else if (msg._topic == "CTOL/led")  {
   return [msg8];
}else if (msg._topic == "CTOL/rgb")  {
   return [msg9];
}else if (msg._topic == "CAB/svet")  {
   return [msg10];
}else if (msg.topic == "BXOD/svet")  {
   return [msg11];
}else if (msg._topic == "OKHO/utro")  {
   return [msg12];
}
