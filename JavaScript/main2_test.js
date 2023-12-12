function getBigTransactions(transactions, amount) {
  return transactions.filter(transaction => transaction > amount);
}

// examples
console.log(getBigTransactions([110, 58, 2500, 9000, 462, 256], 100)); // ===> [110, 2500, 9000, 462, 256]
getBigTransactions([110, 58, 2500, 9000, 462, 256], 1000); // ===> [2500, 9000]
getBigTransactions([110, 58, 2500, 9000, 462, 256], 9500); // ===> []