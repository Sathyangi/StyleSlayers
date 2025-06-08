// Slide functionality
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

setInterval(showNextSlide, 3000);
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }
  
function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Handle negative index
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
