const selectInput = document.querySelector(`.search__input`);
const selectButton = document.querySelector(`.search__btn`);
// input:none
// output: none
function addEventListener() {
  console.log(selectInput.value);
}

const outText = addEventListener.bind();
selectButton.addEventListener(`click`, outText);
