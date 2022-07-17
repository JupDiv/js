//Принимаем аргументы
//создаем переменную которая конвертит входящий аргумент в тайм стемп
//создаем методы которые работают с переменной тамп стемп и возвращаем this
//Возвращаем обьект с методами

//input: date + chain func
//output: object
export function shmoment(initValue) {
  let dataValue = new Date(initValue);
  const calculateDate = {
    add(segment, value) {
      if (segment === 'years') {
        dataValue.setFullYear(new Date(dataValue).getFullYear() + value);
        return this;
      }
      if (segment === 'months') {
        dataValue.setMonth(new Date(dataValue).getMonth() + value);
        return this;
      }
      if (segment === 'days') {
        dataValue.setDate(new Date(dataValue).getDate() + value);
        return this;
      }
      if (segment === 'hours') {
        dataValue.setHours(new Date(dataValue).getHours() + value);
        return this;
      }
      if (segment === 'minutes') {
        dataValue.setMinutes(new Date(dataValue).getMinutes() + value);
        return this;
      }
      if (segment === 'seconds') {
        dataValue.setSeconds(new Date(dataValue).getSeconds() + value);
        return this;
      }
      if (segment === 'milliseconds') {
        dataValue.setMilliseconds(
          new Date(dataValue).getMilliseconds() + value
        );

        return this;
      }
    },
    subtract(segment, value) {
      if (segment === 'years') {
        dataValue.setFullYear(new Date(dataValue).getFullYear() - value);
        return this;
      }
      if (segment === 'months') {
        dataValue.setMonth(new Date(dataValue).getMonth() - value);
        return this;
      }
      if (segment === 'days') {
        dataValue.setDate(new Date(dataValue).getDate() - value);
        return this;
      }
      if (segment === 'hours') {
        dataValue.setHours(new Date(dataValue).getHours() - value);
        return this;
      }
      if (segment === 'minutes') {
        dataValue.setMinutes(new Date(dataValue).getMinutes() - value);
        return this;
      }
      if (segment === 'seconds') {
        dataValue.setSeconds(new Date(dataValue).getSeconds() - value);
        return this;
      }
      if (segment === 'milliseconds') {
        dataValue.setMilliseconds(
          new Date(dataValue).getMilliseconds() - value
        );

        return this;
      }
    },
    result() {
      return dataValue;
    },
  };
  return calculateDate;
}

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17, 155))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .add('milliseconds', 444)
  .subtract('milliseconds', 44)
  .result();
console.log(result);
