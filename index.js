window.addEventListener('load', () => {
  const cityInput = document.getElementById('city');
  cityInput.value = 'Florence';

  getWeather('Florence');
});

function getWeather(city) {
  const apiKey = 'a5961b895f25323dc5110b88fc2d7240';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const tempElement = document.getElementById('temp');
          const iconElement = document.querySelector('.temperature img');
          const conditionsElement = document.getElementById('conditions');
          const humidityElement = document.getElementById('humidity');
          const windElement = document.getElementById('wind-speed');

          tempElement.innerText = Math.round(data.main.temp);
          iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          conditionsElement.innerText = data.weather[0].description;
          humidityElement.innerText = `${data.main.humidity}%`;
          windElement.innerText = `${data.wind.speed} mph`;
      })
      .catch(error => console.log(error));
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  const city = document.getElementById('city').value;
  getWeather(city);
});
