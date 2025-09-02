var jsonData = msg.payload;
let newFlattenedData = {};
try {
    var unitName = jsonData.System?.["Unit Name"];
    var unitNumber = jsonData.System?.["Unit Number"];
    var ip = jsonData.WiFi?.["IP Address"];
    // Сохраняем UnitNumber и Uptime
    if (unitNumber !== undefined) {
        newFlattenedData[`UnitNumber`] = unitNumber;}
         newFlattenedData[`UnitName`] = unitName;
newFlattenedData[`IP`] = ip;
    // Обработка данных из секции Sensors
    if (jsonData.Sensors && Array.isArray(jsonData.Sensors)) {
        jsonData.Sensors.forEach(sensor => {
            var taskName = sensor.TaskName !== undefined && sensor.TaskName !== null ? String(sensor.TaskName) : 'UnnamedTask'; 
                        if (sensor.TaskValues && Array.isArray(sensor.TaskValues)) {
                sensor.TaskValues.forEach(taskValue => {
                    var valueName = taskValue.Name !== undefined && taskValue.Name !== null ? String(taskValue.Name) : 'UnnamedValue';
                    var value = taskValue.Value;   
                    var key = `${taskName}_${valueName}`;
                    newFlattenedData[key] = value;
                });
            }
        });
    }
    const objectA = newFlattenedData;
const objectB = flow.get(unitName,"storeInFile");
const changes = {};
for (const key in objectA) {
  // Проверяем, что ключ является собственным свойством объекта, а не унаследованным.
  // Это хорошая практика, чтобы избежать нежелательных результатов.
  if (Object.prototype.hasOwnProperty.call(objectA, key)) {
    // Сначала проверяем, есть ли ключ в objectB.
    if (Object.prototype.hasOwnProperty.call(objectB, key)) {
      // Если ключ есть в обоих объектах, но значения разные, это "изменение".
      if (objectA[key] !== objectB[key]) {
        changes[key] = objectA[key];
      }
    } else {
      // Если ключ есть в objectA, но отсутствует в objectB, это тоже "изменение" (удаление).
      changes[key] = objectA[key];
    }
  }
}
 var nov;
if (Object.keys(changes).length === 0){
    nov = "0";
}else{
    flow.set(unitName,newFlattenedData,"storeInFile");
var kkk = [];
kkk = (Object.keys(changes));
 for (const element of kkk){
       var ddd = changes[element];
     global.set('iXata.' + unitName + '.' + element,ddd,"storeInFile");
          global.set('iXata1.' + unitName + '.' + element,ddd,"storeInFile");
       nov = element;    
 }
}

var pay1 = {
        status: `Данные '${unitName}' (обновлено при изменении).`,
        globalVariableName: unitName,
        dataProcessed: newFlattenedData,
        novoe: changes,
        value:  ddd,
    };
 msg.topic = nov;
 msg.payload = pay1;
    return [msg];
} catch (error) {
    node.error(`Ошибка при обработке JSON: ${error.message}`, msg);
     newFlattenedData['Статус'] = 'Off';
     global.set('ESP.'${unitName}'.state',0,"storeInFile");
  }