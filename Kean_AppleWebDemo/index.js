// Select the carousel container
const carousel = document.querySelector('.carousel');

// Scroll left
function scrollLeft() {
  carousel.scrollBy({ left: -350, behavior: 'smooth' }); // Adjust the `left` value to control scroll distance
}

// Scroll right
function scrollRight() {
  carousel.scrollBy({ left: 350, behavior: 'smooth' }); // Adjust the `left` value to control scroll distance
}