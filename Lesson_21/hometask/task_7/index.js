//input: string
//output: none

export function createButton(text) {
  const getBody = document.querySelector('body');
  const getButton = document.createElement(`button`);
  getBody.append(getButton);
  getButton.textContent = text;
}
// createButton('Look');
// createButton('Go');
// createButton('Push');
// createButton('Push.Me');
