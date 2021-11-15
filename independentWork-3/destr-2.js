/* Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
    P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    let [name, val] = Object.entries(salaries)[0]||[] ;
    for (const [key, value] of Object.entries(salaries)) {
        if (value > val) [val,name]=[value,key]
    }
    return name||null
}

console.log(topSalary(salaries));