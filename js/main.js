// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('visible');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run on load

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
});
