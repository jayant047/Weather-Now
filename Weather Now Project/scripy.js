
const weatherData = {
    delhi: {
        city: "Delhi",
        temperature: "32°C",
        condition: "Sunny",
        humidity: "45%",
        windSpeed: "12 km/h",
        feelsLike: "34°C"
    },

    mumbai: {
        city: "Mumbai",
        temperature: "29°C",
        condition: "Cloudy",
        humidity: "70%",
        windSpeed: "15 km/h",
        feelsLike: "31°C"
    },

    bangalore: {
        city: "Bangalore",
        temperature: "25°C",
        condition: "Partly Cloudy",
        humidity: "60%",
        windSpeed: "10 km/h",
        feelsLike: "26°C"
    }
};



const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");

const message = document.getElementById("message");



function searchWeather() {

    let city = cityInput.value.toLowerCase().trim();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }


    if (weatherData[city]) {

        let weather = weatherData[city];


        cityName.textContent = weather.city;
        temperature.textContent = weather.temperature;
        condition.textContent = weather.condition;
        humidity.textContent = weather.humidity;
        windSpeed.textContent = weather.windSpeed;
        feelsLike.textContent = weather.feelsLike;

       
        message.textContent = "";

    } else {

       
        message.textContent =
            "Weather data not available for this city.";
    }
}


searchButton.addEventListener("click", searchWeather);



cityInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});