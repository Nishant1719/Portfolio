let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Show the first slide when the page loads
showSlide(0);

// Automatic slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
