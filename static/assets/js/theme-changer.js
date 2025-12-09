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

  function toggleAllVisible(htmlnodelist) {
    for (const htmlnode of htmlnodelist) htmlnode.classList.toggle('visible');
  }

  const
    themeButtonsContainer = document.querySelector('#themeButtons'),
    themeButton = themeButtonsContainer.firstElementChild,
    themeButtons = themeButtonsContainer.querySelectorAll('.themeButton:not(:first-child)'),
    themeButtonSpan = themeButton.querySelector('span');

  let currentThemeSetting = localStorage.getItem('theme');

  if (!themes.has(currentThemeSetting))
    currentThemeSetting = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  toggleTheme(currentThemeSetting);

  themeButton.addEventListener('mouseenter', () => toggleAllVisible(themeButtons));
  themeButtonsContainer.addEventListener('mouseleave', () => toggleAllVisible(themeButtons));

  themeButton.addEventListener('click', () => toggleTheme(currentThemeSetting === 'dark' ? 'light' : 'dark'));

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTheme = button.className.split(' ').find((c) => c.startsWith('theme-')).replace('theme-', '');

      if (selectedTheme && themes.has(selectedTheme)) toggleTheme(selectedTheme);
    });
  });
});