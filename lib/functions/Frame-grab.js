// name: Frame grab
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
var now = new Date();
// Create formatted time
var yyyy = now.getFullYear();
var mm = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1); // getMonth() is zero-based
var dd  = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
var hh = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
var mmm  = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
var ss  = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

// Last update: "+dd + "." + mm + "." + yyyy + " " + hh + ":" + mmm + ":" + ss});

// file path with / at the end
var path = "/home/pi/node-red-static/";                     // This is the path
var filename = "frame_"+yyyy+mm+dd+"-"+hh+mm+ss+".jpg";     // file name
msg.payload = path + filename;                              // pass the full path to payload for the exec node to add to the end of the command
msg.file = filename;                                        // To be used later to store the information in the DB
msg.path = path;                                            // Same as above
msg.wwwpath = "/";                                          // Same as above
msg.topic = "store";                                        // Flag to store this image in the DB
msg.type = "timelapse";                                     // Image type e.g. Front camera, etc.
msg.epoch = now.getTime();                                  // Current timestamp
msg.formatteddate = dd + "." + mm + "." + yyyy + " " + hh + ":" + mmm + ":" + ss;   // Formatted timestamp to be used later

return msg;