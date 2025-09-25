document.addEventListener("DOMContentLoaded", function () {
    const humidityData = document.getElementById("humidityData");
    const humidityIcon = document.getElementById("humidityIcon");

    // Retrieve stored weather data from localStorage
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    
    if (weatherData && weatherData.humidity !== undefined) {
        humidityData.textContent = weatherData.humidity + "%";
        
        // Change icon color based on humidity level
        if (weatherData.humidity > 70) {
            humidityIcon.style.color = "blue"; // High humidity
        } else if (weatherData.humidity > 40) {
            humidityIcon.style.color = "green"; // Moderate humidity
        } else {
            humidityIcon.style.color = "orange"; // Low humidity
        }
    } else {
        humidityData.textContent = "Data not available";
    }
});
