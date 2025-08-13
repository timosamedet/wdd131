const currentYear = document.getElementById("currentyear")
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = "Last Modification: " + document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const selectProduct = document.getElementById("product-name");


products.forEach(product =>{
    const option = document.createElement("option");
    option.value = product.id;
    option.innerHTML = `${product.name} (&star; ${product.averagerating})`

    selectProduct.appendChild(option);
})


//keep track of reviews submitted
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      return;
    }

    let numberOfReviews = 0;
    try {
      numberOfReviews = localStorage.getItem("numberOfReviews");
    } catch (error) {
      console.log("no was review sumbmitted yet");
    }

    numberOfReviews++;
    localStorage.setItem("numberOfReviews", numberOfReviews)

  });

