// Объект А: новые значения с разными пустыми полями.
const objectA = msg.payload;
// Это значение будет проигнорировано

// Объект Б: предыдущие значения.
const objectB = flow.get("iXata1","memoryOnly");



// Объект В: "база данных", которую нужно обновить.
const objectC = flow.get("iXat","memoryOnly");



// Проходимся по всем свойствам в объекте А.
for (const key in objectA) {
  if (Object.prototype.hasOwnProperty.call(objectA, key)) {
    const newValue = objectA[key];
    const oldValue = objectB[key];

    // Условие для игнорирования пустых значений.
    const isValueEmpty =
      newValue === null ||
      newValue === undefined ||
      newValue === '' ||
      (Array.isArray(newValue) && newValue.length === 0) ||
      (typeof newValue === 'object' && newValue !== null && Object.keys(newValue).length === 0);

    if (!isValueEmpty) {
      // Если значение не пустое, продолжаем сравнение.
      if (newValue !== oldValue) {
        objectB[key] = newValue;
        objectC[key] = newValue;
        console.log(`\nОбновлено свойство '${key}' с новым значением: ${newValue}`);
      }
    } else {
      console.log(`\nПроигнорировано свойство '${key}' из-за пустого значения.`);
    }
  }
}

console.log('\nФинальное состояние объектов:');
console.log('Объект А:', objectA);
console.log('Объект Б:', objectB);
console.log('Объект В:', objectC);