// name: toData
// outputs: 1
// timeout: 0
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
msg.payload = [
    {
        measurement: "boiler",
        timestamp: new Date(),
        fields: {
            tempDHW_Flow: msg.payload.tempDHW_Flow,
            tempDHW_Return: msg.payload.tempDHW_Return,
            tempCH_Flow: msg.payload.tempCH_Flow,
            tempCH_Return: msg.payload.tempCH_Return,
            presBoiler: msg.payload.presBoiler,
            leakBoiler: msg.payload.leakBoiler
         },
        tags:{
            location:"garage",
            /*sensor: "board 1"*/
        }
    }
];
return msg;