/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.  */

function Calculator() {
    this.calculate = (str) => {
        this.arg = str.trim().split(' ');
        if (this.arg.length === 3) {
            console.log(this.arg);
            if (!isNaN(+this.arg[0]) && !isNaN(+this.arg[2])) {
                return this[this.arg[1]](+this.arg[0], +this.arg[2]);
            } else {
                console.warn(`Неверные аргументы: ${str} `)
                return null;
            }
        } else {
            console.warn('Неправильное количество аргументов')
            return null;
        }
    }
    this.addMethod = (operand, callback) => {
        this[operand] = callback;
        return this[operand]();
    }
}

let calc = new Calculator;
calc.addMethod("-", (a, b) => a - b);
calc.addMethod("+", (a, b) => a + b);

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("ф + и"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8