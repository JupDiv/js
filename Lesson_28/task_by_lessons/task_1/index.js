// debugger;
export function calc(initValue) {
  let result = initValue;

  const calculator = {
    result() {
      return result;
    },
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
  };

  return calculator;
}

const newValue = calc(3).add(2).mult(4).div(10).subtract(5).result();
console.log(newValue);
