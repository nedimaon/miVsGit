function getChanges(obj1, obj2) {
  const changes = {}; // Создаем третий объект

  for (const key in obj1) {
    // Проверяем, является ли свойство собственным свойством объекта
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      // Если ключ есть в обоих объектах, но значения разные
      if (obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
        changes[key] = obj1[key]; // Сохраняем изменение из obj1
      }
      // Если ключ есть только в obj1, но отсутствует в obj2 (считаем это изменением)
      else if (!obj2.hasOwnProperty(key)) {
        changes[key] = obj1[key];
      }
    }
  }
  return changes;
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 5, d: 4 };

const changedProperties = getChanges(objectA, objectB);
console.log(changedProperties); // Вывод: { b: 2, c: 3 }