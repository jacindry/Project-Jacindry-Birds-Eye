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

// Slider Js
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  //
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function (event) {
  reloadSlider();
};
