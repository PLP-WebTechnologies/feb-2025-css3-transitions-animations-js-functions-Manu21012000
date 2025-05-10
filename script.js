const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const animateBtn = document.getElementById("animateBtn");

// Function to set theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  localStorage.setItem('theme', theme);
}

// Load theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
};

// Toggle theme and store in localStorage
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Animate button on click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');

  // Remove animation class after animation completes
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('animate');
  }, { once: true });
});
