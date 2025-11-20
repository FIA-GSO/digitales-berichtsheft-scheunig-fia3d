document.addEventListener('DOMContentLoaded', () => {
    const burgerMenuButton = document.getElementById('nav-burgermenu');
    const navbar = document.querySelector('.navbar');

    burgerMenuButton.addEventListener('click', () => {
        navbar.querySelectorAll('li:not(:first-child)').forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});