const currentYear = document.getElementById("currentyear")
const lastModified = document.getElementById("lastModified");

const today = new Date();
currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

temperature = 25;
windSpeed = 5;
const windChill = document.getElementById("windChill");

if(temperature <= 10 && windSpeed > 4.8){
    windChill.innerHTML = calculateWindChill(temperature, windSpeed) + " &deg;C";
}
else{
    windChill.innerHTML = "N/A";
}

// Calculation in degree Celcius
function calculateWindChill(temperature, windSpeed){
    const windChill = 13.12 
    + (0.6215 * temperature) 
    - (11.37 * Math.pow(windSpeed, 0.16)) 
    + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    //round to 2 decimal places
    return windChill.toFixed(2);
}