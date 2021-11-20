# Промисы

```js
let promise = new Promise(function (resolve, reject) {

});

promise  
    .then(result => { ...})  
    .catch(error => { ... })  
    .finally(() => { ... })    
```


```js 
const success = true;

function connect() { 
    return new Promise((resolve, reject) => {
        if (success)
            resolve(new Connection()); 
        else               
            reject('Could not open the database connection');
    });
}
```

```js
function f(x) {
    return new Promise(function (resolve, reject) { 
        try {
            resolve((function (x) { /* body */}) (x));
        } catch (e) {
            reject(e);
        }
    });
}
```
  
Её аргументы `resolve` и `reject` – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри
исполнителя.

Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

`resolve(value)` — если работа завершилась успешно, с результатом `value`. `reject(error)` — если произошла ошибка,
error – объект ошибки. Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем
вызвать `resolve` или reject.

У объекта `promise`, возвращаемого конструктором `new Promise`, есть внутренние свойства:

* `state` («состояние») — вначале `"pending"` («ожидание»), потом меняется на `"fulfilled"` («выполнено успешно») при
  вызове `resolve` или на `"rejected"` («выполнено с ошибкой») при вызове `reject`.
* `result` («результат») — вначале undefined, далее изменяется на `value` при вызове `resolve(value)` или на error при вызове
  `reject(error)`.


___
#Fetch

Типичный запрос с помощью fetch состоит из двух операторов await:
```js
async function feychUrl (url) {
    let response = await fetch(url, options); // завершается с заголовками ответа   
    let result = await response.json(); // читать тело ответа в формате JSON   
    return redult;
 }
```

Или, без await:
```js
fetch(url, options) 
    .then(response => response.json())
    .then(result => /* обрабатываем результат */) 
```

Параметры ответа:

* **response.status** – HTTP-код ответа,
* **response.ok** – true, если статус ответа в диапазоне 200-299.
* **response.headers** – похожий на Map объект с HTTP-заголовками.

Методы для получения тела ответа:

* **response.text()** – возвращает ответ как обычный текст,
* **response.json()** – преобразовывает ответ в JSON-объект,
* **response.formData()** – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
* **response.blob()** – возвращает объект как Blob (бинарные данные с типом),
* **response.arrayBuffer()** – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),

Опции fetch

* **method** – HTTP-метод,
* **headers** – объект с запрашиваемыми заголовками (не все заголовки разрешены),
* **body** – данные для отправки (тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.


Метод POST
```js
let user = {
    name: 'John',
    surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```