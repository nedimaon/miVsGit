// name: switch_to_udp
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var ms = msg.payload;
var msg1 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg2 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg3 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg4 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg5 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg6 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg7 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg8 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg9 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
var msg10 = { payload: "gpio,12," + ms, ip:"192.168.1.68" };
var msg11 = { payload: "gpio,0," + ms, ip:"192.168.1.63" };
if (msg._topic == "BXOD/bath") {
return [msg1];
} else if (msg._topic == "OKHO/svet")  {
   return [msg2];
}else if (msg._topic == "OKHO/svet")  {
   return [msg3];
}else if (msg._topic == "OKHO/svet")  {
   return [msg4];
}else if (msg._topic == "OKHO/svet")  {
   return [msg5];
}else if (msg._topic == "OKHO/svet")  {
   return [msg6];
}else if (msg._topic == "OKHO/svet")  {
   return [msg7];
}else if (msg._topic == "OKHO/svet")  {
   return [msg8];
}else if (msg._topic == "OKHO/svet")  {
   return [msg9];
}else if (msg._topic == "OKHO/svet")  {
   return [msg10];
}else if (msg._topic == "OKHO/svet")  {
   return [msg11];
}
