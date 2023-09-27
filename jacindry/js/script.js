window.addEventListener('load', function () {
  AOS.init();
});

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carousel.children.length - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

// Automatic carousel slide change
setInterval(() => {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000); // Change slide every 5 seconds (adjust as needed)
