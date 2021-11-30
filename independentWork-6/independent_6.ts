interface Rect {
    readonly id: string // только для чтения
    color?: string //необязательный параметр
    size:{
        width: number
        height: number
    }
}

const rect1: Rect={
    id: '1234',
    size:{
        width:20,
        height:30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size:{
        width:10,
        height:5
    }
}

rect2.color ='black'

//дженерики

function  myFunc<T>(firstParam: T): T{
    return firstmParam;
}

myFunc<string>('123');
myFunc<number>(1);


function funcy <T,U> (firstparam:T, secondParam:U): [T,U]{
    return [firstparam,secondParam];
}

interface Product{
    name: string;
    price:string;
}

interface Student {
    name: string;
}

function getFullInfo <T, K extends keyof T>(entity: T, key: K): T|null;

getFullInfo<Product>(product: Product): Product | null;
getFullInfo<Student>(student: Student): Student | null;


class GenericClass<T>{
    prop: T;
    func: (arg: T) => T;
}

let g = new GenericClass<number>()
g.prop=3;
g.func=(param)=>{
    return param +1;
}
console.log(g.func(g.prop));