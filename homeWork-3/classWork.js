
// TODO: Отсортировать пользователей по уровню зп
//  Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {
    return data.map(item => item.wage).sort((a,b)=>a-b).join(', ')
};

// TODO: Вывести зп всех пользователей
//  Число (сумма всех зп)
export const getWageSum = (data) => {
    return data.reduce((total, item) => total += item.wage, 0  )
};

// TODO: Вывести пользователя с женским именем, знаем, что имя
export const getWomenName = (data) => {
    //  let index = data.findIndex( item => item.name === 'Ekaterina');
    //  return data[index].name
    return data[data.findIndex( item => item.name.slice(-1) === 'a')].name;

};

// TODO: Вывести самого молодого и самого старшего пользователя
//  Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
//  Самого старшего пользователя зовут {...} и ему ${age}."
export const getMinMaxUserAge = (data) => {
    const ages = data.map(item => item.age);
    const minUser = data.findIndex(item =>item.age === Math.min(...ages));
    const maxUser = data.findIndex(item =>item.age === Math.max(...ages));

    return `Самого младшего пользователя зовут ${data[minUser].name} и ему ${data[minUser].age}.
 Самого старшего пользователя зовут ${data[maxUser].name} и ему ${data[maxUser].age}`
};

// TODO: Вывести кол-во пользователей, играющих в баскетбол
//  Элемент выглядит как "basketball"
//  Вывод: "В баскетбол играют {число} пользователей"
export const getBasketPlayers = (data) => {
    return data.filter(e=> e.hobby.includes('basketball')).length;
};

//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (data) => {
    let arrs =  data.filter( e =>parseInt(e.address.street, 10));
    return `по адресам: ${arrs.map(item=>` ул. ${item.address.street} дом ${item.address.house}`)} 
    живут: ${arrs.map(item=>` ${item.name}`)} `
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {
    const users = data.map(item=>item.name).join(', ');
    const bonuses = data.map(item => Object.values(item.userBonuses).reduce((total, e) => total+=e, 0)).join(', ');
    return `Пользователи: ${users} получат соответственно ${ bonuses } бонусов.`
};
