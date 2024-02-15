document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  const apiKey = "4eb3703790b356562054106543b748b2";
  const city = "İstanbul";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityElement = document.getElementById("city");
      const temperatureElement = document.getElementById("temperature");
      const descriptionElement = document.getElementById("description");
      const humidityElement = document.getElementById("humidity");

      cityElement.textContent = data.name;
      temperatureElement.textContent = data.main.temp;
      descriptionElement.textContent = data.weather[0].description;
      humidityElement.textContent = data.main.humidity;
    })
    .catch((error) => console.log("Hava durumu bilgileri alınamadı:", error));
}
