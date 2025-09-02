// Создаем два объекта, которые будем сравнивать.
const objectA = {
  id: 1,
  user: {
    name: 'Иван',
    age: 30,
    city: 'Москва'
  },
  status: 'active'
};

const objectB = {
  id: 1,
  user: {
    name: 'Иван',
    age: 35,
    city: 'Петербург'
  },
  status: 'active',
  extra: 'info'
};

// Создаем пустой объект для хранения изменений.
const changes = {};

// Используем рекурсивную функцию-выражение.
// Она не имеет имени и вызывается сразу.
(function compareAndFillChanges(obj1, obj2, changesObj) {
  // Проходимся по всем ключам первого объекта.
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      // Если оба значения являются объектами (и не null),
      // вызываем функцию рекурсивно для сравнения вложенных объектов.
      if (
        typeof value1 === 'object' &&
        value1 !== null &&
        typeof value2 === 'object' &&
        value2 !== null
      ) {
        // Создаем вложенный объект для изменений.
        changesObj[key] = {};
        // Вызываем рекурсию.
        compareAndFillChanges(value1, value2, changesObj[key]);
        // Если после рекурсивного вызова вложенный объект пуст, удаляем его.
        if (Object.keys(changesObj[key]).length === 0) {
          delete changesObj[key];
        }
      } else if (value1 !== value2) {
        // Если значения не равны, записываем изменение.
        changesObj[key] = value1;
      }
    }
  }
})(objectA, objectB, changes); // Передаем объекты и пустой объект изменений.

console.log(changes);