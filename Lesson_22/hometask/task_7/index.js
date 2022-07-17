const selectInput = document.querySelector(`.text-input`);

function getText(event) {
  console.log(event.target.value);
}
const outputText = getText.bind();
selectInput.addEventListener(`change`, outputText);
