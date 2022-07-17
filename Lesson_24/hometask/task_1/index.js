//Принимаем даты как аргументы

//Конвертируем в Time Stump
//Делаем вычисления
//КОнвертируем обратно
//Возвращаем даты

//input: objects
//output: string
export function getDiff(startDate, endDate) {
  const fromDate = new Date(startDate).getTime();
  const toDate = new Date(endDate).getTime();

  const differenceDate = Math.abs(new Date(toDate - fromDate).getTime());
  console.log(new Date(differenceDate));
  const oneDay = 1000 * 60 * 60 * 24;
  const getSeconds = new Date(differenceDate).getSeconds();
  console.log(`Seconds ${getSeconds}`);
  const getMinutes = new Date(differenceDate).getMinutes();
  console.log(`Minutes ${getMinutes}`);
  const getHours = new Date(differenceDate).getHours();
  console.log(`Hours ${getHours}`);
  const getDay = Math.round(differenceDate / oneDay);
  const result = `${getDay}d ${getHours}h ${getMinutes}m ${getSeconds}s`;

  return result;
}

const startDate = new Date(2020, 11, 23, 2, 0, 0);
const endDate = new Date(2022, 5, 23, 1, 1, 1);

const result = getDiff(startDate, endDate);
console.log(result);
// function getDiff(startDate, endDate) {
//   const fromDate = new Date(startDate).getTime();
//   const toDate = new Date(endDate).getTime();
//   let differenceDate = new Date(toDate - fromDate).getTime();
//   console.log(differenceDate);
//   const oneSecond = 1000 * 1;
//   const oneMinute = 1000 * 60 * 60;
//   const oneHour = 1000 * 60 * 60;
//   const oneDay = 1000 * 60 * 60 * 24;
//   const getDay = Math.floor(differenceDate / oneDay);
//   const getHours = Math.floor((differenceDate / oneHour) % 24);
//   const getMinutes = Math.floor((differenceDate / oneMinute) % 60);
//   const getSeconds = Math.floor((differenceDate / oneSecond) % 60);

//   const result = `${getDay}d ${getHours}h ${getMinutes}m ${getSeconds}s`;

//   return result;
// }

//   const getSeconds = Math.round(differenceDate / 1000);
//   const getMinutes = Math.round(differenceDate / (1000 * 60 * 60));
//   const getHours = Math.round((differenceDate / (1000 * 60 * 60)) % 24);
//   const getDay = Math.round(differenceDate / (1000 * 60 * 60 * 24));

// function getDiff(startDate, endDate) {
//   const fromDate = new Date(startDate).getTime();
//   const toDate = new Date(endDate).getTime();
//   const differenceDate = new Date(toDate - fromDate).getTime();
//   const getSeconds = (differenceDate / 1000) % 60;
//   const getMinutes = (differenceDate / (1000 * 60)) % 60;
//   const getHours = ((differenceDate / 1000) * 60 * 60) % 24;
//   const getDays = (differenceDate / 1000) * 60 * 60 * 24;
//   const result = `${getDays}d ${getHours}h ${getMinutes}m ${getSeconds}s`;

//   return result;
// }
