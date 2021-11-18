/*Можно ли "перевыполнить" промис?
Что выведет код ниже?*/

let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);
console.log('Будет выведено 1 - так как промис выполняет только один resolve или reject');


