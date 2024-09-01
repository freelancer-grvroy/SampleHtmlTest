const apiKey = 'b79b59d32bd2e2289334d22b0fe3829e'; // Replace with your OpenWeatherMap API key
const weatherOutput = document.getElementById('weatherOutput');
const getWeatherButton = document.getElementById('getWeatherButton');

getWeatherButton.addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});

// Function to fetch weather data
function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON data
    })
    .then(data => {
      displayWeather(data); // Display the weather data
    })
    .catch(error => {
      weatherOutput.textContent = `Error: ${error.message}`;
    });
}

// Function to display weather data
function displayWeather(data) {
  const { main, name, weather } = data;
  weatherOutput.innerHTML = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Weather: ${weather[0].description}</p>
  `;
}
