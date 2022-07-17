export const pinger = (num, period) => {
  let count = num;
  console.log('Ping');
  const intervel = setInterval(() => {
    if (--count > 0) {
      console.log('Ping');
    } else {
      clearInterval(intervel);
    }
  }, period);

  //   setTimeout(() => {
  //     clearInterval(intervel);
  //   }, num * period);
};

pinger(5, 1000);
