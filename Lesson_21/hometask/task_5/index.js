//input: string
//output: none

export function setButton(buttonText) {
  const getBody = document.querySelector(`body`);
  getBody.innerHTML = `<button>${buttonText}`;
}

// setButton('Like go HELL');
// setButton('Just do it');
// setButton(999);
// setButton(Infinity);
