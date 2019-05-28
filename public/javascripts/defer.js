// toggles mobile nav hamburger menu
var burger = document.querySelector('.navbar-burger');
var navItems = document.querySelectorAll('.navbar-item');

burger.addEventListener('click', toggleBurger);
navItems.forEach((item) => {
   item.addEventListener('click', toggleBurger);
});

function toggleBurger() {
   document.querySelector('.navbar-menu').classList.toggle('is-active');
};