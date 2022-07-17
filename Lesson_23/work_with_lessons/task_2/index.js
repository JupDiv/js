function generateNumbersRange(from, to) {
  const array = [];
  for (let index = from; index <= to; index += 1) {
    array.push(index);
  }
  return array;
}

function getLinesSeats() {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) => `<div 
                         class="sector__seat" data-seat-number="${seatNumber}"> 
                       </div>`
    )
    .join('');
}

function getSectorLines() {
  const seatsString = getLinesSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) => `<div 
                         class="sector__line" data-line-number="${lineNumber}"> 
                        ${seatsString}
                       </div>`
    )
    .join('');
}
// debugger;
const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesStrings = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) => `<div 
                         class="sector" data-sector-number="${sectorNumber}"> 
                        ${linesStrings} </div>`
    )
    .join('');

  // console.log(sectorsString);
  arenaElem.innerHTML = sectorsString;
};
function onSeatSelect(event) {
  console.log(event.target);
  console.dir(event.currentTarget);
  const isSeat = event.target.classList.contains('sector__seat');
  // console.log(isSeat);
  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}
arenaElem.addEventListener('click', onSeatSelect);
renderArena();
