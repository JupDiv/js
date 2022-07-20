const asyncNumber1 = Promise.resolve(18);
const asyncNumber2 = Promise.reject(12);
const asyncNumber3 = Promise.resolve(10);

function sumNumb(arr) {
  return arr
    .filter((elem) => !Number.isNaN(elem))
    .reduce((acc, elem) => acc + +elem, 0);
}

const asyncSum = (...arg) => {
  return Promise.all(arg)
    .then((data) => sumNumb(data))
    .catch(() => console.log("Cant't calculate"));
};

const asyncTest = asyncSum(asyncNumber1, asyncNumber2, asyncNumber3);

asyncTest.then((data) => console.log(data));
