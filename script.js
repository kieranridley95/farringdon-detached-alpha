const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-bar ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
