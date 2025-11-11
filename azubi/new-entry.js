document.addEventListener('DOMContentLoaded', () => {
    const buttonCancel = document.querySelector('.button-cancel');
    buttonCancel.addEventListener('click', () => {
        window.location.replace('/azubi');
    });
});