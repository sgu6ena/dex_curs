/* Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

const isEmpty = obj => Object.keys(obj).length > 0 ? false : true;

let schedule = {};

console.log(schedule, isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(schedule, isEmpty(schedule)); // false */