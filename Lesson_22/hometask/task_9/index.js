const selectDiv = document.querySelector(`.pagination`);
const selectButton = document.querySelectorAll(`.pagination__page`);

//input: event i don't know what it type
//output: none
function getNumber(event) {
  console.log(event.target.dataset.pageNumber);
}
//input: callback
//output: none
const handleClick = getNumber.bind();
[...selectButton].map((elem) => elem.addEventListener(`click`, handleClick));
