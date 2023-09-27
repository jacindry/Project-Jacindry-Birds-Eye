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

  // Remove and re-add the animation class to trigger it on slide change
  const slides = carousel.querySelectorAll('.carousel-slide');
  slides.forEach((slide, index) => {
    slide.querySelector('.slider_img_text').classList.remove('slide-in');
    if (index === currentIndex) {
      slide.querySelector('.slider_img_text').classList.add('slide-in');
    }
  });
}

// Automatic carousel slide change
setInterval(() => {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000); // Change slide every 5 seconds (adjust as needed)
