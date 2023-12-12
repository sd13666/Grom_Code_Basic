function getMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMax([22, 4, 18, -1, 111, 100, 48])); // ===> 111
console.log(getMax([1, 1, 1, 1])); // ===> 1
console.log(getMax([0])); // ===> 0