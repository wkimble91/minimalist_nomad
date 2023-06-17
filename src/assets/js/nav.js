// Hamburger Functionality
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

//Adds scrolled class to header when scrolled
const header = document.querySelector('#header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('header-scrolled', entries[0].intersectionRatio < 1);
});

navObserver.observe(scrollWatcher);
