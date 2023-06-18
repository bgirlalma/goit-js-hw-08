import throttle from "lodash.throttle"

const feedbackEl = document.querySelector('.feedback-form');

const inputEmail = feedbackEl.elements.email;
const inputMessage = feedbackEl.elements.message;
const buttonEl = document.querySelector('button');

const saveFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (saveFeedback) {
  inputEmail.value = saveFeedback.email;
  inputMessage.value = saveFeedback.message;
  buttonEl.disabled = !(inputEmail.value && inputMessage.value);
}

feedbackEl.addEventListener('input', throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify({
    email: inputEmail.value,
    message: inputMessage.value,
  }));

  buttonEl.disabled = !(inputEmail.value && inputMessage.value);
}, 500));

feedbackEl.addEventListener('submit', ev => {
  ev.preventDefault();

  console.log({ email: inputEmail.value, message: inputMessage.value });

  feedbackEl.reset();
  localStorage.removeItem('feedback-form-state');
  buttonEl.disabled = true;
});