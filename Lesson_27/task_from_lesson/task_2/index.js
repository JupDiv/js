const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

function onChangeValue(event) {
  const selectButton = event.target.classList.contains('counter__btn');
  const selectButtonItem = event.target.classList.contains('fa-solid');

  if (!(selectButton || selectButtonItem)) {
    return;
  }
  const { action } = event.target.dataset;
  let oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
}

counterElem.addEventListener('click', onChangeValue);

const onStorageChange = (event) => {
  counterValueElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChange);

function onDocumentLoader() {
  counterValueElem.textContent = localStorage.getItem('counterValue');
}

document.addEventListener('DOMContentLoaded', onDocumentLoader);
