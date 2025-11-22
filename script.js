// Toggle menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// ✅ AUTO CLOSE when link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ✅ SAFETY: ensure menu is closed on page load / refresh
window.addEventListener('load', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
});
