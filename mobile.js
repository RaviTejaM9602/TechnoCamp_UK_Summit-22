const openNav = document.querySelector('.top');
const closebtn = document.querySelector('.closebtn');
const myNavMenu = document.getElementById('myNav_mobile');
const overlayContent = document.querySelector('.overlay-content');

function openMobileMenu() {
  myNavMenu.style.width = '100%';
}

openNav.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  myNavMenu.style.width = '0%';
}

closebtn.addEventListener('click', closeMobileMenu);
overlayContent.addEventListener('click', closeMobileMenu);