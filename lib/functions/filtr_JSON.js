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
  const objectB = flow.get(unitName, "storeInFile");
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
  flow.set(unitName, newFlattenedData, "storeInFile");
  var nov;
  var kkk = [];
  var ddd;
  if (Object.keys(changes).length === 0) {
    nov = 0;
  } else {
    kkk = Object.keys(changes);
    for (const element of kkk) {
      ddd = changes[element];
      flow.set(
        "ixat." + unitName + "." + element,
        changes[element],
        "storeInFile"
      );
      flow.set(unitName + "a", mass, "storeInFile");
    }

    if (typeof context.index === "undefined") {
      context.index = 0;
    }
    var mass = kkk[context.index];
    var topp = changes[mass];
    context.index = (context.index + 1) % kkk.length;
    flow.set("ixa." + unitName + "." + element, topp, "storeInFile");
  }
  msg.topic = topp;
  msg.payload = {
    status: `Данные успешно обработаны и сохранены в глобальную переменную '${unitName}' (обновлено при изменении).`,
    globalVariableName: unitName,
    dataProcessed: newFlattenedData,
    novoe: changes,
    starot: ddd,
    sss: mass,
  };

  return msg;
} catch (error) {
  node.error(`Ошибка при обработке JSON: ${error.message}`, msg);
  newFlattenedData["Статус"] = "Off";
}
