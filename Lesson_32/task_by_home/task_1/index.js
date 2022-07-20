/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (data) => {
  return Promise.resolve(data);
};

/*
 * пример использования
 */
// makePromise(17).then((number) => {
//   console.log(number); // 17
// });

console.log(makePromise(3));
