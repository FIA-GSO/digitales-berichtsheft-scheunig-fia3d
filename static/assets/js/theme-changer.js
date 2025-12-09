document.addEventListener('DOMContentLoaded', () => {
  // Map([['theme', 'material symbols icon']])
  const themes = new Map([
    ['dark', 'light_mode'],
    ['light', 'dark_mode'],
    ['black-gold', 'diamond'],
    ['pretty-pink', 'favorite'],
    ['orange-black', '18_up_rating'],
  ]);

  function toggleTheme(selectedTheme) {
    document.documentElement.dataset.theme = selectedTheme;
    localStorage.setItem('theme', selectedTheme);
    currentThemeSetting = selectedTheme;
    themeButtonSpan.textContent = themes.get(selectedTheme);
  }

  const
    themeButtonsContainer = document.querySelector('#themeButtons'),
    themeButton = themeButtonsContainer.firstElementChild,
    themeButtons = themeButtonsContainer.querySelectorAll('.themeButton:not(:first-child)'),
    themeButtonSpan = themeButton.querySelector('span');

  let currentThemeSetting = localStorage.getItem('theme');

  if (!themes.has(currentThemeSetting)) {
    currentThemeSetting = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  toggleTheme(currentThemeSetting);

  themeButton.addEventListener('mouseenter', () => {
    for (const button of themeButtons) button.classList.toggle('visible');
  });
  themeButtonsContainer.addEventListener('mouseleave', () => {
    for (const button of themeButtons) button.classList.toggle('visible');
  });

  themeButton.addEventListener('click', () => {
    const selectedTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    toggleTheme(selectedTheme);
  });

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTheme = button.className.split(' ').find((c) => c.startsWith('theme-')).replace('theme-', '');

      if (selectedTheme && themes.has(selectedTheme)) {
        toggleTheme(selectedTheme);
      }
    });
  });
});