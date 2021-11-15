/* Есть функция sum, которая суммирует все элементы массива:

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
  /* ваш код */
/*}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.

    P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи. */

console.log(sumArgs.call([1, 2, 3])); // 6 (=1+2+3)

function sumArgs() {
    console.log(this);
    return this.reduce((total, item) => total += item, 0)
}
