# Типы

Для установки типа применяется знак двоеточия, после которого указывается название типа.

* **boolean**: логическое значение true или false
```ts
let isEnabled: boolean = true;
let isAlive: boolean = false;
```
* **number**: числовое значение
```ts
let age: number = 36;
let height: number = 1.68;
```
* **string**: строки
```ts
let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}`;
```
* **Array**: массивы
```ts

```
* **кортежи**
```ts

```
* **Enum**: перечисления
```ts

```
* **Any**: произвольный тип
```ts

```
* **Symbol**
```ts

```
* **null** и **undefined**: соответствуют значениям null и undefined в javascript
* **Never**: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку