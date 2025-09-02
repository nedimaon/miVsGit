// Определяем массив значений
var values = [1, 2, 3];
if (typeof context.index === 'undefined') {
context.index = 0;
}
msg.payload = values[context.index];
context.index = (context.index + 1) % values.length; 
return msg;