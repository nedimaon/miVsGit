
//Разделение строки на массив по разделителю и присвоение частей массива переменным

 var coolVar = '123-abc-itchy-knee';
    var coolVarParts = coolVar.split('-'); // this is an array containing the items

    var1=coolVarParts[0]; //this will retrieve 123
return msg;


// Управление GPIO на устройстве ESP через MQTT
var gpio_pin = 12; // = represents "D6" on a wemos d1 mini
var espeasy_device_name = "EspEasy_GPIO"

//do not modify anything beyond this line

var gpio_state = msg.payload;
msg.topic = String(espeasy_device_name) + "/cmd";
msg.payload = "GPIO," + String(gpio_pin) + "," + (gpio_state ? "1" : "0");
return msg;




var outputMsgs = [];
var words = msg.payload.split(" ");
for (var w in words) {
    outputMsgs.push({payload:words[w]});
}
return [ outputMsgs ];


// name: FilterJSON
var nachricht="Die Temperatur ist "  + msg.payload["CPU Temperature"] + " Grad Celsius";
var tstamp=(new Date()).toISOString().replace(/t/gi,' ').trim();
msg.payload = nachricht + " am " + tstamp;
msg.topic=nachricht;
return msg;