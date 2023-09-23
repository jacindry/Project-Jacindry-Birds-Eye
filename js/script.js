window.addEventListener('load', function () {
  // // Pageloader
  // document.querySelector(".pageloader").classList.add("fade-out");
  // this.setTimeout(function () {
  //   document.querySelector(".pageloader").getElementsByClassName.display =
  //     "none";
  // }, 6000);
  // Animation Scroll
  AOS.init();
});

// ---------------------------------------
//              Toggler Nav
// ---------------------------------------

const navToggler = document.querySelector('.nav-toggler');

// navToggler.addEventListener("click", (toggleNav) => {
//   navToggler.classList.toggle("active");
//   document.querySelector(".nav").classList.toggle("displayMenu");
// });

navToggler.addEventListener('click', toggleNav);

function toggleNav() {
  navToggler.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('displayMenu');
}

// ---------------------------------------
//     Close Nav When Click Menu Items
// ---------------------------------------

document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-item')) {
    toggleNav();
  }
});

// ---------------------------------------
//              Sticky Header
// ---------------------------------------
window.addEventListener('scroll', function () {
  if (this.scrollY > 60) {
    document.querySelector('.header').classList.add('sticky');
  } else {
    document.querySelector('.header').classList.remove('sticky');
  }
});

// ---------------------------------------
//              Menu Tabs
// ---------------------------------------

const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('menu-tab-item') &&
    !e.target.classList.contains('active')
  ) {
    const menuName = e.target.getAttribute('data-target');

    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    const menuSelector = document.querySelector('.menu-section');

    menuSelector
      .querySelector('.menu-tab-content.active')
      .classList.remove('active');
    menuSelector.querySelector(menuName).classList.add('active');

    // Animation for Menu
    AOS.init();
  }
});
