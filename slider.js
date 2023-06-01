// Slider JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    slides[n].classList.add("active");
    currentSlide = n;
  }

  function nextSlide() {
    var next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
