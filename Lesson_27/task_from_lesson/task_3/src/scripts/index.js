import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
function onStorageChange(event) {
  if (event.key === 'tasksList') {
    renderTasks();
  }
}

window.addEventListener('storage', onStorageChange);

// const selectButtonInput = document.querySelector('.create-task-btn');

// function onCreateTask(event) {
//   const taskInputField = document.querySelector('.task-input');
//   const inputFieldValue = taskInputField.value;
//   if (inputFieldValue === '') {
//     return;
//   }
//   tasks.unshift({ text: inputFieldValue, done: false });

//   taskInputField.value = '';
//   taskInputField.innerHTML = '';
//   listElem.innerHTML = '';

//   renderTasks(tasks);
// }

// selectButtonInput.addEventListener('click', onCreateTask);

// function onChangeCheckbox(event) {
//   const checkbox = event.target.classList.contains('list__item-checkbox');
//   if (!checkbox) {
//     return;
//   }
//   const checkBoxId = event.target.dataset.id;

//   tasks[checkBoxId].done = true;

//   if (!event.target.checked) {
//     tasks[checkBoxId].done = false;
//   }

//   renderTasks(tasks);
// }

// listElem.addEventListener('click', onChangeCheckbox);
