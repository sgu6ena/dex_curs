/*
Примените функцию к аргументам
важность: 5
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

Например:

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2
Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
 */
const applyAll = (fn,...args) => {
    return fn.apply(this, args)
}
const sum = (...args) => {
    console.log('как есть', args);
    console.log('распространяя',...args);
    return args.reduce((a, b) => a + b, 0)
}
const max = (...args) => {
    return Math.max(...args);
}

const multi = (...args) => {
    return args.reduce((a, b) => a * b, 1)
}

console.log(applyAll(sum, 2, 3, 4, 5, 6, 7));
console.log(applyAll(max, 9, 3, 4, 5, 6, 7));
console.log(applyAll(sum, 2, 3, 2))
console.log(applyAll(multi, 2, 3, 2))