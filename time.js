const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');
const cityInput = document.getElementById('city');
const weatherInfo = document.querySelector('.weather-info');
const temperatureElement = weatherInfo.querySelector('.temperature span');
const conditionsElement = weatherInfo.querySelector('.conditions span');
const humidityElement = weatherInfo.querySelector('.humidity span');
const windSpeedElement = weatherInfo.querySelector('.wind-speed span');
const weatherIconElement = weatherInfo.querySelector('.temperature img');

// Update date and time
function updateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString('en-US', { timeStyle: 'short' });
  dateElement.textContent = date;
  timeElement.textContent = time;
}
setInterval(updateTime, 1000);
