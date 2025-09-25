document.addEventListener("DOMContentLoaded", function () {
    const temperatureData = document.getElementById("temperatureData");
    const temperatureIcon = document.getElementById("temperatureIcon");
    const toggleTemp = document.getElementById("toggleTemp");
    
    // Retrieve stored weather data from localStorage
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    let isCelsius = true;

    if (weatherData && weatherData.temperature !== undefined) {
        let tempC = weatherData.temperature;
        let tempF = (tempC * 9/5) + 32;
        temperatureData.textContent = tempC + "°C";
        
        // Change icon color based on temperature
        if (tempC > 30) {
            temperatureIcon.style.color = "red"; // Hot
        } else if (tempC > 20) {
            temperatureIcon.style.color = "orange"; // Warm
        } else {
            temperatureIcon.style.color = "blue"; // Cold
        }

        // Toggle between Celsius and Fahrenheit
        toggleTemp.addEventListener("click", function () {
            isCelsius = !isCelsius;
            temperatureData.textContent = isCelsius ? tempC + "°C" : tempF.toFixed(1) + "°F";
        });
    } else {
        temperatureData.textContent = "Data not available";
    }
});
