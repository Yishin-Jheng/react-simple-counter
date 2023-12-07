function filterNumbersGreaterThanFive(numbers) {
  const overthan5 = numbers.filter((num) => num > 5);
  return overthan5;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers));
