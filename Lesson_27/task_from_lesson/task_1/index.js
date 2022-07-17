// localStorage.setItem('user', 'Bob');
// localStorage.getItem('user');
// localStorage.clear();
// localStorage.setItem('data', ['Bob', ' Alyona', ' Olha']);
// console.log(localStorage.getItem('data'));
// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

// const user = {
//   name: 'Tom',
//   age: 17,
//   isStudent: false,
//   driveLicense: null,
//   hobbies: ['footbal', 'diving'],
//   fine: undefined,
//   education: [
//     {
//       name: 'MIT precourse',
//       graduateDate: '2020-05-04T14:48:46.105z',
//     },
//   ],
// };

// console.log(user);

// const newSerilizeObj = JSON.stringify(user, null, 2);
// console.log(newSerilizeObj);
// const newParseObj = JSON.parse(newSerilizeObj);
// console.log(newParseObj);

//input: none;
//output: object

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());
