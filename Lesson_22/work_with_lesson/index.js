const selectDiv = document.querySelector(`.rect_div`);
const selectP = document.querySelector(`.rect_p`);
const selectSpan = document.querySelector(`.rect_span`);

//input: string
//output: none;
function logTarget(color, text) {
  const eventsListElem = document.querySelector(`.events-list`);

  eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px;">${text}</span>`;
}
//input: none;
//output: none;
function clean() {
  const selectButtonClear = document.querySelector(`.events-list`);
  selectButtonClear.innerHTML = '';
}
//input: none;
//output: none;
function onEventListener() {
  selectDiv.addEventListener('click', logGreenDiv);
  selectP.addEventListener('click', logGreenP);
  selectSpan.addEventListener('click', logGreenSpan);

  selectDiv.addEventListener('click', logGrayDiv, true);
  selectP.addEventListener('click', logGrayP, true);
  selectSpan.addEventListener('click', logGraySpan, true);
}
//input: none;
//output: none;
function offEventListener() {
  selectDiv.removeEventListener('click', logGreenDiv);
  selectP.removeEventListener('click', logGreenP);
  selectSpan.removeEventListener('click', logGreenSpan);

  selectDiv.removeEventListener('click', logGrayDiv, true);
  selectP.removeEventListener('click', logGrayP, true);
  selectSpan.removeEventListener('click', logGraySpan, true);
}

const logGreenDiv = logTarget.bind(null, 'green', 'DIV');
const logGreenP = logTarget.bind(null, 'green', 'P');
const logGreenSpan = logTarget.bind(null, 'green', 'SPAN');

const logGrayDiv = logTarget.bind(null, 'grey', 'DIV');
const logGrayP = logTarget.bind(null, 'grey', 'P');
const logGraySpan = logTarget.bind(null, 'grey', 'SPAN');

const buttonClear = document.querySelector(`.clear-btn`);
const cleanField = clean.bind();
buttonClear.addEventListener('click', cleanField);

const selectEventListenerOn = document.querySelector(`.attach-handlers-btn`);
const attachEventListener = onEventListener.bind();
selectEventListenerOn.addEventListener('click', attachEventListener);

const selectEventListenerOff = document.querySelector(`.remove-handlers-btn`);
const removeEventListener = offEventListener.bind();
selectEventListenerOff.addEventListener('click', removeEventListener);

onEventListener();
