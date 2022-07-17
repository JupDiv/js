const selectButton = document.querySelector(`.create-btn`);

//input none;
//output: none
function addEventListener() {
  alert('done');
}

const addListener = addEventListener.bind();

selectButton.addEventListener('click', addListener);
