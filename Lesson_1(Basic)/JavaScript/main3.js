//---Template string ----
// const firstName = 'Dmitro';
// const space = ' ';
// const lastName = 'Utkin';

// /*За допомогою індекса можно получать доступ до
// символів строки.*/
// console.log(firstName[0]);
// console.log(firstName[firstName.length - 1]);

// /* includes - перевіряє чи входить підстрока до строки */
// console.log(firstName.includes('tro'));

// /* split - розділяю строку на масив подстрок за вказаним розділітєлєм*/
// const splitRes = firstName.split('');
// console.log(splitRes);

// /* concat - з'єднує дві строки і вертає результат конкатенації */
// const concatRes = firstName.concat(space).concat(lastName);
// console.log(concatRes);
// const concatRes2 = firstName + space + lastName;
// console.log(concatRes2);

// /* slice - повертає частину строки від вказаного елемента,
// якщо індекс не вказаний */
// console.log(firstName.slice(1, 2))
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
// const getMessage = (userName, email, tasksCount) => {
//   const getMessage = `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`;
//   return getMessage;
// };
// console.log(getMessage('Sisi', 'asd@gmail.com', 12345))
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
// function isLetter(c) {
//   return c.toLowerCase() !== c.toUpperCase();
// }

// function isValidWord(str) {
//   if (str.length <= 2) {
//     return false;
//   }
//   const strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (!isLetter(strArr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// // examples
// isLetter('h'); // ==> true
// isLetter('W'); // ==> true
// isLetter('@'); // ==> false
// isLetter('1'); // ==> false

// console.log(isValidWord('hello')); // ==> true
// console.log(isValidWord('Hello')); // ==> true
// console.log(isValidWord('Test@')); // ==> false
// console.log(isValidWord('someName1')); // ==> false
// console.log(isValidWord('It is me')); // ==> false
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// function capitalize(str) {
//   str = str.replace(str[0],str[0].toUpperCase())
  
//   return str; 
// }

// capitalize('hello, it is me');
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// function createAbbreviation(str) {
//   const words = str.split(' ');
//   let abbreviation = '';
//   for (let i = 0; i < words.length; i++) {
//     abbreviation += words[i].charAt(0).toUpperCase();
//   }
//   return abbreviation;
// }

// // Приклад використання
// let inputString = 'Union of Soviet Socialist Republics';
// let result = createAbbreviation(inputString);
// console.log(result); // Повинно вивести "ЦЄВР"

/* У цій функції слова розділяються за пробілом, 
або ви можете змінити роздільник в методі split, 
якщо потрібно. 
Потім в зовнішньому циклі отримується 
перша буква кожного слова, 
перетворена на велику літеру, 
та додається до змінної abbreviation. 
На виході отримується абревіатура великими 
літерами.*/
// function getAbbreviation(str) {
//   const words = str.split(' ');
//   let abbreviation = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 3) {
//       abbreviation += words[i].charAt(0).toUpperCase();
//     }
//   }
//   return abbreviation;
// }

// // Приклад використання
// let inputString = 'Union of Soviet Socialist Republics';
// let result = getAbbreviation(inputString);
// console.log(result); // Повинно вивести "ВРДСЛС"
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------

// function camelCase(str) {
  
//   return str.split(' ')
//   .map(function(word, index) {
//     if (index === 0) {
//       return word;
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   })
//   .join('');
// }

// console.log(camelCase('some function name'))