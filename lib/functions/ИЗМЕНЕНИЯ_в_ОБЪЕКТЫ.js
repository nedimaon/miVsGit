// Создаем два объекта, которые будем сравнивать.
const objectA = flow.get('TT');
const objectB = msg.payload;

// Создаем пустой объект, в котором будем хранить изменения.
const changes = {};

// Итерируемся по ключам первого объекта (objectA).
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
msg.payload = changes;
flow.set('TEMA', changes);
return [msg];
