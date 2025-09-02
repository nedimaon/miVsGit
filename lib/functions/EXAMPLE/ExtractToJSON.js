// name: ExtractToJSON
// outputs: 1
// timeout: 
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
msg.payload = msg.payload.split("\n");
msg.payload = msg.payload.reduce((acc, str) => {
    let parts = str.split(/\.|=/);
    if(parts.length <= 4){
        acc[parts[3]-1] = {[parts[2]]:Number(parts[3]), [parts[0]]: Number(parts[1])};
    }else{
        acc[parts[3]-1][parts[4]] = isNaN(parseFloat(parts[5])) ? parts[5] : parseFloat(parts[5]);
    }
    return acc;
},[])
return msg;