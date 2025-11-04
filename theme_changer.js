document.addEventListener('DOMContentLoaded', () => {
  const
    themeButton = document.querySelector('#themeButton'),
    themeButtonSpan = themeButton.querySelector('span');

  let currentThemeSetting = localStorage.getItem('theme');
  themeButtonSpan.textContent = `${currentThemeSetting}_mode`;

  if (currentThemeSetting)
    document.documentElement.dataset.theme = currentThemeSetting;

  themeButton.addEventListener('click', () => {
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem('theme', newTheme);
    currentThemeSetting = newTheme;

    themeButtonSpan.textContent = `${currentThemeSetting}_mode`;
  });
});