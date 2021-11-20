import {compareText} from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText
// (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
    const result = compareText(str);
    return result
        .then((data) => {
            console.log("getData", data);
            return data;
        })
        .catch((e) => {
            console.warn("getData", e);
            throw e;
        });
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
    try {
        const response = await getData(str);
        console.log(`Success:`, response);
    } catch (e) {
        console.warn(`Error:`, e.message);
    }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов,
// то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция
// then или catch
// Например первый then для добавления " :)",
// второй для подсчёта количества символов и
//добавления недостающих
const getResponse = (str) => {
    const response = getData(str);
    const result = response
        .then((data) => data + " :)")
        .then((data) => {
            while (data.length < 20) data = data + ")";
            return data;
        })
        .catch((e) => e.message + " :(")
        .then((data) => {
            while (data.length < 20) data = data + "(";
            return data;
        });
    result.then(console.log);
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
    try {
        const response = await fetch(url);
        if (response.status < 200 || response.status > 299)
            throw Error(`${url} - ${response.status}`);
        const data = await response.json();
        console.log(
            `getDataFromAPI - ответ: ${data.results.map(
                (item) => item.name.first + " " + item.name.last
            )}`
        );
    } catch (e) {
        console.error(`getDataFromAPI - ошибка ${e.message}`);
    }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser.me/api123");
getDataFromAPI("https://randomuser123.me/");
