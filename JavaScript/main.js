// - Functions - //
// -----------------
// let userName = 'Dima';
// let currentDay = 'Monday';

// function sayWelcome(userName, currentDay) {
//   const message = `Hello, ${userName}! Have a good ${currentDay}!`
//   return message;
// }
// console.log(sayWelcome('Mark', 'Friday'))
// console.log(sayWelcome("Sisi", 'Saturday'))
// ----------------------------------------------------
// const min = (firstNumber, secondNumber) => {
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   };
//   return secondNumber
// };
// console.log(min(20,10));
// -----------------------------------------------------
// function countArea(chickens, caws, pigs) {
//   const cawsArea = caws * 1.5;
//   const chickensArea = chickens * .2;
//   const pigsArea = pigs * .5;
//   const sum = cawsArea + chickensArea + pigsArea;
//   return sum;
// }
// console.log(countArea(6, 3, 5));
// examples
// countArea(10, 10, 10); // ===> 22
// countArea(10, 0, 1); // ===> 2.5
// countArea(6, 3, 5); // ===> 8.2
// -----------------------------------------------------
// const countAreaArrow = (chickens, caws, pigs) => (caws * 1.5 + chickens * 0.2 + pigs * 0.5);
// console.log(countAreaArrow(10, 10, 10));
// console.log(countAreaArrow(10, 0, 1));
// console.log(countAreaArrow(6, 3, 5));
// ------------------------------------
// function convertMills(minutes, seconds, mills) {
//   let minToMills = minutes * 60000;
//   let secToMills = seconds * 1000;
//   let convertMills = minToMills + secToMills + mills;
//   return convertMills;
// };
// console.log(convertMills(1, 2, 100));
// console.log(convertMills(0, 2, 100));
// console.log(convertMills(5, 11, 230));
// --------------------------------------------
// function canBuyProduct(price, balance) {
//   let canBuyProduct = balance - price;
//   if (canBuyProduct >= 500) {
//     return true;
//   }
//   return false;
// };
// console.log(canBuyProduct(150, 600))
// -----------------------------------------
// function getMax(first, second, third) {
//   if (first >= second && first >= third) {
//     return first;
//   } else if (second >= first && second >= third ) {
//     return second;
//   };
//   return third;
// };
// console.log(getMax(0, 0, 0));
// -----------------------------------------
// function countCommision(amount, currency) {
//   let countCommision = 0;
//   switch (currency) {
//     case "UAH":
//       if (amount <= 1000) {
//         countCommision = amount * 0.02;
//       } else {
//         countCommision = amount * 0.01;
//       }
//       break;
//     case "USD":
//       if (amount <= 5000) {
//         countCommision = amount * 0.005;
//       } else {
//         countCommision = amount * 0.0025;
//       }
//       break;
//     case "EUR":
//       if (amount <= 3000) {
//         countCommision = amount * 0.0075;
//       } else {
//         countCommision = amount * 0;
//       }
//       break;
//     default:
//       countCommision = 0;
//     };
//     return countCommision;
// };
// console.log(countCommision(20000, "USD"));
// console.log(countCommision(500, "UAH"));
// console.log(countCommision(2000, "UAH"));
// -------------------------------------

// -- Loop -- //
// ------for-------
// function printNumbers(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i);
//   }
// };
// printNumbers(5)
//------while-----
// function printNumbers(num) {
//   let i = 0;
//   while (i <= num) {
//     console.log(i);
//     i++;
//   }
// };
// printNumbers(5)
// ------sum------- // 
// function sumOfMillions() {
//   let sum = 0;
//   for (let i = 0; i <= 10000000; i++) {
//     sum += i;
//   };
//   return sum;
// };
// console.log(sumOfMillions());
// ------factorial------
// function factorial(num) {
//   if (num < 0 || num > 100) {
//     return 0;
//   } else {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// }
// console.log(factorial(0));
// -------Compare sums---------------
// function sum(from, to) {
//   if (from === to) {
//     return from;
//   } else {
//     let sum = 0;
//     for (let i = from; i <= to; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// };
// console.log(sum(5, 10));
// console.log(sum(11, 11));
// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   const sum1 = sum(firstFrom, firstTo);
//   const sum2 = sum(secondFrom, secondTo);
  
//   if (sum1 > sum2) {
//     return true;
//   }
//   return false;
// };
// console.log(compareSums(5, 10, 5, 10));
// console.log(compareSums(5, 15, 3, 5));
// console.log(compareSums(-2, 5, 5, 9));
// -----------------------------------------
// function sendEmail() {
//   console.log("Gromcode party invitation was sent!");
// }

// function sendEmailList() {
//   for (let i = 0; i < 30; i++) {
//     console.log("Gromcode party invitation was sent!");
//   }
// }
// sendEmailList(30);
//----------------------------------------
// function sendEmail(userName) {
//   console.log(`Gromcode party invitation was sent to ${userName}`);
// }

// function sendEmailList(userNames) {
//   userNames.forEach(userName => {
//     sendEmail(userName);
//     console.log(`Gromcode party invitation was sent to ${userName}!`);
//   });
// }

// const users = ['Alice', 'Bob', 'Charlie'];
// sendEmailList(users);
// ---------------------------------------------------
/*Первая задача уже требует решения ;) Каждый день кофейни Авы посещают 
сотни клиентов. Каждый из них делает покупки. 
И Аве нужно знать на какую сумму в день покупок было совершено. 
Этот показатель в бизнесе называется выручкой. 
Итак, у тебя есть массив целых чисел, 
где каждое число, это покупки за день в кофейнях. Напиши функцию getRevenue,
, которая будет считать выручку всех кофеен.
Вторая функция checkRevenue должна проверять больше ли выручка 
всей сети за день от заданного плана. 
План - это число, которое приходит в функцию.
Функция getRevenue должна принимать массив всех продаж за день 
и считать выручку.
Функция checkRevenue должна принимать массив всех продаж, 
план общей выручки на день и возвращать true  если вырычка больше или равняется плану, 
false  в другом случае. */
//--
// function getRevenue(sales) {
//   let totalRevenue = sales.reduce((a, b) => a + b, 0);
//   return totalRevenue;
// }

// function checkRevenue(sales, plannedRevenue) {
//   let totalRevenue = getRevenue(sales);
//   return totalRevenue >= plannedRevenue;
// }
// console.log(getRevenue([25, 40, 10, 58])) // returns ==> 133
// console.log(checkRevenue([25, 40, 10, 58], 100)) // returns ==> true
//---------------------------------------------------------------
//--Фунцкція reverseArray--
// function reverseArray(arr) {
//   const newArray = [...arr].reverse();
//   return newArray;
// };

// console.log(reverseArray([11, 4, 8, 3]))
//-----------------------------------------------------
/*Создай ф-цию, которая создаст другой массив с 
первыми n  элементами входящего массива.
Функция getSubArray  должна вернуть новый массив, 
который содержит первые n элементов входящего массива.*/
// const getSubArray = (arr, numberOfElements) => {
//   return arr.slice(0, numberOfElements);
// };

// // examples
// console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
// console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]
// console.log(getSubArray(['some string', 'hello', 'I am happy'], 1)); // ==> ['some string']
//-------------------------------------------------------
/*Напиши функцию, которая будет клонировать 
входящий массив и возвращать новый массив.
Функция cloneArr  должна клонировать входящий массив и
возвращать новый массив.
Исходный массив не должен поменяться*/
// function cloneArr(arr) {
//   let newArr = [...arr];
//   return newArr;
// }

// // examples
// console.log(cloneArr([11, 4, 8, 3])); // returns ==> [11, 4, 8, 3]
// console.log(cloneArr([])); // returns ==> []
// console.log(cloneArr([0])); // returns ==> [0]
