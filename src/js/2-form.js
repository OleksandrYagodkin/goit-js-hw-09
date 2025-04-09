const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.querySelector("input[name='email']");
const textArea = form.querySelector('textarea');

const formData = { email: '', message: '' };

form.addEventListener('submit', handleSubmit);
textArea.addEventListener('input', handleInput);
email.addEventListener('input', handleInput);

populateForm();

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert(`Fill please all fields`);
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

function populateForm() {
  const saveData = localStorage.getItem(STORAGE_KEY);

  if (saveData) {
    const saveFormData = JSON.parse(saveData);
    formData.email = saveFormData.email;
    formData.message = saveFormData.message;

    email.value = formData.email;
    textArea.value = formData.message;
  }
}
