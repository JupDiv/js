const selectInput = document.querySelector(`.task-status`);

//input: none
//output: none
function addEvenListener() {
  console.log(selectInput.checked);
}

const evenListener = addEvenListener.bind();
selectInput.addEventListener(`change`, evenListener);
