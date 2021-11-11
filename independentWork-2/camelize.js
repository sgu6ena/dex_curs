/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву. */
camelize = (str) => {
    return str.split('-').slice(0, 1) +
        str.split('-').slice(1)
            .map(item => (item.slice(0, 1).toUpperCase() + item.slice(1))).join('');
}

console.log(camelize('my-short-string'));