const currentYear = document.getElementById("currentyear")
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;


//  function toggleMenu() {
//     const menu = document.getElementById("menu");
//     menu.classList.toggle("show");

//     const templeText  = document.getElementById("temple-text");
//     templeText.classList.toggle("hide");

//     document.getElementById("hamburger").classList.toggle("active");


//     const templeDiv = document.getElementById("temple-div");
//     templeDiv.classList.toggle("reversed");
//   }

    //document.getElementById("hamburger").classList.toggle("active");
    const hamburger =document.getElementById("hamburger");
    const templeDiv = document.getElementById("temple-div");
    const templeText  = document.getElementById("temple-text");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        templeText.classList.toggle("hide");
        hamburger.classList.toggle("active");
        templeDiv.classList.toggle("reversed");

});