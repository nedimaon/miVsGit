var jsonData = msg.payload;
let newFlattenedData = {};
try {
    var unitName = jsonData.System?.["Unit Name"];
    var unitNumber = jsonData.System?.["Unit Number"];
    var uptime = jsonData.System?.["Uptime"];
    var ip = jsonData.WiFi?.["IP Address"];
    if (unitName !== undefined) {
        newFlattenedData['Name'] = unitName;
    }
    // Сохраняем UnitNumber и Uptime
    if (unitNumber !== undefined) {
        newFlattenedData[`UnitNumber`] = unitNumber;
    }
    if (uptime !== undefined) {
        newFlattenedData[`Uptime`] = uptime;
    }
newFlattenedData[`IP`] = ip;
newFlattenedData[`Статус`] = 'On';
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
 global.set(unitName, newFlattenedData);
      msg.payload = {
        status: `Данные успешно обработаны и сохранены в глобальную переменную '${unitName}' (обновлено при изменении).`,
        globalVariableName: unitName,
        dataProcessed: newFlattenedData
    };
    return msg;
} catch (error) {
    node.error(`Ошибка при обработке JSON: ${error.message}`, msg);
     newFlattenedData['Статус'] = 'Off';
  }