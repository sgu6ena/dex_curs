/* Что выведет этот скрипт? */
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); //  hello name
alert( `hello ${name}` ); // hello ilya


/* Выведется ли alert? */
if ("0") {
   alert( 'Привет' );
}
// да, потому строка не пустая, == true



/* * Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
   Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» * */

const answer = prompt('Какое «официальное» название JavaScript?');
if ( answer == 'ECMAScript' ){
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

//или

const officialName = () =>  prompt('Какое «официальное» название JavaScript?') ==  'ECMAScript' ? 'Верно!': 'Не знаете? ECMAScript!';
alert(officialName());

//или

function jsName (string) {
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
if ( num > 0 ){
  alert('1');
} else if ( num == 0 ) {
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
          login == '' ? 'Нет логина' : '' ;



/* 
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
 */

const summ = () => {
  const num1 = prompt('Введите первое число');
  const num2 = prompt('Введите второе число');
  return +num1 + +num2;
}

/* *  Как правильно округлить 6.35? * */

const round = num =>  Math.round(+num*10)/10;
round(6.35);

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */ 
const readNumber = () => {
  let string = 'x';
  while ( isNaN(string) ) {
    string = prompt('Введите число');
  }
  return string;
}

/* Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). */

const random = (min, max) => min + Math.random() * (max - min);

/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно). */

const randomInteger = (min, max) => Math.round(min + Math.random() * (max - min));

/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. */

const ucFirst = str =>  str.slice(0,1).toUpperCase() + str.slice(1);

/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.*/

const checkSpam = str => str.includes('viagra') || str.includes('XXX');

 /* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */

const truncate = (str, maxlength) => str.length > maxlength ? str.slice(0, maxlength-3) + '...' : str;

/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его. */

const extractCurrencyValue = str => + str.slice(1);

/* Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert */

alert( new  Date(2012, 01, 12, 3, 12) )

/* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */

const getWeekDay = date => ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ',][date.getDay()];

/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date. */

const getLocalDay = date => date.getDay()==0 ? 7 : date.getDay();

/* Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date. */

const getDateAgo = (date, days) => new Date(+date - days * 86400000);

/* Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). */


const getLastDayOfMonth = (year, month) =>  getDateAgo(new Date(year, month+1),1).getDate();

