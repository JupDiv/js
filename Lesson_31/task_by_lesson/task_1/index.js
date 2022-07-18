export const requestUserData = (userId) => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    }
    if (userId === 'userid777') {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: 'userid777',
          email: 'userid777@example.com',
        });
      }, 1000);
    }
  });
  return promise;
};

//requestUserData('userid777').then((data) => console.log(data));

requestUserData('broken').catch((error) => console.log(error));
