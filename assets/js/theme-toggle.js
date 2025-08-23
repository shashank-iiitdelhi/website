document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const logo = document.getElementById('logo');

  const setButtonText = (theme) => {
    themeToggleButton.textContent = theme === 'dark'
      ? 'Switch to light mode'
      : 'Switch to dark mode';
  };

  const swapLogo = (theme) => {
    if (!logo) return;
    logo.src = theme === 'dark'
      ? 'assets/images/Favicon_S_Large_Dark.png'
      : 'assets/images/Favicon_S_Large_Light.png';
  };

  const updateTheme = (theme) => {
    body.classList.toggle('dark', theme === 'dark');
    body.classList.toggle('light', theme === 'light');
    themeToggleButton.classList.toggle('dark-mode-btn', theme === 'dark');
    themeToggleButton.classList.toggle('light-mode-btn', theme === 'light');

    setButtonText(theme);
    swapLogo(theme);
    localStorage.setItem('theme', theme);
  };

  // initialize
  const saved = localStorage.getItem('theme');
  const initial = saved ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  updateTheme(initial);

  themeToggleButton.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
    updateTheme(newTheme);
  });
});
