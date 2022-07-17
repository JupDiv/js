// //input: none
// //output: none

export function finishList() {
  const getList = document.querySelector('.list');
  const getItemList = document.querySelector('.special');
  const firstItem = document.createElement('li');
  const lastItem = document.createElement('li');
  const fourthItem = document.createElement('li');
  const sixthItem = document.createElement('li');

  getList.prepend(firstItem);
  firstItem.textContent = 1;

  getItemList.before(fourthItem);
  fourthItem.textContent = 4;

  getItemList.after(sixthItem);
  sixthItem.textContent = 6;

  getList.append(lastItem);
  lastItem.textContent = 8;
}

// finishList();
