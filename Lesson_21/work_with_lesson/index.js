'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */

//create alement
//

//input: array;
//output: none;
export const renderTasks = (tasksList) => {
  const listElement = document.querySelector(`.list`);

  //callback
  //input: object
  //output: new array
  const listItemsElems = [...tasksList]
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      let listItemElement = document.createElement(`li`);
      listItemElement.classList.add(`list__item`);
      if (done) {
        listItemElement.classList.add('list__item_done');
      }
      let checkBoxElement = document.createElement(`input`);
      checkBoxElement.setAttribute('type', 'checkbox');
      checkBoxElement.checked = done;
      checkBoxElement.classList.add('list__item-checkbox');
      listItemElement.append(checkBoxElement, text);

      return listItemElement;
    });

  listElement.append(...listItemsElems);
};

renderTasks(tasks);
