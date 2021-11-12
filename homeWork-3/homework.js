export const processCartData = (cartData) => {
    //TODO: Нужно добавить поле discount(oldPrice - price)
    // убрать поле oldPrice
    cartData['discount'] = cartData.oldPrice - cartData.price;
    delete cartData['oldPrice'];
    return cartData;
};

export const makeCartItemCopy = (cartItem) => {
    //TODO: сделать копию элемента "Пицца с анчоусами"
    // После увеличить кол-во добавленного ингредиента
    const copy = JSON.parse(JSON.stringify(cartItem));
    copy.addedIngredient;
    return copy;
};

export const calcSum = (cartData) => {
    //TODO: посчитать суммы по типам товаров и их цены
    return {
        total: { count: 0, sum: 0 },
        water: { count: 0, sum: 0 },
        pizza: { count: 0, sum: 0 },
        other: { count: 0, sum: 0 }
    };
};

export const getCartItemsByDate = (cartData, date) => {
    //TODO: выбрать покупки сделанные за выбранную дату
    return cartData;
};

export const repeatOrder = (cartData, date) => {
    //TODO: нужно повторить заказ за выбранную дату
    // дублиовать соответствующие элементы
    // поставить в начало спиcка
    // дату текущую
    // поменять id на уникальный
    return cartData;
};

export const addItem = (cartData, item) => {
    //TODO: увеличить кол-во товара в полученном элементе
    return cartData;
};

export const checkPromo = (cartData) => {
    //TODO: нужно проверить корзина подходит под правила промоакции
    // проверить что суммарно в корзине больше 1000р
    // что есть пункт больше чем на 500р
    // что нет скидочных товаров
    return {
        total: false,
        oneBigPosition: false,
        notDiscounted: false
    };
};
