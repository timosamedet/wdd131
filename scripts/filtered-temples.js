const currentYear = document.getElementById("currentyear")
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;


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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Auckland New Zealand",
    location: "Auckland, New Zealand",
    dedicated: "2025, April, 13",
    area: 45456,
    imageUrl: "images/auckland-new-zealand-temple-56277.jpg"
  },
  {
    templeName: "Atlanta Georgia",
    location: "Georgia, United States",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:"images/atlanta-georgia-temple-54297.jpg"
  },
    {
    templeName: "Bangkok Thailand",
    location: "Ratchathew Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:"images/bangkok-thailand-temple-41.jpg"
  }

];


const imageCardContainer = document.getElementById("imageCardContainer");

function createCard(filteredTemplates){
  imageCardContainer.innerHTML = ""
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

  filteredTemplates.forEach((temple) => {
      const card = document.createElement("div");
      card.classList = "card";

      card.innerHTML = `
          <h2 class="temple-name">${temple.templeName}</h2>
          <p><strong>Location:</strong> <span class="location-value">${temple.location}</span></p>
          <p><strong>Dedicated:</strong> <span class="dedicated-value">${temple.dedicated}</span></p>
          <p><strong>Area:</strong> <span class="size-value">${temple.area} sq ft</span></p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">`;
      
      imageCardContainer.appendChild(card);
      
  });
}

createCard(temples);

const filterHome = document.getElementById("filter-home");
const filterOld = document.getElementById("filter-old");
const filterNew = document.getElementById("filter-new");
const filterLarge = document.getElementById("filter-large");
const filterSmall = document.getElementById("filter-small");

filterHome.addEventListener("click", function(){
  createCard(temples);
  this.classList.add('active');
});

filterOld.addEventListener("click", function(){
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  createCard(oldTemples);

  this.classList.add('active');

})

filterNew.addEventListener("click", function(){
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  createCard(newTemples);

  this.classList.add('active');
})

filterSmall.addEventListener("click", function(){
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createCard(smallTemples);
  this.classList.add('active');

})

filterLarge.addEventListener("click", function(){
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createCard(largeTemples);
  this.classList.add('active');

})



