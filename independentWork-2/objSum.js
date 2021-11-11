/*
* Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = Object.keys(salaries).reduce((total, item) => total += salaries[item], 0);
console.log(sum);