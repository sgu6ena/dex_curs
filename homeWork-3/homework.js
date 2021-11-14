export const processCartData = (cartData) => {
    cartData.map((item) => {
        const diff = item.oldPrice - item.price;
        diff > 0 ? (item.discount = diff) : '';
    });
    cartData.map((item) => delete item.oldPrice);
    return cartData;
};

export const makeCartItemCopy = (cartItem) => {
    const clone = JSON.parse(JSON.stringify(cartItem));
    const findItem = clone.findIndex((item) => item.name === "Пицца с анчоусами");
    clone[findItem]?.addedIngredients.map((item) => (item.count += 1));
    return clone;
};

export const calcSum = (cartData) => {
    const calcSumType = (cartData, type) => {
        const arr = type ? cartData.filter((item) => item.type === type) : cartData;
        const sum = arr.reduce((total, item) => total += item.count * item.price, 0);
        const count = arr.reduce((total, item) => total += item.count, 0);
        return {sum, count};
    };
    return {
        total: calcSumType(cartData),
        water: calcSumType(cartData, "water"),
        pizza: calcSumType(cartData, "pizza"),
        other: calcSumType(cartData, "other")
    };
};

export const getCartItemsByDate = (cartData, date) => {
    //let d = date.slice(0,10);new Date();

    //TODO: выбрать покупки сделанные за выбранную дату
    // const dateItem = Date(date);
    // console.log(cartData.filter(item=> item));
    // console.log(dateItem.getDate;
    return cartData;
};

export const repeatOrder = (cartData, date) => {
    console.log(date);
    let d = new Date(date);
    let day = d.getDate();
    console.log(day);

    //TODO: нужно повторить заказ за выбранную дату
    // дублиовать соответствующие элементы
    // поставить в начало спиcка
    // дату текущую
    // поменять id на уникальный

    return cartData;
};

export const addItem = (cartData, item) => {
    cartData.map((i) => (i.id === item.id ? (i.count += 1) : ""));
    return cartData;
};

export const checkPromo = (cartData) => {
    const sum = calcSum(cartData);
    const total = sum.total.sum > 1000;
    const oneBigPosition = sum.pizza.sum > 500 || sum.water.sum > 500 || sum.other.sum > 500;
    const notDiscounted = !!cartData.filter((item) => item.discount).length;
    return {total, oneBigPosition, notDiscounted};
};
