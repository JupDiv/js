const successPromise = new Promise((resolve) => {
  console.log('Step: 0');
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then((number) => {
    console.log('Step: 1');
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => {
    console.log('Step: 2');
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then((result) => {
    console.log('Step: 3');
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then((number) => {
    console.log('Step: 4');
    const mult = number * 10;
    return mult;
  })
  .then((result) => {
    console.log('Step: 5');
    console.log(result); // 320
  });

console.log(
  'Step: 6',
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);
