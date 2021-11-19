/*Декоратор-шпион
важность: 5
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.*/

let worker = {
    slow(...args) {
        console.log(`Called with [${args}]`);
        return args.reduce((a, b) => a + b, 0);
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return Object.values(args);
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)
console.log(worker.slow(3, 5, 7)); // работает
console.log("Again " + worker.slow(3, 5, 7)); // аналогично (из кеша)
console.log(worker.slow(3, 5, 7, 12, 27, 25, 63)); // работает
console.log("Again " + worker.slow(3, 5, 7, 12, 27, 25, 63)); // аналогично (из кеша)