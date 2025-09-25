document.addEventListener("DOMContentLoaded", function () {
    const windSpeedData = document.getElementById("windSpeedData");
    const windSpeedIcon = document.getElementById("windSpeedIcon");

    // Retrieve stored weather data from localStorage
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    
    if (weatherData && weatherData.windSpeed !== undefined) {
        windSpeedData.textContent = weatherData.windSpeed + " km/h";
        
        // Change icon color based on wind speed level
        if (weatherData.windSpeed > 30) {
            windSpeedIcon.style.color = "red"; // Strong wind
        } else if (weatherData.windSpeed > 15) {
            windSpeedIcon.style.color = "orange"; // Moderate wind
        } else {
            windSpeedIcon.style.color = "green"; // Calm wind
        }
    } else {
        windSpeedData.textContent = "Data not available";
    }
});
