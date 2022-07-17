const selectInput = document.querySelector('.text-input');

function addEventListener() {
  console.log(selectInput.value);
}

const addListener = addEventListener.bind();

selectInput.addEventListener('change', addListener);
