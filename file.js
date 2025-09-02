var v3v = msg.payload.content,
    comm = [];
msg.topic = v3v;
var gpio = [
        "GPIOtoggle,",
        "event,SingleValue",
        "event,SingleValues",
        "192.168.1.66",
        "192.168.1.61",
        "192.168.1.63",
        "192.168.1.68",
        "event,SingleValue=",
        "192.168.1.69",
    ],
    sv = {};
sv = flow.get("sv", "memoryOnly");
var sva,
    svd,
    svc = parseInt(sv.a, sv.b, sv.c);
"Ванна" == msg.topic
    ? (comm = [gpio[0], gpio[5], "0"])
    : "Туалет" == msg.topic
    ? (comm = [gpio[0], gpio[5], "4"])
    : "Радуга" == msg.topic
    ? (comm = [gpio[0], gpio[4], "5"])
    : "Окно" == msg.topic
    ? (comm = [gpio[1], gpio[6], ""])
    : "Бра" == msg.topic
    ? (comm = [gpio[0], gpio[3], "13"])
    : "Прихожая" == msg.topic
    ? (comm = [gpio[7], gpio[5], sva + 100])
    : "Кухня" == msg.topic
    ? (comm = [gpio[7], gpio[4], "11," + svb + 100])
    : "Свет" == msg.topic
    ? (comm = [gpio[7], gpio[4], "10," + svc + 100])
    : "Солнце" == msg.topic
    ? (comm = [gpio[0], gpio[6], "12"])
    : "Тема ночь" == msg.topic
    ? (comm = [gpio[7], gpio[3], "71"])
    : "Тема off" == msg.topic
    ? (comm = [gpio[7], gpio[3], "75"])
    : "Тема LED" == msg.topic
    ? (comm = [gpio[7], gpio[3], "73"])
    : "Тема RGB" == msg.topic
    ? (comm = [gpio[7], gpio[3], "72"])
    : "Тема Бра" == msg.topic
    ? (comm = [gpio[7], gpio[3], "74"])
    : "ВентON" == msg.topic
    ? (comm = [gpio[7], gpio[3], "65"])
    : "ВентOFF" == msg.topic
    ? (comm = [gpio[7], gpio[3], "60"])
    : "Бра стол" == msg.topic
    ? (comm = [gpio[0], gpio[8], "16"])
    : "Бра стул" == msg.topic && (comm = [gpio[0], gpio[8], "2"]),
    (sva || svb || svc > 900) && ((sv[a] = "0"), (sv[b] = 0), (sv[c] = "0")),
    flow.set("sv", sv, "memoryOnly"),
    (msg = {
        payload: comm[0] + comm[2],
        ip: comm[1],
        topic: msg.topic,
        command: sva,
        to: svc,
    }),
    (msg2 = {
        payload: "http://" + comm[1] + "/control?cmd=" + comm[0] + comm[2],
        ip: comm[1],
        topic: msg.topic,
        command: msg.command,
        to: "http",
    });
