/*
* Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */
const multiplyNumeric = obj => {
    for (let key in obj){
        !isNaN(obj[key]) ? obj[key]=obj[key]*2 :'';
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.dir(menu);

multiplyNumeric(menu);


console.dir(menu);