const buttonSelect = document.querySelectorAll('.btn');

// input: none
// input: none

const handleClick = (event) => {
  console.log(event.target.textContent);
};

// input: func
// input: new array
// console.log(buttonSelect);
// console.log([...buttonSelect]);
const test = [...buttonSelect].map((elem) =>
  elem.addEventListener('click', handleClick)
);
