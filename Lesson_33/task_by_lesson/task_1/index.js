const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

const userNameInput = document.querySelector('.name-form__input');
const userBtnInput = document.querySelector('.name-form__btn');

const sendRequestFetch = (name) => {
  return fetch(`http://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
};
const userRender = (gitResponse) => {
  const { avatar_url, name, location } = gitResponse;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? `from ${location}` : null;
};

const onClickButton = () => {
  const getName = userNameInput.value;
  sendRequestFetch(getName).then((response) => userRender(response));
};

userBtnInput.addEventListener('click', onClickButton);
