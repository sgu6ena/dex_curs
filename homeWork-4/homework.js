//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, fn) => {
    let count = 0;
    return () => {
        count++;
        console.log(name, count);
        return fn;
    }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, fn) => {
    return function (...args) {
        this.fn = fn;
        console.log(` параметры: ${args} \n результат:${this.fn(args)} \n название:${name}`);
        return this.fn;
    }
};
//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (fn) => {
    return function (...args) {
        if  (args.length>1){
            return curry(...args.slice(1));
        }
        else
            return fn.bind(this, args);
    }
};

// const funcСurryingArgs = (...rest)=> {
//     if (rest.length >= count)
//         return rest.reduce((total, current) => total + current, 0);
//     else
//         return (...rest2) => funcСurryingArgs(...rest.concat(rest2));
// }