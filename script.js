// Mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
}
// Theme
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
document.body.classList.add('dark');
}

function updateIcon() {
icon.setAttribute('fill', document.body.classList.contains('dark') ? '#f1c40f' : '#111');
}

toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
updateIcon();
});

updateIcon();
// Scroll

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
