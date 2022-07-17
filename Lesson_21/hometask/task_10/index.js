export function manageClasses() {
  const mainList = document.querySelector('.list');
  const firstListItem = document.querySelector('.one');
  const secondListItem = document.querySelector('.two');
  const thirdListItem = document.querySelector('.three');
  const fourthListItem = document.querySelector('.four');

  firstListItem.classList.add('selected');
  secondListItem.classList.remove('selected');
  thirdListItem.classList.toggle('three_done');

  if (fourthListItem.classList.contains('some-class')) {
    fourthListItem.classList.add('another-class');
  }
}

// manageClasses();
