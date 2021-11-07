/* Что выведет этот скрипт? */
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); //  hello name
alert(`hello ${name}`); // hello ilya


/* Выведется ли alert? */
if ("0") {
    alert('Привет');
}
// да, потому строка не пустая, == true


/* * Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
   Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» * */

const answer = prompt('Какое «официальное» название JavaScript?');
if (answer == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
}

//или

const officialName = () => prompt('Какое «официальное» название JavaScript?') == 'ECMAScript' ? 'Верно!' : 'Не знаете? ECMAScript!';
alert(officialName());

//или

function jsName(string) {
    if (string.toLowerCase === 'ECMAScript'.toLowerCase) return 'Верно!'
    else return 'Не знаете? ECMAScript!'
}

/* *
Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. * */

const num = prompt('введите число');
if (num > 0) {
    alert('1');
} else if (num == 0) {
    alert('0');
} else {
    alert('-1');
}


/*
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
Перепишите 'if..else' в '?'
*/


result = a + b < 4 ? 'Мало' : 'Много';

/* *
Перепишите if..else с использованием нескольких операторов '?'.
let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = ;
} else if () {
  message = 'Нет логина';
} else {
  message = '';
}
* */

let login = prompt();
message = login == 'Сотрудник' ? 'привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' : '';


//* Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.


const summ = () => {
    const num1 = prompt('Введите первое число');
    const num2 = prompt('Введите второе число');
    return +num1 + +num2;
}

//*   Как правильно округлить 6.35? 

const round = num => Math.round(+num * 10) / 10;
round(6.35);

//* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//* Функция должна возвращать числовое значение.
//* Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. 
const readNumber = () => {
    let string = 'x';
    while (isNaN(string)) {
        string = prompt('Введите число');
    }
    return string;
}

//* Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). 

const random = (min, max) => min + Math.random() * (max - min);

//* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно). 

const randomInteger = (min, max) => Math.round(min + Math.random() * (max - min));

//* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

const ucFirst = str => str.slice(0, 1).toUpperCase() + str.slice(1);

//*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = str => str.includes('viagra') || str.includes('XXX');

//* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//*Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. 

const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str;

//* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//* Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его. 

const extractCurrencyValue = str => +str.slice(1);

//* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//*Для вывода используйте alert 

alert(new Date(2012, 01, 12, 3, 12))

//* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */

const getWeekDay = date => ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',][date.getDay()];

//* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

const getLocalDay = date => date.getDay() == 0 ? 7 : date.getDay();

//* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date. */

const getDateAgo = (date, days) => new Date(+date - days * 86400000);

/* Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11. */


const getLastDayOfMonth = (year, month) => getDateAgo(new Date(year, month + 1), 1).getDate();

/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня. */
const getSecondsToday = () => {
    const date = new Date();
    return date.getSeconds() + date.getHours() * 60 * 60 + date.getMinutes() * 60;
}


//* * Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты. * * * */

const getSecondsToTomorrow = () => 24 * 60 * 60 - getSecondsToday();

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
 */

const formatDate = (date) => {
    const dateNow = new Date();
    let message = '';
    let seconds = (dateNow - date) / 1000;
    switch (true) {
        case (seconds < 1):
            message = 'только что';
            break;
        case (seconds > 1 && seconds < 60):
            message = `${Math.round(seconds)} сек. назад`;
            break;
        case (seconds >= 60 && seconds < 60 * 60):
            message = `${Math.round(seconds / 60)} мин. назад`;
            break;
        case (seconds >= 60 * 60):
            message = date.toLocaleString("ru",
                {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            break;
    }

    return message;
}


//* Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

//* Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;
let x = 1 + (a *= 2); // a=4, x=5

//* Какой результат будет у выражений ниже?

"" + 1 + 0  // 10
"" - 1 + 0 //-1
true + false // 1
6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // infinity
"  -9  " + 5 // '  -9  5'
"  -9  " - 5 // -13
null + 1 // +1
undefined + 1 //+1
" \t \n" - 2 //-2

//* Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

//* Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

//* В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
alert(+a + +b);


//* Что выведет код ниже?

alert(null || 2 || undefined); // выведет 2 - первое истиное

// Что выведет код ниже?

alert(alert(1) || 2 || alert(3)); //1 2

//* Что выведет код ниже?

alert(alert(1) || 2 || alert(3));  //null

alert(null || 2 && 3 || 4); // 3

//* Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

if (age >= 14 && age <= 90) ;

//* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

if (age < 14 || age > 90) ;
if (!(age < 14 || age > 90)) ;

//* Какие из перечисленных ниже alert выполнятся?

if (-1 || 0) alert('first'); //first
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third'); //third

/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено». */

let login = prompt('Введите логин');
let password = '';

if (!login) {
    alert('Отменено');
} else if (login === 'Админ') {
    password = prompt('Введите пароль');
    if (!password) {
        alert('Отменено');
    } else if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }
} else {
    alert('Я вас не знаю');
}
