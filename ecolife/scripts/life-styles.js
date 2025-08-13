// Accordion toggle with arrow animation
// const headers = document.querySelectorAll(".accordion-header");

// headers.forEach(header => {
//   header.addEventListener("click", () => {
//     header.classList.toggle("active");

//     const content = header.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//       content.classList.remove("open");
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       content.classList.add("open");
//     }
//   });
// });

// // Search functionality
// document.getElementById("searchBtn").addEventListener("click", () => {
//   const query = document.getElementById("searchInput").value.toLowerCase();
//   const items = document.querySelectorAll(".accordion-content li");

//   items.forEach(item => {
//     item.style.display = item.textContent.toLowerCase().includes(query) ? "list-item" : "none";
//   });
// });



// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
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