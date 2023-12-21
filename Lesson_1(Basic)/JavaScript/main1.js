      // --Code Style--//
// function sum(from, to) {
//   let result = 0;

//   for (let index = from; index <= to; index += 1) {
//     result += index;
//   }
//   return result;
// }

// function compareSums (a, b, c, d) {
//   const sum1 = sum (a, b);
//   const sum2 = sum (c, d);
//   if (sum1 > sum2) {
//     return true;
//   } else {
//     return false;
//   }
// }

      // - Правильно-- //
// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// function sum(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sum(2, 10));
// console.log(compareSums(1, 4, 4, 6));

      // --- Debugger Code ----//
// function sum(from, to) {
//   let res = 0;

//   for (let num = from; num <= to; num += 1) {
//     res += num;
//   }
//   return res;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
// }

// console.log(sum(5, 10));
// console.log(sum(11, 11));
// console.log(compareSums(5, 10, 5, 10));
// console.log(compareSums(5, 15, 3, 5));
// console.log(compareSums(-2, 5, 5, 9));