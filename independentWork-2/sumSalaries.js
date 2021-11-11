/* Сумма свойств объекта

Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert( sumSalaries(salaries) ); // 650 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = Object.keys(salaries).reduce((total, item) => total += salaries[item], 0);

const sumSalaries = obj => {
    let result = 0;
    for (let value of Object.values(obj)) {
        result += value;
    }
    return result;
}
console.log(sumSalaries(salaries));