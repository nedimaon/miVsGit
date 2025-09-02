var jsonData = msg.payload;
let newFlattenedData = {};
try {
  var unitName = jsonData.System?.["Unit Name"];
  var unitNumber = jsonData.System?.["Unit Number"];
  var ip = jsonData.WiFi?.["IP Address"];
  // Сохраняем UnitNumber и Uptime
  if (unitNumber !== undefined) {
    newFlattenedData[`UnitNumber`] = unitNumber;
  }
  newFlattenedData[`IP`] = ip;
  // Обработка данных из секции Sensors
  if (jsonData.Sensors && Array.isArray(jsonData.Sensors)) {
    jsonData.Sensors.forEach((sensor) => {
      var taskName =
        sensor.TaskName !== undefined && sensor.TaskName !== null
          ? String(sensor.TaskName)
          : "UnnamedTask";
      if (sensor.TaskValues && Array.isArray(sensor.TaskValues)) {
        sensor.TaskValues.forEach((taskValue) => {
          var valueName =
            taskValue.Name !== undefined && taskValue.Name !== null
              ? String(taskValue.Name)
              : "UnnamedValue";
          var value = taskValue.Value;
          var key = `${taskName}_${valueName}`;
          newFlattenedData[key] = value;
        });
      }
    });
  }
  // flow.set(unitName, newFlattenedData,"memoryOnly");

  const objectA = newFlattenedData;
  const objectB = flow.get(unitName, "memoryOnly");
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
  flow.set(unitName, newFlattenedData, "memoryOnly");
 
  return msg;
} catch (error) {
  node.error(`Ошибка при обработке JSON: ${error.message}`, msg);
  newFlattenedData["Статус"] = "Off";
}
