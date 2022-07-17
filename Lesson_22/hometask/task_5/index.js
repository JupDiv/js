const selectButton = document.querySelector(`.single-use-btn`);

function addEventListener() {
  console.log(`clicked`);
  selectButton.removeEventListener(`click`, outputText);
}

const outputText = addEventListener.bind();
selectButton.addEventListener(`click`, outputText);
