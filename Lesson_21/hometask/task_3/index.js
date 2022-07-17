export function getTitle() {
  const getTitle = document.querySelector(`.title`);
  return getTitle.textContent;
}

export function getDescription() {
  const getDescription = document.querySelector(`.about`);
  return getDescription.innerText;
}

export function getPlans() {
  const getParagraph = document.querySelector('.plans');
  return getParagraph.innerHTML;
}

export function getGoal() {
  const getGoal = document.querySelector('.goal');
  return getGoal.outerHTML;
}
console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
