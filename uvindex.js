document.addEventListener("DOMContentLoaded", function () {
    const uvIndexData = document.getElementById("uvIndexData");
    const uvIndexIcon = document.getElementById("uvIndexIcon");

    // Retrieve stored weather data from localStorage
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    
    if (weatherData && weatherData.uvIndex !== undefined) {
        uvIndexData.textContent = weatherData.uvIndex;
        
        // Change icon color based on UV Index level
        if (weatherData.uvIndex > 8) {
            uvIndexIcon.style.color = "red"; // Very high UV
        } else if (weatherData.uvIndex > 5) {
            uvIndexIcon.style.color = "orange"; // High UV
        } else if (weatherData.uvIndex > 2) {
            uvIndexIcon.style.color = "yellow"; // Moderate UV
        } else {
            uvIndexIcon.style.color = "green"; // Low UV
        }
    } else {
        uvIndexData.textContent = "Data not available";
    }
});
