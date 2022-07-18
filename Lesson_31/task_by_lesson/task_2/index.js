const asyncCalculator = (value) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${value}`);
      resolve(value);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newValue = value * value;
            console.log(`Squared value: ${newValue}`);
            resolve(newValue);
          }, 500);
        })
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newValue = value * 2;
            console.log(`Squared value: ${newValue}`);
            resolve(newValue);
          }, 500);
        })
    );

asyncCalculator(5);
