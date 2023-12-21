/*Задан массив транзакций. Транзакции с положительной
суммой это доходы,транзакции с отрицательной - расходы. 
Твоя задача - посчитать итоговый баланс по всем транзакциям. 
Основные требования:
- Функция getTotalBalance принимает массив транзакций вида 
{ id: number, amount: number }  и должна вернуть итоговую сумму
баланса по заданным транзакциям.*/
function getTotalBalance(transactions) {
  let totalBalance = 0;
  for (const transaction of transactions) {
    totalBalance += transaction.amount;
  }
  return totalBalance;
}

// приклад
const dayTransactions = [
  { id: 1001, amount: 60 },
  { id: 1002, amount: -160 },
  { id: 1003, amount: 2000 },
  { id: 1004, amount: -500 },
  { id: 1005, amount: 136 },
];

console.log(getTotalBalance(dayTransactions)); // ===> 1536
/*У цьому прикладі ми проганяємося через кожну транзакцію 
за допомогою циклу for of, на кожній ітерації 
додаємо суму транзакції до totalBalance. 
На виході ми отримуємо ітоговий баланс. */
//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----Метод reduce----------------
//------------------------
//------------------------
//------------------------

// function getTotalBalance(transactions) {
//   const totalBalance = transactions.reduce((total, transaction) => total + transaction.amount, 0);
//   return totalBalance;
// }

// console.log(getTotalBalance(dayTransactions)); // ===> 1536
/*У цьому випадку ми використовуємо метод reduce 
для обчислення ітогового балансу. Метод reduce бере 
функцію-акумулятор та початкове значення та застосовує 
функцію до кожного елементу масиву зліва направо, щоб згорнути 
його в єдине значення - у нашому випадку, це сума всіх транзакцій. */