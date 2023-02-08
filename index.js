const popmenu = document.querySelector('.nav-mobile-popup');
const closepop = document.querySelector('.close-popup');
const menuIcon = document.querySelector('.menu-link');

menuIcon.addEventListener('click', () => {
  popmenu.style.display = 'flex';
});
closepop.addEventListener('click', () => {
  popmenu.style.display = 'none';
});