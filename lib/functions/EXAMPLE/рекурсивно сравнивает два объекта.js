// Функция getChanges рекурсивно сравнивает два объекта, включая вложенные.
function getChanges(obj1, obj2) {
  const changes = {};

  // Проходимся по всем ключам первого объекта.
  for (const key in obj1) {
    // Убеждаемся, что ключ принадлежит самому объекту.
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      // Проверяем, являются ли оба значения объектами (но не null).
      if (
        typeof value1 === 'object' &&
        value1 !== null &&
        typeof value2 === 'object' &&
        value2 !== null
      ) {
        // Если да, вызываем функцию getChanges рекурсивно.
        const nestedChanges = getChanges(value1, value2);

        // Если во вложенном объекте есть изменения, добавляем их.
        // Мы используем Object.keys(nestedChanges).length, чтобы проверить,
        // что nestedChanges не пуст.
        if (Object.keys(nestedChanges).length > 0) {
          changes[key] = nestedChanges;
        }
      } else if (value1 !== value2) {
        // Если значения — это не объекты (например, числа или строки)
        // и они не равны, записываем изменение.
        changes[key] = value1;
      }
    }
  }

  // Возвращаем объект со всеми найденными изменениями.
  return changes;
}

// Экспортируем функцию, чтобы её можно было использовать в других файлах.
module.exports = getChanges;