console.log(`%c
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); `, "color: yellow; font-style: italic; background-color: blue; padding: 2px;");

console.warn('\n\nВыведется цифра 4 - потому что shoppingCart это указатель на массив fruits');