document.getElementById("ecoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  const transport = parseFloat(document.getElementById("transport").value) || 0;
  const diet = document.getElementById("diet").value;
  const energy = parseFloat(document.getElementById("energy").value) || 0;
  const recycling = document.getElementById("recycling").value;

  // Base footprint calculation
  let footprint = 0;

  // Transport: 0.21 kg CO2 per km (average car)
  footprint += transport * 0.21;

  // Diet factor
  if (diet === "omnivore") footprint += 5;
  if (diet === "vegetarian") footprint += 3;
  if (diet === "vegan") footprint += 1.5;

  // Energy: 0.475 kg CO2 per kWh (world avg)
  footprint += energy * 0.475 / 4; // per week approx.

  // Recycling reduction
  if (recycling === "yes") footprint *= 0.9;

  // Display results
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("footprint").innerHTML = 
    `Your estimated weekly carbon footprint is <strong>${footprint.toFixed(2)}</strong> kg CO₂.`;

  // Eco Tip based on footprint
  let tip = "";
  if (footprint < 10) {
    tip = "Excellent! You are living a very eco-friendly lifestyle.";
  } else if (footprint < 20) {
    tip = "Good job! You can reduce more by choosing public transport and reducing energy use.";
  } else {
    tip = "Your footprint is high. Consider eating less meat, traveling less by car, and saving energy.";
  }
  document.getElementById("ecoTip").textContent = tip;
});



// Add active to current page
const currentPage = window.location.pathname.split("/").pop();
console.log("current page: " + currentPage);
document.querySelectorAll("nav a").forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add('active');
    }
})