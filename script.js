// let n = +prompt('Enter a number') || 0;
// let amount = +prompt('Amount of numbers') || 0;

/**
 * Will log numbers that could be devided by first argument
 * @param {number} number Number to devide
 * @param {number} amountOfNumbers Amount of numbers should be shown
 */
const calc = (number, amountOfNumbers) => {
  let str = '';
  for (let i = 0; i < amountOfNumbers; i++) {
    str += `${!i ? '' : ','}${(i + 1) * number}`;
  }
  return str;
};

// const calc = (number, amountOfNumbers) =>
//   Array(amountOfNumbers)
//     .fill(1)
//     .map((_, i) => (i + 1) * number)
//     .join(',');

/**
 * Return sum of values
 * @param {number} a First operand
 * @param {number} b Second operand
 */
const sum = (a = 0, b = 0) => {
  return a + b;
};

const resultOfCalc = calc(4, 10);

console.log(resultOfCalc);
