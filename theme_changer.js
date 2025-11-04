
document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeButton');
  const themeButtonSpan = themeButton.querySelector('span');
  
  let currentThemeSetting = localStorage.getItem('theme');
  themeButtonSpan.innerText = `${currentThemeSetting}_mode`;

  if (currentThemeSetting)
    document.documentElement.setAttribute('data-theme', currentThemeSetting);

  themeButton.addEventListener('click', () => {
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
    currentThemeSetting = newTheme;

    themeButtonSpan.innerText = `${currentThemeSetting}_mode`;
  });
});