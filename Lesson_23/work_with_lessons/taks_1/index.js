// const emailInputElem = document.querySelector('#email');
// const passwordInputElem = document.querySelector('#password');

// const emailTextError = document.querySelector('.error-text_email');
// const passwordTextError = document.querySelector('.error-text_password');

// const isRequired = (value) => (value ? undefined : 'Required field');

// const isEmail = (value) =>
//   value.includes('@') ? undefined : 'Should be an email';

// const validatorByField = {
//   email: [isRequired, isEmail],
//   password: [isRequired],
// };

// const validate = (fieldName, value) => {
//   const validators = validatorByField[fieldName];
//   return validators
//     .map((validator) => validator(value))
//     .filter((errorText) => errorText)
//     .join(', ');
// };

// const onEmailChange = (event) => {
//   const errorText = validate('email', event.target.value);
//   emailTextError.textContent = errorText;
// };

// const onPasswordChange = (event) => {
//   const errorText = validate('password', event.target.value);
//   passwordTextError.textContent = errorText;
// };

// emailInputElem.addEventListener('input', onEmailChange);
// passwordInputElem.addEventListener('input', onPasswordChange);

// const formElem = document.querySelector('.login-form');

// const onFormSubmit = (event) => {
//   event.preventDefault();
//   const fromData = [...new FormData(formElem)].reduce(
//     (acc, [field, value]) => ({ ...acc, [field]: value }),
//     {}
//   );
//   console.log(fromData);
//   alert(JSON.stringify(fromData));
// };

// formElem.addEventListener('submit', onFormSubmit);

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailTextError = document.querySelector('.error-text_email');
const passwordTextError = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required field');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailTextError.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordTextError.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formFields = [
    ['email', new FormData(formElem).get('email')],
    ['password', new FormData(formElem).get('password')],
  ];
  const formData = formFields.reduce((acc, formFields) => {
    const prop = formFields[0];
    const value = formFields[1];

    return {
      ...acc,
      [prop]: value,
    };
  }, {});

  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
