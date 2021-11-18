/*Получите данные о пользователях GitHub
Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает
 у GitHub информацию о них и возвращает массив объектов-пользователей.

    Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

    В песочнице есть тестовый пример.

    Важные детали:

    На каждого пользователя должен приходиться один запрос fetch.
    Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
    Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
    то функция должна возвращать null в массиве результатов.*/
const users = ['sgu6ena', 'amyshko', 'nikitospush', 'dkjfenr'];

async function fetchUsers (users=['sgu6ena'])  {
    let userNames = [];
    for (user of users) {
        try {
            const response = await fetch(`https://api.github.com/users/${user}`);
            const data = await response.json();
            console.log(`${user} - ${data.name}`)
            userNames.push(data.name);
        } catch (e) {
            userNames.push(`ошибка \'${user}\' - неверный логин`);
        }
    }
    return userNames;
}

fetchUsers(users).then(console.log)