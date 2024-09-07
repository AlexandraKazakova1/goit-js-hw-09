let formData = {
  email: "",
  message: ""
};
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
}
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
    formData[name] = value.trim();
      saveToLocalStorage();
});
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
    }
    console.log(formData);
      localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  form.reset();
});