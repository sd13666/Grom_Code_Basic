          // ----------------------//
          // ------- Array---------//
          // ----------------------//
// const students = [
//   'Andrey',
//   'Denis',
//   'Alex',
//   'Nastya',
//   'Ninja',
//   'Skywoker',
//   'Joda',
//   'Leo',
// ];
// console.log(students[2]);
// console.log(students[5]);
// console.log(students[0]);
// console.log(students[students.length - 1]);
// console.log(students.length);
// --------Iterate array---------------------
// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printArray(students);
// ----------------------------------
// function printArrayForOf(arr) {
//   for (let el of arr) {
//     console.log(el);
//   }
// }
// printArrayForOf(students)
// console.log()

        // ---------------------------------//
        // ------ Методи масивів -----------//
        /* ==================================== */
        /* ===> мутирующие методы массивов <=== */
        /* ===> изменяют исходный массив <===== */
        /* ==================================== */
    // -------------Push--------------------
// const arr = [1, 2, 3, 4, 5];
// const resPush = arr.push(111);
// console.log(resPush);
// console.log(arr);
// update element
// arr[2] = 19;
// console.log(arr);
    // ----------Pop-------------
// const students = ['Alex', 'Ann', 'Jaz', 'Viktor'];
// const resPop = students.pop();
// console.log(resPop);
// console.log(students);
    // ---------shift------------
// const points = [11, 24, 37, 40, 7];
// const resShift = points.shift();
// console.log(resShift);
// console.log(points);
    // ---------unshift------------
// const ages = [18, 25, 31, 29, 50, 11, 1000000];
// const resUnshift = ages.unshift(22);
// console.log(resUnshift);
// console.log(ages);

        /* ======================================= */
        /* ===> НЕ мутирующие методы массивов <=== */
        /* ===> НЕ изменяют исходный массив <===== */
        /* ======================================= */
    // --------- includes ---------------
// const numbers = [5, 0, 8, 10, -4, 50, 220];
// console.log(numbers.includes(0));
// console.log(numbers.includes(100));
// console.log(numbers.includes(-4));
// -------------------------------------------

        // -------------------------------------------
        // --Задача в якій не потрібно змінювати ісходний масив---
        // -------------------------------------------
// function addPoints(points, homeTeam, awayTeam, result) {
//   let copyPoint = points.slice();

//   if (result === "win") {
//     copyPoint[homeTeam - 1] += 3;
//   } else if (result === "lose") {
//     copyPoint[awayTeam - 1] += 3;
//   } else {
//     copyPoint[homeTeam - 1] += 1;
//     copyPoint[awayTeam - 1] += 1;
//   }
//   return copyPoint;
// }
// const points = [44, 41, 40, 35, 30, 19, 10, 7];
// const res = addPoints(points, 3, 6, "lose");


// console.log(addPoints([8, 6, 4, 1], 1, 2, 'win'));
// console.log(addPoints([18, 15, 8, 2, 1, 0], 1, 4, 'lose'));
// console.log(addPoints([18, 15, 8, 2, 1, 0], 5, 6, 'draw'));
// console.log(points);

// examples
// addPoints([8, 6, 4, 1], 1, 2, "win"); // returns ==> [11, 6, 4, 1]
// addPoints([18, 15, 8, 2, 1, 0], 1, 4, "lose"); // returns ==> [18, 15, 8, 5, 1, 0]
// addPoints([18, 15, 8, 2, 1, 0], 5, 6, "draw"); // returns ==> [18, 15, 8, 2, 2, 1]
// console.log(res);
// console.log(points);