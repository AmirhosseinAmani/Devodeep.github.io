let currentLang = 'en';
function switchLang() {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}
