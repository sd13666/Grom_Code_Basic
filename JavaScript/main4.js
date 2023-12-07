// ------------------
// ------------------
// ----- Object -----
/*Об'єкт - це структура даних або сущность,
яка зберігає в собі інформацію, у форматі
ключ - значення!!! */
// ------------------

// describe some product
// const id = 1001;
// let name = 'IPhone 12 Pro Max';
// let isAvailable = true;
// let price = 20000;
// const color = 'Silver';
// let storeAdress = null;

// const product = {
//   id: 1001,
//   name: "IPhone 12 Pro Max",
//   isAvailable: true,
//   price: 20000,
//   color: "Silver",
//   storeAdress: null,
// };

// console.log(product);
//-------------------------------
//-------------------------------

// get property of Object
//--- 1 сценарій -----------------
// const productName = product.name;
// console.log(productName);
//--- 2 сценарій ---------------
// const productName = product['name'];
// console.log(productName);

//----------------------------------

// add property to Object
//--- 1 сценарій -----------------
// product.deliveryOptions = ['Нова почта', 'Укрпочта'];
// console.log(product);
//--- 2 сценарій -----------------
// product['deliveryOptions'] = ['Нова почта', 'Укрпочта'];
// console.log(product);

//----------------------------------
//----------------------------------

//--Ітерація об'єктів--
// -- option 1 --
// for(const key in product) {
//   console.log(key); // - отримаємо ключ об'єкта
//   console.log(product[key]); // - отримуємо значення ключа об'єкта
//   console.log(`Key is: ${key}`); // - отримаємо ключ об'єкта
//   console.log(`Value is: ${product[key]}`); // - отримуємо значення ключа об'єкта
// }
/*For in - працює для об'єктів,
for of - не працює для об'єктів!!! */

// -- option 2 --
// Методи об'єктів(key)
// const keys = Object.keys(product);
// console.log(keys);

// for (const key of keys) {
//   console.log(`Key is: ${key}`);
//   console.log(`Value is: ${product[key]}`);
// }

// -- option 3 --
// Методи об'єктів(values)
// const values = Object.values(product);
// console.log(values);

//----------------------------------
//----------------------------------


// --Task with mentor--
/*Задача скопіювати об'єкт не змінюючи 
оригінальний об'єкт */
/*потрібно проітеруватись по об'єкту
(по всім ключам, дістати значення ключів і
покласти до нового об'єкта)*/
// function copyObj(obj) {
//   const res = [];
//   for(const key in obj) {
//     res[key] = obj[key]
//   }
//   return res;
// }
// //Test data
// const user = {
//   id: 1001,
//   name: 'Sisi',
//   age: 100,
// }
// const copiedObj = copyObj(user);
// console.log(copiedObj);

// copiedObj.testField = 'test';
// console.log(copiedObj);

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #1 -----
// const product = {
//   id: 1001,
//   name: "IPhone 12 Pro Max",
//   isAvailable: true,
//   price: 20000,
//   color: "Silver",
//   storeAdress: null,
// };

// const productName = product.name;
// console.log(productName);

// const storeAdress = product.storeAdress;
// console.log(storeAdress);

// product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовивіз'];
// console.log(product);

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #2 -----
/* Ці функції використовують цикл for...in 
для отримання ключів та значень об'єкта 
і зберігають їх у відповідних масивах, 
які потім повертаються.*/

// function getKeys(obj) {
//   let getKeys = [];
//   for (let key in obj) {
//     getKeys.push(key);
//   }
//   return getKeys;
// };
// console.log(getKeys(product));

// function getValues(obj) {
//   let getValues = [];
//   for (let key in obj) {
//     getValues.push(obj[key]);
//   }
//   return getValues;
// };
// console.log(getValues(product));

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #3 -----
/* Напиши функцию для клонирования входящего объекта. 
Основные требования: Функция copyObj  
должна возвращать копию входящего объекта. 
Если будет изменяться копия объекта, 
оригинальный объект должен оставаться неизменным.*/
// function copyObj(obj) {
//   return Object.assign({}, obj);
// }
// console.log(copyObj(product))

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #4 -----
/* На вход функция получает массив с объектами.
Нас интересует только часть информации, 
верни массив объектов с нужными полями.
Основные требования:
Функция getGoalsStat  должна вернуть массив объектов, 
у каждого из которых есть только 3 свойства 
- name, goals, team.
Обрати внимание на типы данных для значений ключей.*/

// function getGoalsStat(players) {
//   return players.map(player => ({
//     name: player.name,
//     goals: player.goals,
//     team: player.team
//   }));
// }
// // examples
// const players = [
//   {
//     name: 'Jason Mount',
//     birthdate: '19.12.1993',
//     country: 'Deutschland',
//     number: '21',
//     team: 'Manchester United',
//     position: 'MF',
//     goals: 4,
//   },
//   {
//     name: 'Jason Mount',
//     birthdate: '01.01.2001',
//     country: 'Deutschland',
//     number: '16',
//     team: 'Manchester United',
//     position: 'MF',
//     goals: 0,
//   },
//   {
//     name: 'Finne Bard',
//     birthdate: '13.02.1995',
//     country: 'Norwegen',
//     number: '26',
//     position: 'FW',
//     team: 'Fulham United',
//     goals: 1,
//   },
//   {
//     name: 'Gerhardt Yannick',
//     birthdate: '13.03.1994',
//     country: 'Deutschland',
//     number: 31,
//     position: 'MF',
//     team: 'Liverpool',
//     goals: 8,
//   },
// ];
// console.log(getGoalsStat(players));

// ===>
// [
//   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];

/*Ця функція використовує метод map для 
перетворення кожного об'єкта-гравця у новий об'єкт 
з трьома потрібними властивостями - name, goals та team. */

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #5 -----
/*У Авы есть информация про клиентов сети и 
она хочет подсчитать какое количество 
клиентов было с каждого города. 
Основные требования:
- Функция usersCountByCity  должна по массиву юзеров вернуть 
  объект вида {*city* : *users count in the city*, ...}
- Гарантируется что в массиве будут только уникальные
  пользователи - без повторений*/

// function usersCountByCity(users) {
//   return users.reduce((countByCity, user) => {
//     countByCity[user.city] = (countByCity[user.city] || 0) + 1;
//     return countByCity;
//   }, {});
// }
/* Ця функція використовує метод reduce для 
підрахунку кількості користувачів у кожному місті та 
повертає об'єкт з цією інформацією.*/
// examples
// const users = [
//   {
//     id: 888,
//     name: 'Denis',
//     age: 44,
//     city: 'Kyiv',
//   },
//   {
//     id: 333,
//     name: 'Alex',
//     age: 33,
//     city: 'Lviv',
//   },
//   {
//     id: 392,
//     name: 'Nastya',
//     age: 22,
//     city: 'Kyiv',
//   },
//   {
//     id: 123,
//     name: 'Violetta',
//     age: 15,
//     city: 'Odesa',
//   },
//   {
//     id: 640,
//     name: 'Mykola',
//     age: 31,
//     city: 'Lviv',
//   },
// ];
// console.log(usersCountByCity(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }

// --Та сама задача без методів масива--
// function usersByCity(users) {
//   const countByCity = {};
//   for (let i = 0; i < users.length; i++) {
//     const city = users[i].city;
//     if (countByCity[city]) {
//       countByCity[city] += 1;
//     } else {
//       countByCity[city] = 1;
//     }
//   }
//   return countByCity;
// }

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

// ---- Task #6 -----
/*Первый кейс - администратор кофейни вводит полное 
имя пользователя, ему должны показаться все клиенты 
с таким именем. Второй кейс - при вводе части имени, 
администратору должны показаться все пользователи 
в имени которых содержиться введенная строка.
Напиши две функции которые будут решать эти задачи:
Основные требования:
- Функция findUsersByName  принимает массив пользователей вида 
  { id: number, name: string, city: string }
  и должна вернуть массив пользователей 
  имя которых равно заданному,
- Функция findUsersByString  принимает массив пользователей вида 
  и должна вернуть массив пользователей в имени которых
  содержиться заданная строка,
- Регистр слов важен  и его нужно учитывать. 
  То есть, если на вход функций приходит слово Denis, 
  то ищем юзеров именно по этому слову, а не по - denis.
  */

  // function findUsersByName(users, name) {
  //   return users.filter(user => user.name === name);
  // }
  
  // function findUsersByString(users, str) {
  //   return users.filter(user => user.name.includes(str));
  // }
  //   // examples
  // const users = [
  //   {
  //     id: 101,
  //     name: 'Denis',
  //     city: 'Kyiv',
  //   },
  //   {
  //     id: 102,
  //     name: 'Alexandr',
  //     city: 'Lviv',
  //   },
  //   {
  //     id: 103,
  //     name: 'Nastya',
  //     city: 'Kyiv',
  //   },
  //   {
  //     id: 104,
  //     name: 'Violetta',
  //     city: 'Odesa',
  //   },
  //   {
  //     id: 105,
  //     name: 'Mykola',
  //     city: 'Lviv',
  //   },
  //   {
  //     id: 106,
  //     name: 'Denis',
  //     city: 'Lviv',
  //   },
  //   {
  //     id: 107,
  //     name: 'Andrey',
  //     city: 'Odesa',
  //   },
  //   {
  //     id: 108,
  //     name: 'Alexey',
  //     city: 'Dnipro',
  //   },
  // ];
  
  // console.log(findUsersByName(users, 'Denis')); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
  // console.log(findUsersByName(users, 'Andrey')); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
  // console.log(findUsersByName(users, 'Anna')); // ===> [ ]
  
  // console.log(findUsersByString(users, 'Al')); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
  // console.log(findUsersByString(users, 't')); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
  // console.log(findUsersByString(users, 'Vik')); // ===> [ ]
  
  // console.log(findUsersByString(users, 'm')); // ===> [ ]
  // // explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result
  