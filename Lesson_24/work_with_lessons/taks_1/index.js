export function dayOfWeek(date, days) {
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const day = new Date(date).getDate();

  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

const result = dayOfWeek(new Date(2022, 4, 4), 4);

// console.log(result);

// const newDate = new Date('2022-02-24');
// console.log(newDate);

const newDate = new Date(2022, 2);
console.log(newDate);
