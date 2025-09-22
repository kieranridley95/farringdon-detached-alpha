// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
