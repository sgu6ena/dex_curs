//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second

export const callCurrentModule = (type) => {
    const importModule = async (type) => {
        if (type === "first")
            await import("./module1.js").then((module) => module.moduleFirst());
        else if (type === "second")
            await import("./module2.js").then((module) => module.moduleSecond());
        else console.warn("нет такого типа модуля");
    };
    importModule(type);
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду
const pinger = (count)=>{
    if (count>0)
        setTimeout(()=>{
            console.log("PING");
            pinger(--count);
        }, 1000);
}


pinger(10);