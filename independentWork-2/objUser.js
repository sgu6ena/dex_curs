/* Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let user = new Object();
user['name']='John';
console.dir(user);
user['surname']='Smith';
console.dir(user);
user['name']='Pete';
console.dir(user);
delete user['name'];
console.dir(user);