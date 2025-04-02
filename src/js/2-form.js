const formData = {
  email: '',
  message: '',
};
const feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);
if (feedbackFormState) {
  Object.assign(formData, feedbackFormState);
}

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.elements.email.value = formData.email;
feedbackForm.elements.message.value = formData.message;

feedbackForm.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = feedbackForm.elements.email.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    formData.message = feedbackForm.elements.message.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.table(formData);
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
  console.table(formData);
});
