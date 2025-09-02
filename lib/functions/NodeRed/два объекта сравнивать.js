// Создаем два объекта, которые будем сравнивать.
const objectA = flow.get("iXa","memoryOnly");
const objectB = flow.get("iXata","memoryOnly");
const changes = {};
// Итерируемся по ключам первого объекта (objectA).
for (const key in objectA) {
  if (Object.prototype.hasOwnProperty.call(objectA, key)) {
    if (Object.prototype.hasOwnProperty.call(objectB, key)) {
      if (objectA[key] !== objectB[key]) {
        changes[key] = objectA[key];
      }
    } else {
      changes[key] = objectA[key];
    }
  }
}
msg.payload = changes;
global.set('miXata', changes, 'storeInFile');
flow.set("iXata", changes, "memoryOnly");
return msg;
