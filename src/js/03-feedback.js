import throttle from "lodash.throttle"

const feedbackEl = document.querySelector('.feedback-form');

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
const buttonEl = document.querySelector('button')

const saveFeedback = JSON.parse(localStorage.getItem("feedback-form-state"));
 if(feedbackElsaveFeedback){
    inputEmail.value = saveFeedback.email;
    inputMessage.value = saveFeedback.message;
    buttonEl.disabled = !(inputEmail.value && inputMessage.value);
 }

 form.addEventListener('input', throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email:  inputEmail.value,
        message: inputMessage.value,
    }))

    buttonEl.disabled = !(inputEmail.value && inputMessage.value);
}, 500));

form.addEventListener('submit', ev => {
    ev.preventDefeult();

    console.log({email:  inputEmail.value,
    message: inputMessage.value,})
    
    form.reset();
    localStorage.removeItem("feedback-form-state");
    buttonEl.disabled = true;
})
