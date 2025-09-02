// name: pp001
// outputs: 6
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var msg1 = { payload:"61" };
var msg2 = { payload:"62" };
var msg3 = { payload:"63" };
var msg4 = { payload:"64" };
if (msg.payload === "1") {
return [msg1];
} else if (msg.payload === "2")  {
   return [ msg2];
}
 else if (msg.payload === "3")  {
  return [msg3];
}
else {
    return [msg4];
}