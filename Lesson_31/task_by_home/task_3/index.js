export function delay(timeout) {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeout);
  });

  return promis;
}

const delayCopy = delay;

delayCopy(3000).then(() => console.log('Done'));
