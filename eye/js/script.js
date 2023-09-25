window.addEventListener('load', function () {
  AOS.init();
});

// Hamburger Icon
const button = document.querySelector('#menu-button'); 
// Menu
const menu = document.querySelector('#menu'); 

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
