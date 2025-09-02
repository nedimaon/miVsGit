Нативные методы JavaScript
-------------------------
`string.js` импортирует все нативные методы JavaScript. Это сделано для удобства. Единственное отличие заключается в том, что импортированные методы возвращают объекты `string.js` вместо нативных строк JavaScript. Единственным исключением является метод `charAt(index)`. Это связано с тем, что `charAt()` возвращает только строку единичной длины. Обычно это делается для сравнения, и объект `string.js` здесь практически не имеет значения.
Все нативные методы поддерживают цепочку с методами `string.js`.
**Пример:**
```javascript
var S = require('string');
var phrase = S('JavaScript is the best scripting language ever!');
var sub = 'best scripting';
var pos = phrase.indexOf(sub);
console.log(phrase.substr(pos, sub.length).truncate(8)); //best...
```
Методы
-------
Подробнее см. [тестовый файл][тестовый файл].
Я использую ту же номенклатуру методов, что и в Objective-C. **+** означает `статический` или `классовый` метод. **-** означает `нестатический` или `экземплярный` метод.
### - constructor(nativeJsString) ###
Этот конструктор создаёт новый объект `string.js`. Параметр может быть любым. Метод `toString()` будет вызван для любых объектов. Некоторые нативные объекты используются в некоторых функциях, например `toCSV()`.
Пример:
```javascript
S('hello').s //"hello"
S(['a,b']).s //"a,b"
S({hi: 'jp'}).s //"[object Object]""
```
### - between(left, right)
Извлекает строку между строками `left` и `right`.
Пример:
```javascript
S('<a>foo</a>').between('<a>', '</a>').s // => 'foo'
S('<a>foo</a></a>').between('<a>', '</a>').s // => 'foo'
S('<a><a>foo</a></a>').between('<a>', '</a>').s // => '<a>foo'
S('<a>foo').between('<a>', '</a>').s // => ''
S('Некоторые строки } очень {странные}, не находите?').between('{', '}').s // => 'странные'
S('Это тестовая строка').between('test').s // => ' string'
S('Это тестовая строка').between('', 'test').s // => 'Это '
```
### - camelize()
Удаляет все подчёркивания и тире и преобразует строку в верблюжий регистр.
Пример:
```javascript
S('data_rate').camelize().s; //'dataRate'
S('background-color').camelize().s; //'backgroundColor'
S('-moz-something').camelize().s; //'MozSomething'
S('_car_speed_').camelize().s; //'CarSpeed'
S('yes_we_can').camelize().s; //'yesWeCan'
```
### - capitalize() ###
Делает первый символ строки заглавным.
Пример:
```javascript
S('jon').capitalize().s; //'Jon'
S('JP').capitalize().s; //'Jp'
```
### - chompLeft(prefix)
Удаляет `prefix` из начала строки.
Пример:
```javascript
S('foobar').chompLeft('foo').s; //'bar'
S('foobar').chompLeft('bar').s; //'foobar'
```
### - chompRight(suffix)
Удаляет `suffix` из конца строки.
Пример:
```javascript
S('foobar').chompRight('bar').s; //'foo'
S('foobar').chompRight('foo').s; //'foobar'
```
### - collableWhitespace() ###
Преобразует все смежные пробелы в один.
Пример:
```javascript
var str = S(' Строковые библиотеки — это \n\n\t весело\n! ').collapseWhitespace().s; //'Строковые библиотеки — это весело !'
```
### - contains(ss) ###
Возвращает true, если строка содержит `ss`.
Псевдоним: `include()`
Пример:
```javascript
S('JavaScript — один из лучших языков!').contains('one'); //true
```
### - count(substring) ###
Возвращает количество вхождений подстроки.
Пример:
```javascript
S('JP любит программировать. JP не играет в НБА.').count("JP")// 2
S('Не существует.').count("Летающий Макаронный Монстр") //0
S('Не существует.').count("Снежный Человек") //0
S('JavaScript — это весело, поэтому Node.js — это весело').count("fun") //2
S('funfunfun').count("fun") //3
```
### - dasherize() ###
Возвращает строку, преобразованную в "верблюжий" регистр, в строку, разделенную дефисами.
Примеры:
```javascript
S('dataRate').dasherize().s; //'data-rate'
S('CarSpeed').dasherize().s; //'-car-speed'
S('yesWeCan').dasherize().s; //'yes-we-can'
S('backgroundColor').dasherize().s; //'background-color'
```
### - decodeHTMLEntities() ###
Декодирует HTML-сущности в их строковое представление.
```javascript
S('Ken Thompson & Dennis Ritchie').decodeHTMLEntities().s; //'Ken Томпсон и Деннис Ритчи
S('3 < 4').decodeHTMLEntities().s; //'3 < 4'
```
### - endsWith(ss) ###
Возвращает true, если строка заканчивается на `ss`.
Пример:
```javascript
S("hello jon").endsWith('jon'); //true
```
### - escapeHTML() ###
Экранирует HTML.
Пример:
```javascript
S('<div>hi</div>').escapeHTML().s; //&lt;div&gt;hi&lt;/div&gt;
```
### + extendPrototype() ###
Изменяет `String.prototype`, добавляя все методы, найденные в string.js.
Пример:
```javascript
S.extendPrototype();
```
### - ensureLeft(prefix)
Гарантирует, что строка начинается с `prefix`.
Пример:
```javascript
S('subdir').ensureLeft('/').s; //'/subdir'
S('/subdir').ensureLeft('/').s; //'/subdir'
```
### - ensureRight(suffix)
Гарантирует, что строка заканчивается на `suffix`.
Пример:
```javascript
S('dir').ensureRight('/').s; //'dir/'
S('dir/').ensureRight('/').s; //'dir/'
```
### - humanize() ###
Преобразует входные данныев понятную человеку форму.
Пример:
```javascript
S('the_humanize_string_method').humanize().s //'Метод гуманизации строки'
S('ThehumanizeStringMethod').humanize().s //'Метод гуманизации строки'
S('thehumanize_id string method_id').humanize().s //'Метод гуманизации строки'
S('thehumanize_id string method_id').humanize().s //'Метод гуманизации строки'
S('thehumanize string method ').humanize().s //'Метод гуманизации строки'
S('capitalize dash-CamelCase_underscore trim ').humanize().s //'Заглавные тире camel case underscore trim'
```
### - include(ss) ###
Возвращает true, если строка содержит `ss`.
Псевдоним: `contains()`
Пример:
```javascript
S('JavaScript — один из лучших языков!').include('one'); //true
```
### - isAlpha() ###
Возвращает true, если строка содержит только буквы.
Пример:
```javascript
S("afaf").isAlpha(); //true
S('fdafaf3').isAlpha(); //false
S('dfdf--dfd').isAlpha(); //false
```
### - isAlphaNumeric() ###
Возвращает true, если строка содержит только буквы и цифры.
Пример:
```javascript
S("afaf35353afaf").isAlphaNumeric(); //true
S("FFFF99fff").isAlphaNumeric(); //true
S("99").isAlphaNumeric(); //true
S("afff").isAlphaNumeric(); //true
S("Infinity").isAlphaNumeric(); //true
S("-Infinity").isAlphaNumeric(); //false
S("-33").isAlphaNumeric(); //false
S("aaff..").isAlphaNumeric(); //false
```
### - isEmpty() ###
Возвращает true, если строка состоит только из пробелов или имеет значение `null`/`undefined`.
Пример:
```javascript
S(' ').isEmpty(); //true
S('\t\t\t ').isEmpty(); //true
S('\n\n ').isEmpty(); //true
S('helo').isEmpty(); //false
S(null).isEmpty(); //true
S(undefined).isEmpty(); //true
```
### - isLower() ###
Возвращает true, если символ или строка в нижнем регистре.
Пример:
```javascript
S('a').isLower(); //true
S('z').isLower(); //true
S('B').isLower(); //false
S('hijp').isLower(); //true
S('hi jp').isLower(); //false
S('HelLO').isLower(); //false
```
### - isNumeric() ###
Возвращает true, если строка содержит только цифры.
Пример:
```javascript
S("3").isNumeric(); //true
S("34.22").isNumeric(); //false
S("-22.33").isNumeric(); //false
S("NaN").isNumeric(); //false
S("Infinity").isNumeric(); //false
S("-Infinity").isNumeric(); //false
S("JP").isNumeric(); //false
S("-5").isNumeric(); //false
S("000992424242").isNumeric(); //true
```
### - isUpper() ###
Возвращает true, если символ или строка в верхнем регистре.
Пример:
```javascript
S('a').isUpper() //false
S('z').isUpper() //false
S('B').isUpper() //true
S('HIJP').isUpper() //true
S('HI JP').isUpper() //false
S('HelLO').isUpper() //true
```
### - latinise() ###
Удаляет диакритические знаки у латинских символов.
```javascript
S('crème brûlée').latinise().s // 'creme brulee'
```
### - left(n) ###
Возвращает подстроку, обозначенную `n` положительными крайними слева символами.
Пример:
```javascript
S('Меня зовут JP').left(2).s; //'Мой'
S('Привет').left(0).s; //''
S('Меня зовут JP').left(-2).s; //'JP', то же, что и right(2)
```
### - length ###
Свойство, возвращающее длину строкового объекта.
Пример:
```javascript
S('привет').length; //2
```
### - lines() ####
Возвращает массив строк. Совместимо с различными платформами.
Пример:
```javascript
var stuff = "Меня зовут JP\nJavaScript — мой любимый язык\r\nКакой ваш любимый язык?"
var lines = S(stuff).lines()
console.dir(lines)
/*
[ 'Меня зовут JP',
'JavaScript — мой любимый язык',
'Какой ваш любимый язык?' ]
*/
```
### - pad(len, [char])
Дополняет строку по центру указанным символом. `char` может быть строкой или числом, по умолчанию — пробел.
Пример:
```javascript
S('hello').pad(5).s //'hello'
S('hello').pad(10).s //' hello '
S('hey').pad(7).s //' hey '
S('hey').pad(5).s //' hey '
S('hey').pad(4).s //' hey'
S('hey').pad(7, '-').s//'--hey--'
```
### - padLeft(len, [char])
Дополняет строку слева.
Пример:
```javascript
S('hello').padLeft(5).s //'hello'
S('hello').padLeft(10).s //' hello'
S('hello').padLeft(7).s //' hello'
S('hello').padLeft(6).s //' hello'
S('hello').padLeft(10, '.').s //'.....hello'
```
### - padRight(len, [char])
Дополняет строку справа.
Пример:
```javascript
S('hello').padRight(5).s //'hello'
S('hello').padRight(10).s //'hello '
S('hello').padRight(7).s //'hello '
S('hello').padRight(6).s //'hello '
S('hello').padRight(10, '.').s //'hello.....'
```
### - parseCSV() ###
Преобразует строку CSV в массив.
**Аргументы:**
- `delimiter`: Символ, разделяющий поля. По умолчанию: `,`
- `qualifier`: Символ, заключающий поля в рамки. По умолчанию: `"`
- `escape`: Символ, представляющий экранированный символ. По умолчанию: `\`
- `lineDelimiter`: Символ, представляющий конец строки. При передаче lineDelimiter результатом будет многомерный массив. По умолчанию: `undefined`
Пример:
```javascript
S("'a','b','c'").parseCSV(',', "'") //['a', 'b', 'c'])
S('"a","b","c"').parseCSV() // ['a', 'b', 'c'])
S('a,b,c').parseCSV(',', null) //['a', 'b', 'c'])
S("'a,','b','c'").parseCSV(',', "'") //['a,', 'b', 'c'])
S('"a","b",4,"c"').parseCSV(',', null) //['"a"', '"b"', '4', '"c"'])
S('"a","b","4","c"').parseCSV() //['a', 'b', '4', 'c'])
S('"a","b", "4","c"').parseCSV() //['a', 'b', '4', 'c'])
S('"a","b", 4,"c"').parseCSV(",", null) //[ '"a"', '"b"', ' 4', '"c"' ])
S('"a","b\\"","d","c"').parseCSV() //['a', 'b"', 'd', 'c'])
S('"a","b\\"","d","c"').parseCSV() //['a', 'b"', 'd', 'c'])
S('"a\na","b","c"\n"a", """b\nb", "a"').parseCSV(',', '"', '"', '\n')) // [ [ 'a\na', 'b', 'c' ], [ 'a', '"b\nb', 'a' ] ]
```
### - repeat(n) ###
Возвращает строку, повторенную `n` раз.
Псевдоним: `times()`
Пример:
```javascript
S(' ').repeat(5).s; //' '
S('*').repeat(3).s; //'***'
```
### - replaceAll(ss, newstr) ###
Вернуть новую строку, в которой все вхождения `ss` заменены на `newstr`.
Пример:
```javascript
S(' работает ли ЭТО? ').replaceAll(' ', '_').s; //'_работает_ЭТО?_'
S('Да, работает!').replaceAll(' ', '').s; //'Да, работает!'
```
### + restorePrototype() ###
Восстановить исходный прототип строки. Обычно используется вместе с `extendPrototype()`.
Пример:
```javascript
S.restorePrototype();
```
### - right(n) ###
Возвращает подстроку, обозначенную `n` положительными крайними правыми символами.
Пример:
```javascript
S('Я СОЙДУ С УМА').right(2).s; //'ЗЫ'
S('Работает? ').right(4).s; //'к? '
S('Привет').right(0).s; //''
S('Меня зовут JP').right(-2).s; //'Мой', то же, что и left(2)
```
### - s ###
Псевдоним: `toString()`
Инкапсулированное строковое представление объекта `S` в машинном коде.
Пример:
```javascript
S('Меня зовут JP.').capitalize().s; //Меня зовут JP.
var a = "Привет " + S('joe!'); //a = "Привет, Джо!"
S("Привет").toString() === S("Привет").s; //true
```
### - setValue(value) ###
Присваивает строке `value`.
```javascript
var myString = S('War');
myString.setValue('Peace').s; // 'Peace'
```
### - slugify() ###
Преобразует текст в корректный URL-адрес. Удаляет диакритические знаки из латинских символов.
```javascript
S('Глобальная термоядерная война').slugify().s // 'глобальная-термоядерная-война'
S('Крем-брюле').slugify().s // 'крем-брюле'
```
### - splitLeft(sep, [maxSplit = -1, [limit]]) ###
Возвращает массив строк, разделенных слева по `sep`. Выполняет не более `maxSplit` разбиений и преобразует результат в массив с не более чем `limit` элементами.
Пример:
```javascript
S('Мы построили этот город').splitLeft(' '); // ['Мы', 'построили', 'этот', 'город'];
S('Мы построили этот город').splitLeft(' ', 1); // ['Мы', 'построили этот город'];
S('О рок-н-ролле и прочей ерунде').splitLeft(' ', -1, 4); // ['О', 'Рок', 'Н', 'Ролл'];
S('О рок-н-ролле и прочей ерунде').splitLeft(' ', 5, -2); // ['и', 'прочая ерунда'];
```
### - splitRight(sep, [maxSplit = -1, [limit]]) ###
Возвращает массив строк, разделенных слева по `sep`. Выполняет не более `maxSplit` разбиений и преобразует результат в массив с не более чем `limit` элементов.
Пример:
```javascript
S('Это всё очень весело').splitRight(' '); // ['Это', 'есть', 'всё', 'очень', 'весело'];
S('и я мог бы делать это вечно').splitRight(' ', 1); // ['и я мог бы делать это', 'вечно'];
S('но в конце концов ничто не имеет значения.').splitRight(' ', -1, 2); // ['конец', 'конец.'];
S('но в конце концов ничто не имеет значения.').splitRight(' ', 4, -2); // ['но ничто', 'не имеет значения'];
```
### - startingWith(prefix) ###
Возвращает true, если строка начинается с `prefix`.
Пример:
```javascript
S('JP — инженер-программист').startsWith('JP'); //true
S('хочет изменить мир').startsWith('политики'); //false
```
### - strip([string1],[string2],...) ###
Возвращает новую строку, из которой удалены все вхождения `[string1],[string2],...`.
Пример:
```javascript
S(' 1 2 3--__--4 5 6-7__8__9--0').strip(' ', '_', '-').s; //'1234567890'
S('можно ли также удалить слова?').strip('words', 'also', 'be').s; //'можно ли удалить слова?'
```
### - stripLeft([chars]) ###
Возвращает новую строку, в которой удалены все символы с начала строки (пробелы по умолчанию).
Пример:
```javascript
S(' hello ').stripLeft().s; //'hello '
S('abcz').stripLeft('a-z').s; //'bcz'
S('www.example.com').stripLeft('w.').s; //'example.com'
```
### - stripRight([chars]) ###
Возвращает новую строку, в которой удалены все символы с конца строки (пробелы по умолчанию).
Пример:
```javascript
S(' hello ').stripRight().s; //' привет'
S('abcz').stripRight('a-z').s; //'abc'
```
### - stripPunctuation()
Удаляет все знаки препинания.
Пример:
```javascript
S('My, st[ring] *full* of %punct)').stripPunctuation().s; //My string full of punct
```
### - stripTags([tag1],[tag2],...) ###
Удаляет все HTML-теги или теги, указанные в параметрах.
Пример:
```javascript
S('<p>просто <b>некоторый</b> текст</p>').stripTags().s //'просто какой-то текст'
S('<p>просто <b>некоторый</b> текст</p>').stripTags('p').s //'просто <b>некоторый</b> текст'
```
### - template(values, [open], [close])
Принимает строку и интерполирует значения. По умолчанию `{{` и `}}` для шаблонов, совместимых с Mustache. Однако вы можетеИзмените это значение по умолчанию, изменив `S.TMPL_OPEN` и `S.TMPL_CLOSE`.
Пример:
```js
var str = "Привет, {{name}}! Как ваши дела в году {{date-year}}?"
var values ​​= {name: 'JP', 'date-year': 2013}
console.log(S(str).template(values).s) //'Привет, JP! Как ваши дела в 2013 году?'
str = "Привет, #{name}! Как ваши дела в году #{date-year}?"
console.log(S(str).template(values, '#{', '}').s) //'Привет, JP! Как ваши дела в 2013 году?'
S.TMPL_OPEN = '{'
S.TMPL_CLOSE = '}'
str = "Привет, {name}! Как ваши дела в году {date-year}?"
console.log(S(str).template(values).s) //'Привет, JP! Как ваши дела в 2013 году?'
```
### - times(n) ###
Возвращает строку, повторяющуюся `n` раз.
Псевдоним: `repeat()`
Пример:
```javascript
S(' ').times(5).s //' '
S('*').times(3).s //'***'
```
### - titleCase() ###
Возвращает строку, в которой первая буква каждого слова заглавная, включая слова, написанные через дефис.
Пример:
```javascript
S('Like ice in the sunshine').titleCase().s // 'Like Ice In The Sunshine'
S('data_rate').titleCase().s // 'Data_Rate'
S('background-color').titleCase().s // 'Background-Color'
S('-moz-something').titleCase().s // '-Moz-Something'
S('_car_speed_').titleCase().s // '_Car_Speed_'
S('yes_we_can').titleCase().s // 'Yes_We_Can
S(' заглавные буквы тире-CamelCase_подчёркивание обрезка ').humanize().titleCase().s // 'Заглавные буквы тире CamelCase Подчёркивание обрезка'
```
### - toBoolean() / toBool()
Преобразует логическую строку истинности в логическое значение. То есть: `true`, `1`, `'true'`, `'on'` или `'yes'`.
Примечание для JavaScript: Вы можете легко преобразовать истинные значения в `логические`, добавив к ним префикс `!!`. Например:
`!!'hi' === true` или `!!'' === false` или `!!{} === true`.
Пример:
```javascript
S('true').toBoolean() //true
S('false').toBoolean() //false
S('hello').toBoolean() //false
S(true).toBoolean() //true
S('on').toBoolean() //true
S('yes').toBoolean() //true
S('TRUE').toBoolean() //true
S('TrUe').toBoolean() //true
S('YES').toBoolean() //true
S('ON').toBoolean() //true
S('').toBoolean() //false
S(undefined).toBoolean() //false
S('undefined').toBoolean() //false
S(null).toBoolean() //false
S(false).toBoolean() //false
S({}).toBoolean() //false
S(1).toBoolean() //true
S(-1).toBoolean() //false
S(0).toBoolean() //false
```
### - toCSV(options) ###
Преобразует массив или объект в строку CSV.
Можно передать два строковых аргумента или объект конфигурации.
**Строковые аргументы:**
- `delimiter`: Символ, разделяющий поля. По умолчанию: `,`
- `qualifier`: Символ, заключающий поля в рамки. По умолчанию: `"`
**Конфигурация объекта:**
- `delimiter`: Символ, разделяющий или ограничивающий поля. По умолчанию: `,`
- `qualifier`: Символ, заключающий поля в рамки. По умолчанию: `"`
- `escape`: Символ, экранирующий любые наклонные символы `qualifier`. По умолчанию: `\`, в JS это `\\`
- `encloseNumbers`: Обозначает числовые объекты символом `qualifier`. По умолчанию: `true`
- `keys`: Если входные данные не массив, а объект, то при значении true в строку CSV будут выведены ключи, в противном случае — значения объекта. По умолчанию: `false`.
Пример:
```javascript
S(['a', 'b', 'c']).toCSV().s //'"a","b","c"'
S(['a', 'b', 'c']).toCSV(':').s //'"a":"b":"c"'
S(['a', 'b', 'c']).toCSV(':', null).s //'a:b:c')
S(['a', 'b', 'c']).toCSV('*', "'").s //"'a'*'b'*'c'"
S(['a"', 'b', 4, 'c']).toCSV({разделитель: ',', квалификатор: '"', экранирование: '\\', encloseNumbers: false}).s //'"a\\"","b",4,"c"'
S({firstName: 'JP', lastName: 'Richardson'}).toCSV({keys: true}).s //'"firstName","lastName"'
S({firstName: 'JP', lastName: 'Richardson'}).toCSV().s //'"JP","Richardson"'
```
### - toFloat([precision]) ###
Возвращает значение с плавающей точкой, оборачивает parseFloat.
Пример:
```javascript
S('5').toFloat() // 5
S('5.3').toFloat() //5.3
S(5.3).toFloat() //5.3
S('-10').toFloat() //-10
S('55.3 adfafaf').toFloat() // 55.3
S('afff 44').toFloat() //NaN
S(3.45522222333232).toFloat(2) // 3.46
```
### - toInt() / toInteger() ###
Возвращает числовое значение в виде целого числа. Обертка для `parseInt()`. Также может анализировать шестнадцатеричные значения.
Пример:
```javascript
S('5').toInt(); //5
S('5.3').toInt(); //5;
S(5.3).toInt(); //5;
S('-10').toInt(); //-10
S('55 adfafaf').toInt(); //55
S('afff 44').toInt(); //NaN
S('0xff').toInt() //255
```
### - toString() ###
Псевдоним: `s`
Возвращает строковое представление объекта `S`. Использование не является обязательным. Однако движки JavaScript проверяют объект и отображают результат его функции `toString()`.
Пример:
```javascript
S('my name is JP.').capitalize().toString(); //My name is JP.
var a = "Hello " + S('joe!'); //a = "Hello joe!"
S("Hello").toString() === S("Hello").s; //true
```
### - trim() ###
Возвращает строку с удалёнными начальными и конечными пробелами. Возвращает к нативному `trim()`, если он существует.
Пример:
```javascript
S('hello ').trim().s; //'привет'
S('привет ').trim().s; //'привет'
S('\nпривет').trim().s; //'привет'
S('\nпривет\r\n').trim().s; //'hello'
S('\thello\t').trim().s; //'hello'
```
### - trimLeft() ###
Возвращает строку с удалёнными начальными и пробелами.
Пример:
```javascript
S(' How are you?').trimLeft().s; //'How are you?';
```
### - trimRight() ###
Возвращает строку с удалёнными конечными пробелами.
Пример:
```javascript
S(' How are you? ').trimRight().s; //'How are you?';
```
### - truncate(length, [chars]) ###
Обрезает строку с учётом расположения слов и количества символов.
Пример:
```javascript
S('это длинный текст').truncate(3).s //'...'
S('это длинный текст').truncate(7).s //'это...'
S('это длинный текст').truncate(11).s //'это...'
S('это длинный текст').truncate(12).s //'это...'
S('это длинный текст').truncate(11).s //'это...'
S('это длинный текст').truncate(14, ' читать далее').s //'это читать далее'
```
### - underscore()
Возвращает строку, преобразованную в camel-case, в строку, разделённую символами подчёркивания.
Пример:
```javascript
S('dataRate').underscore().s; //'data_rate'
S('CarSpeed').underscore().s; //'car_speed'
S('yesWeCan').underscore().s; //'yes_we_can'
```
### - unescapeHTML() ###
Удаляет экранирование HTML-кода.
Пример:
```javascript
S('&lt;div&gt;hi&lt;/div&gt;').unescapeHTML().s; //<div>hi</div>
```
### - wrapHTML() ###
wrapHTML помогает избежать объединения элемента со строкой.
Строка будет обёрнута HTML-элементом и его атрибутами.
Пример:
```javascript
S('Venkat').wrapHTML().s //<span>Venkat</span>
S('Venkat').wrapHTML('div').s //<div>Venkat</div>
S('Venkat').wrapHTML('div', {
"class": "левый маркер"
}).s //<div class="левый маркер">Venkat</div>
S('Venkat').wrapHTML('div', {
"id": "content",
"class": "левый маркер"
}).s // <div id="content" class="левый маркер">Venkat</div>
```