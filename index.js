document.getElementById("findButton").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    if (!city)
        return;
    fetchWeather(city);
    console.log("city", city);
});

function fetchWeather(city) {
    const apiKey = "00a7221f7d5e4a85a64192804240512";

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => updateUI(data))
        .catch((error) => console.error("Error fetching weather data:", error));
}

function updateUI(data) {
    const forecast = data.forecast.forecastday;
    forecast.forEach((day, index) => {
        document.getElementsByClassName("day")[index].textContent = day.date;
        document.getElementsByClassName("temperature")[index].textContent = `${day.day.avgtemp_c}°C`;
        document.getElementsByClassName("condition")[index].textContent = day.day.condition.text;
        document.getElementsByClassName("wind")[index].textContent = `${day.day.daily_chance_of_rain}% | ${day.day.maxwind_kph} km/h`;
    });
}

