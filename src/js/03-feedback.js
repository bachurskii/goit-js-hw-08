import { throttle } from 'lodash';
const form = document.querySelector('.feedback-form');
const emailForm = form.querySelector('input[name="email"]');
const messageForm = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener(
  'input',
  throttle(() => {
    const checkFields = {
      email: emailForm.value,
      message: messageForm.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(checkFields));

    if (emailForm.value && messageForm.value) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }, 500)
);

window.addEventListener('DOMContentLoaded', () => {
  const checkPages = localStorage.getItem('feedback-form-state');
  if (checkPages) {
    const checkFields = JSON.parse(checkPages);
    emailForm.value = checkFields.email;
    messageForm.value = checkFields.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailForm.value && messageForm.value) {
    const checkFields = {
      email: emailForm.value,
      message: messageForm.value,
    };

    localStorage.removeItem('feedback-form-state');
    emailForm.value = '';
    messageForm.value = '';
    submitButton.disabled = true;

    console.log(checkFields);
  }
});
