document.addEventListener('DOMContentLoaded', () => {
  const
    themeButtonsContainer = document.querySelector('#themeButtons'),
    /** @type {HTMLButtonElement} */ themeButton = themeButtonsContainer.firstElementChild,
    /** @type {NodeListOf<HTMLButtonElement>} */ themeButtons = themeButtonsContainer.querySelectorAll('.themeButton:not(:first-child)'),
    themeButtonSpan = themeButton.querySelector('span'),
    prettyPinkButton = themeButtonsContainer.querySelector('.theme-pretty-pink'),
    blackGoldButton = themeButtonsContainer.querySelector('.theme-black-gold'),
    orangeBlackButton = themeButtonsContainer.querySelector('.theme-orange-black');

  let
    currentThemeSetting = localStorage.getItem('theme'),
    mode;

  switch (currentThemeSetting) {
    case 'dark':
      mode = 'light_mode';
      break;
    case 'light':
      mode = 'dark_mode';
      break;
    case 'black-gold':
      mode = 'diamond';
      break;
    case 'pretty-pink':
      mode = 'favorite';
      break;
    case 'orange-black':
      mode = '18_up_rating';
      break;
    default:
      currentThemeSetting = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      mode = currentThemeSetting === 'dark' ? 'light_mode' : 'dark_mode';
      break;
  }

  themeButtonSpan.textContent = mode;

  if (currentThemeSetting)
    document.documentElement.dataset.theme = currentThemeSetting;

  themeButton.addEventListener('click', () => {
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem('theme', newTheme);
    currentThemeSetting = newTheme;

    const notCurrentThemeSetting = currentThemeSetting === 'dark' ? 'light' : 'dark';
    themeButtonSpan.textContent = `${notCurrentThemeSetting}_mode`;
  });

  themeButtonsContainer.addEventListener('mouseleave', () => {
    for (const button of themeButtons) button.style.visibility = 'hidden';
  });
  themeButton.addEventListener('mouseenter', () => {
    for (const button of themeButtons) button.style.visibility = 'visible';
  });

  blackGoldButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'black-gold';
    localStorage.setItem('theme', 'black-gold');
    currentThemeSetting = 'black-gold';
    themeButtonSpan.textContent = 'diamond';
  });
  orangeBlackButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'orange-black';
    localStorage.setItem('theme', 'orange-black');
    currentThemeSetting = 'orange-black';
    themeButtonSpan.textContent = '18_up_rating';
  });
  prettyPinkButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'pretty-pink';
    localStorage.setItem('theme', 'pretty-pink');
    currentThemeSetting = 'pretty-pink';
    themeButtonSpan.textContent = 'favorite';
  });
});