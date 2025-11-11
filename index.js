/** @type {HTMLFormElement} */
const form = document.querySelector('#login-form');
form.addEventListener('submit', event => {
  event.preventDefault(); // No backend
  const user = event.target.elements.role.value;
  globalThis.location.href = `./${user}`;
});