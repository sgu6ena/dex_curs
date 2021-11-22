class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        // this.name = name; - неверно
        /* в классах-потомках конструктор обязан вызывать super(...), и (!) делать это перед использованием this. */
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);