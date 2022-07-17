export const mult = (firstNumber) => (secondNumber) =>
  firstNumber * secondNumber;
export const twice = (firstNumber) => firstNumber * 2;
export const triple = (firstNumber) => firstNumber * 3;

const firstStep = mult(7);
const result = firstStep(8);
console.log(result);
console.log(twice(7));
console.log(triple(9));
