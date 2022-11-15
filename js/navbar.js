const hamburger = document.querySelector('.header__hamburger');
const navMenu = document.querySelector('.header__nav');
const navLink = document.querySelectorAll('.header__nav-item');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
