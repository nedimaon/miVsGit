var cam = global.get("CAM", "storeInFile");
var vv = msg.payload.content;
if (vv == "camOut_snap") {
  msg.payload = cam.camOUT.snapshot;
} else if (vv == "camOut_start") {
  msg.payload = cam.camOUT.record;
} else if (vv == "camOut_stop") {
  msg.payload = cam.camOUT.recordstop;
} else if (vv == "camOut_on") {
  msg.payload = cam.camOUT.bringonline;
} else if (vv == "camOut_off") {
  msg.payload = cam.camOUT.takeofline;
} else if (vv == "camOut_start1") {
  msg2.payload = cam.camOUT.record;
} else if (vv == "camIn_snap") {
  msg.payload = cam.camIN.snapshot;
} else if (vv == "camIn_start") {
  msg.payload = cam.camIN.record;
} else if (vv == "camIn_stop") {
  msg.payload = cam.camIN.recordstop;
} else if (vv == "camIn_on") {
  msg.payload = cam.camIN.bringonline;
} else if (vv == "camIn_off") {
  msg.payload = cam.camIN.takeofline;
} else if (vv == "camIn_start1") {
  msg2.payload = cam.camIN.record;
} else {
}
return [msg, msg2];
