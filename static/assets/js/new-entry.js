document.addEventListener('DOMContentLoaded', () => {
  const buttonCancel = document.querySelector('.button-cancel');
  buttonCancel.addEventListener('click', () => {
    globalThis.location.replace('/azubi');
  });
});