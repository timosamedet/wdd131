// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // Toggle content display
    content.style.display = content.style.display === 'block' ? 'none' : 'block';

    const icon = button.querySelector(".accordion-icon");

     // Change icon
    icon.textContent = icon.textContent === "+" ? "–" : "+";
  });
});

// Search filter
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.accordion-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Add active to current page
const currentPage = window.location.pathname.split("/").pop();
console.log("current page: " + currentPage);
document.querySelectorAll("nav a").forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add('active');
    }
})
