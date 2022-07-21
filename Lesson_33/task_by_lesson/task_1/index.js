const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
let userLocation = document.querySelector('.user__location');

const userNameInput = document.querySelector('.name-form__input');
const userBtnInput = document.querySelector('.name-form__btn');

const sendRequestFetch = (name) => {
  return fetch(`http://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
};
const userRender = (gitResponse) => {
  console.log(gitResponse);
  const { avatar_url, location, name } = gitResponse;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = location ? location : null;
};

const onClickButton = () => {
  const getName = userNameInput.value;
  sendRequestFetch(getName).then((response) => userRender(response));
};

userBtnInput.addEventListener('click', onClickButton);
