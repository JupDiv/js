//input: number;
//output: none

//Передаем аргумент
//Ищем по этому аргументу дата атрибут
//От ребенка поднимаюсь к родителю
//вывожу дата атрибут родителя

function getSection(num) {
  const findElement = document.querySelector(`span[data-number="${num}"]`);
  const parents = findElement.closest(`.box`);
  return parents.dataset.section;
}

console.log(getSection(6));
