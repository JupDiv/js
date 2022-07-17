//input: number
//output: none

export function squaredNumbers() {
  const listItems = document.querySelectorAll('.number');
  [...listItems].map(
    (elem) =>
      (elem.dataset.squaredNumber = elem.dataset.number * elem.dataset.number)
  );
}

// squaredNumber();
