// Mobile nav toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
