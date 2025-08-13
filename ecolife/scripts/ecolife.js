const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

// Show first slide
slides[currentIndex].classList.add('active');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next button
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Prev button
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);


// Add active to current page
const currentPage = window.location.pathname.split("/").pop();
console.log("current page: " + currentPage);
document.querySelectorAll("nav a").forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add('active');
    }
})
