const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

const sendRequestFetch = (name) => {
  return fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
};
const userRender = (userData) => {
  const { name, avatar_url, location } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : null;
};
const inputData = document.querySelector('.name-form__input');
const btnInput = document.querySelector('.name-form__btn');

const onClickButton = () => {
  const getName = inputData.value;
  sendRequestFetch(getName).then((response) => userRender(response));
};

btnInput.addEventListener('click', onClickButton);
