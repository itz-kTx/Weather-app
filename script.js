document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const cityInput = document.getElementById("cityInput");

    searchButton.addEventListener("click", function () {
        const city = cityInput.value.trim();
        console.log("City entered:", city); // Debugging

        if (city) {
            fetch("weather.json")
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched Data:", data); // Debugging
                    
                    if (data[city]) {
                        console.log("City Found:", data[city]); // Debugging
                        localStorage.setItem("weatherData", JSON.stringify(data[city]));
                        window.location.href = "temperature.html";
                    } else {
                        alert("City not found. Please try again.");
                    }
                })
                .catch(error => console.error("Error fetching weather data:", error));
        } else {
            alert("Please enter a city name.");
        }
    });
});
