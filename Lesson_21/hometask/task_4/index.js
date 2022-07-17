//input: text
//output: none
export function setTitle(text) {
  const getTitle = document.querySelector(`.title`);
  getTitle.textContent = text;
}

// setTitle('Hello, i want learn  JS');
// setTitle(24 + 660 + 66);
// setTitle(undefined);
// setTitle(Infinity);
// setTitle(NaN);
