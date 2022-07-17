//input: none
//output: none

export function finishForm() {
  const mainForm = document.querySelector('.login-form');
  const createInput = document.createElement(`input`);
  mainForm.prepend(createInput);
  createInput.setAttribute('name', 'login');
  createInput.setAttribute('type', 'text');

  const firstListsItem = mainForm.querySelector('input[name="password"]');
  firstListsItem.setAttribute('type', 'password');
}
// finishForm();
