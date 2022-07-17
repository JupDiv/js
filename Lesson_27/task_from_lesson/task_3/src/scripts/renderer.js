import { getItem, setItem } from './storage.js';

function compareTask(a, b) {
  return a.done - b.done;
}
function compareTaskTime(a, b) {
  return a.createDate - b.createDate;
}

//create cheackBox
function createCheckBox({ done, id }) {
  const checkboxElem = document.createElement('input');

  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
}

//create list
function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkBox = createCheckBox({ done, id });

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkBox, text);

  return listItemElem;
}

//Render
export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  const tasksElems = getItem('tasksList') || [];

  listElem.innerHTML = '';

  const taskElems = tasksElems
    .sort(compareTaskTime)
    .sort(compareTask)
    .map(createListItem);
  // [...tasksElems].map((elem) => elem.text));
  listElem.append(...taskElems);
};
