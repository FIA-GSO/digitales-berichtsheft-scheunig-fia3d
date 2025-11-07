document.addEventListener('DOMContentLoaded', () => {
  const
    themeButtons = document.querySelector('#themeButtons'),
    themeButton = document.querySelector('#themeButton'),
    themeButtonSpan = themeButton.querySelector('span');
    prettyPinkButton = document.querySelector('.theme-pretty-pink');
    blackGoldButton = document.querySelector('.theme-black-gold');
    orangeBlackButton = document.querySelector('.theme-orange-black');

  let currentThemeSetting = localStorage.getItem('theme');
  let mode = '';

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
      currentThemeSetting = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      mode = currentThemeSetting === 'dark' ? 'light' : 'dark';
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

    let notCurrentThemeSetting = currentThemeSetting === 'dark' ? 'light' : 'dark';
    themeButtonSpan.textContent = `${notCurrentThemeSetting}_mode`;
  });

  themeButton.addEventListener('mouseenter', () => {
    prettyPinkButton.style.visibility = 'visible';
    blackGoldButton.style.visibility = 'visible';
    orangeBlackButton.style.visibility = 'visible';
    themeButtons.addEventListener('mouseleave', () => {
      prettyPinkButton.style.visibility = 'hidden';
      blackGoldButton.style.visibility = 'hidden';
      orangeBlackButton.style.visibility = 'hidden';
    });
  });
  blackGoldButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'black-gold';
    localStorage.setItem('theme', 'black-gold');
    currentThemeSetting = 'black-gold';
    themeButtonSpan.textContent = `diamond`;
  });
  orangeBlackButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'orange-black';
    localStorage.setItem('theme', 'orange-black');
    currentThemeSetting = 'orange-black';
    themeButtonSpan.textContent = `18_up_rating`;
  });
  prettyPinkButton.addEventListener('click', () => {
    document.documentElement.dataset.theme = 'pretty-pink';
    localStorage.setItem('theme', 'pretty-pink');
    currentThemeSetting = 'pretty-pink';
    themeButtonSpan.textContent = `favorite`;
  });
});