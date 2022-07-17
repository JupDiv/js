const func3 = (value) => value + 3;
const func2 = (value) => value * 2;
const func4 = (value) => value / 4;
export const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverythink = compose(func3, func2, func4);

console.log(doEverythink(3));
