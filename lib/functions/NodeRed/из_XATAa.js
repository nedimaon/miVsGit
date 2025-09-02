var values = global.get(
    [
        "OKHO.TempOut_t",
        "COOK.TempC_t", 
        "COOK.TempC_h",
        "CTOL.gas_co",
        "COOK.swk_lux",
        "BXOD.light_lux",
        "COOK.PIRkyx_pir",
        "BXOD.doorIn_in",
        "XATAa.home1",
        "XATAa.home",
        "CTOL.dsd_poliv",
        "TEMA.D1_svet",
        "OKHO.D11_open",
        "COOK.Dudev_led",
        "COOK.Dudev_cook",
        "BXOD.D11_svet"
    ]);
var tout = { payload: values[0],topic: "Т улица"};
var tin = { payload: values[1],topic: "Т квартира" };
var humy = { payload: values[2],topic: "Влажность" };
var co = { payload: values[3],topic: "Воздух" };
var luxc = { payload: values[4],topic: "Свет кухня" };
var luxk = { payload: values[5],topic: "Свет прихожая"};
var pirC = { payload: values[6],topic: "PIR кухня" };
var doorIn = { payload: values[7],topic: "Дверь"};
var home1 = { payload: values[8],topic: "Home"};
var home = { payload: values[9],topic: "Home1"};
var poliv = { payload: values[10],topic: "Полив"};
var tema =  values[11];
var okno = values[12];
var led =  { payload: values[13],topic: "Свет"};
var cook = { payload: values[14],topic: "Кухня"};
var svetK = { payload: values[15],topic: "Прихоая"};
    global.set(['XATAa.led','XATAa.cook','XATAa.svetK'],[values[13],values[14],values[15]]);
if (tema === 71){
    global.set('XATAa.tema',"OFF");
}else if(tema === 72){
    global.set('XATAa.tema',"RGB");
}else if(tema === 73){
    global.set('XATAa.tema',"LED");
}else if(tema === 74){
    global.set('XATAa.tema',"BRA");
}else if(tema === 75){
    global.set('XATAa.tema',"OFFall");
}else if(tema === 76){
    global.set('XATAa.tema',"Гости");
}
if (okno === 1){
    global.set('XATAa.okno',"Открыто");
}else if(okno === 0){
    global.set('XATAa.okno',"Закрыто");
}
return [tout,tin,humy,co,luxc,luxk,pirC,doorIn,home1,home,poliv,led,cook,svetK];