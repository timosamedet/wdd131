const currentYear = document.getElementById("currentyear")
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// toggle the hamburger to display the menu for smaller screens
hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
    templeDiv.classList.toggle("reversed");
});
