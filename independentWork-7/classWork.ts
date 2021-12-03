//#3
// передать функцию в typeFunction чтобы она полностью
// подходила под тип funcType

type funcType = (
    param: number
) =>
    | undefined
    | null
    | ((flag: boolean) => string | (() => Promise<(string | number)[]>));

const typeFunction = (func: funcType) => {
    func(1);
};

typeFunction((param1: number) => {
    switch (param1) {
        case 1:
            return undefined;
        case 2:
            return (flag) => {
                if (flag) {
                    return 'ok'
                } else {
                    return async () => {
                        return await fetch('https://iptv.kartina.tv/api/json/account')
                            .then(res => [res.text()])
                            .catch(e => [e.code])
                    }
                }
            }
        default:
            return null;
    }

});

//#4
// напишите тело класса чтобы имплеминитровать
// интерфейсы IImplement1 и IImplement2

interface IImplement1<T extends string | number> {
    name: string;
    randomProp: T;

    handler(param1: T, param2: T): T;

    handler2(param: string, param2: number): () => boolean;
}

interface IImplement2 {
    handler3<T>(param: T): T[];

    handler4(): Promise<string>;
}

class Implementator implements IImplement1<string | number>, IImplement2 {
    name: string;
    randomProp: string | number;

    constructor(name: string, randomProp: string | number) {
        this.name = name;
        this.randomProp = randomProp;
    }

    handler(str1: string, str2: string): string {
        return `${this.name} ${str1}: ${str2}.`;
    }

    handler2(str1: string, num: number) {
        return () => str1.includes(num.toString() || this.name);
    }

    handler3<T>(randomProp: T) {
        return [randomProp].fill(randomProp, 0, 10);
    };

    handler4() {
        return fetch('https://iptv.kartina.tv/api/json/account').then(res => res.text())
    };
}
