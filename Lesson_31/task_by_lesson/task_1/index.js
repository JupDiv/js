export const requestUserData = (userId) => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}`,
        });
      }, 1000);
    }
  });
  return promise;
};

requestUserData('userid777')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
