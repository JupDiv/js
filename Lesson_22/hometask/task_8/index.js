const selectInput = document.querySelector(`.task-status`);

//input: event
//output: none

function outputValue(even) {
  if (selectInput.checked) {
    console.log(even.target.checked);
    return;
  }
  console.log(even.target.checked);
}
const funcOutput = outputValue.bind();
selectInput.addEventListener(`change`, funcOutput);
