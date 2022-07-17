import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export function onCreateTask(event) {
  const taskInputField = document.querySelector('.task-input');
  const text = taskInputField.value;

  if (!text) {
    return;
  }
  taskInputField.value = '';

  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random(2).toFixed(2),
  });
  setItem('tasksList', newTasksList);
  //   taskInputField.innerHTML = '';
  //   listElem.innerHTML = '';

  renderTasks();
}
