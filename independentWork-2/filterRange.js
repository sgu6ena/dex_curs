/*  Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный. */

filterRange = (arr, a, b) => {
    return arr.slice(a,b);
}
let arr = [1,2,3,4,5,6,7];
console.log(filterRange(arr, 3, 5));
console.log(arr);
