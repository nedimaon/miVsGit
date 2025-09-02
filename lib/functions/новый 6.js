var msg1 = msg.payload;
var name = msg.name;
msg.ip = msg.topic;
if (msg.name === 'sled'){
msg1.ip = "192.168.1.69";
msg1.payload = "GPIOtoggle,2";
}
else if (msg.topic === 'srgb'){
msg1.ip = "192.168.1.69";
msg1.payload = "GPIOtoggle,16";
}
else if (msg.topic === 'sun'){
msg1.ip = "192.168.1.68";
msg1.payload = "GPIOtoggle,12";
}
else if (msg.topic === 'rgb'){
msg1.ip = "192.168.1.61";
msg1.payload = "GPIOtoggle,5";
}
else if (msg.topic === 'kab'){
msg1.ip = "192.168.1.67";
msg1.payload = "GPIOtoggle,5";
}
else if (msg.topic === 'divan'){
msg1.ip = "192.168.1.67";
msg1.payload = "GPIOtoggle,4";
}
else if (msg.topic === 'wc'){
msg1.ip = "192.168.1.63";
msg1.payload = "GPIOtoggle,4";
}
else if (msg.topic === 'bath'){
msg1.ip = "192.168.1.63";
msg1.payload = "GPIOtoggle,0";
}
else if (msg.topic === 'bra'){
msg1.ip = "192.168.1.66";
msg1.payload = "GPIOtoggle,13";
}
else if (msg.topic === 'okno'){
msg1.ip = "192.168.1.68";
msg1.payload = "event,Okno";
}
else if (msg.topic === 'off'){
msg1.ip = "192.168.1.66";
msg1.payload = "event,SingleValue=71";
}
return msg1;
