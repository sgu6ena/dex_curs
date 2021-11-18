/*Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404*/

const url = `https://jsonplaceholder.typicode.com/todos/1`;
const urlError = 'https://jsonplaceholder.typicode.com/todoss/1'

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        const result = await response.json();
        return JSON.stringify(result);
    } else
        return response.status;
}

let data = await loadJson(url).catch();
let errorMessage = await loadJson(urlError).catch();

console.log('результат:', data);
console.log('ошибка:', errorMessage);