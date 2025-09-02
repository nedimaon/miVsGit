// name: build_command
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
// define your settings here

var gpio_pin = 12; // = represents "D6" on a wemos d1 mini
var espeasy_device_name = "EspEasy_GPIO";
var pulse_duration = "1000"; // possible values 10 to 15000 milliseconds

//do not modify anything beyond this line

var gpio_state = msg.payload;
msg.topic = String(espeasy_device_name) + "/cmd";
msg.payload = "LongPulse_mS," + String(gpio_pin) + "," + (gpio_state ? "1" : "0")+"," + String(pulse_duration);
return msg;