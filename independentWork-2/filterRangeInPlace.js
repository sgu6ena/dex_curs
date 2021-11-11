/* Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать. */

const filterRangeInPlace = (arr, a, b) => {
    arr.splice(b, arr.length);
    arr.splice(0, a + 1);
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
filterRangeInPlace(arr, 5, 9);
console.log(arr);
