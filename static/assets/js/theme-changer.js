document.addEventListener('DOMContentLoaded', () => {
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
    /** @type {HTMLButtonElement} */ themeButton = themeButtonsContainer.firstElementChild,
    /** @type {NodeListOf<HTMLButtonElement>} */ themeButtons = themeButtonsContainer.querySelectorAll('.themeButton:not(:first-child)'),
    themeButtonSpan = themeButton.querySelector('span');

  let currentThemeSetting = localStorage.getItem('theme');

  if (themes.has(currentThemeSetting)) {
    themeButtonSpan.textContent = themes.get(currentThemeSetting);
  } else {
    currentThemeSetting = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    themeButtonSpan.textContent = currentThemeSetting === 'dark' ? 'light_mode' : 'dark_mode';
  }

  if (currentThemeSetting)
    document.documentElement.dataset.theme = currentThemeSetting;

  themeButtonsContainer.addEventListener('mouseleave', () => {
    for (const button of themeButtons) button.style.visibility = 'hidden';
  });
  themeButton.addEventListener('mouseenter', () => {
    for (const button of themeButtons) button.style.visibility = 'visible';
  });

  themeButton.addEventListener('click', () => {
    const selectedTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    toggleTheme(selectedTheme);
  });

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let classes = button.className.split(' ');

      const selectedTheme = classes.find((c) => c.startsWith('theme-')).replace('theme-', '');

      if (selectedTheme && themes.has(selectedTheme)) {
        toggleTheme(selectedTheme);
      }
    });
  });
});