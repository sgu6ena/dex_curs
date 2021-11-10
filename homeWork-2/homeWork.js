export const sum = (f, s) => {
    //TODO: Должны складываться только строки и числа
    // Постарайтесь сложить как можно больше пар и обойти NaN случаи
    return f + s;
};

export const showPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;

    //TODO: Привести цену к виду: 10.00 р.
    // округлять до копеек в сторону магазина
    return Math.ceil(discountedPrice*100)/100;
};

export const findSuccess = (bankResponse) => {
    //TODO: Проверьте что в строке есть 'Success' без учёта регистра
    // приводим обе строки в нижний регистр
    let string = bankResponse.toLowerCase();
    let search = "Success".toLowerCase();
    // проверка входит подстрока в строку или нет
    return string.includes(search) ? 'Yes' : 'No';
};


export const dateToString = (date) => {
    //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
    const today = new Date(); // сегодняшнаяя дата
    const dateItem = new Date(date); // входящая дата
    const days = today.getDate() - dateItem.getDate(); //разница в днях
    // если разница в днях: -1,0,1 + год и месяц совпадают
    if (Math.abs(days) < 2  &&
        today.getMonth() == dateItem.getMonth() &&
        today.getFullYear() == dateItem.getFullYear()) {
        return days == 0 ? 'сегодня' :
            days > 0 ? 'вчера':'завтра';
    } else {
        //год:месяц:день
        return date.slice(0,10).replaceAll('-',':');
        //return `${dateItem.getFullYear()}:${dateItem.getMonth()}:${dateItem.getDate()}`;
    }


};

export const sort = (data) => {
    //TODO: Отсортируйте массив строк по алфавиту
    return data;
};
