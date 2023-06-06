// Traemos los elementos del DOM
const form = document.getElementById('form');
const cityInput = document.querySelector('.search-input');
const cardContainer = document.querySelector('.card-container');
const searchMsg = document.querySelector('.search-msg');

const roundNumber = number => Math.round(number);

// Funcion para simplificar la data de la ciudad
const getCityData = cityData => ({
  cityName: cityData.name,
  imageName: cityData.weather[0].icon,
  cityWeatherInfo: cityData.weather[0].description,
  cityTemp: roundNumber(cityData.main.temp),
  cityST: roundNumber(cityData.main.feels_like),
  cityMaxTemp: roundNumber(cityData.main.temp_max),
  cityMinTemp: roundNumber(cityData.main.temp_min),
  cityHumidity: cityData.main.humidity,
});

// Funcion para crear el html
const createCityTemplate = cityData => {
  const {
    cityName,
    imageName,
    cityWeatherInfo,
    cityTemp,
    cityST,
    cityMaxTemp,
    cityMinTemp,
    cityHumidity,
  } = getCityData(cityData);

  return `
  <div class="weather-card animate">
        <div class="weather-info-container">
            <h2 class="weather-title">${cityName}</h2>
            <p class="weather-description">${cityWeatherInfo}</p>
            <div class="weather-temp-container">
            <span class="weather-temp">${cityTemp}º</span>
            <span class="weather-st">${cityST}º ST</span>
            </div>
        </div>
        <div class="weather-img-container">
            <img src="./assets/img/${imageName}.png" alt="weather image" />
        </div>
        <div class="weather-extra-container">
            <div class="weather-minmax-container">
            <span class="weather-span"
                ><i class="fa-solid fa-arrow-up-long"></i>Max:${cityMaxTemp}º</span
            >
            <span class="weather-span"
                ><i class="fa-solid fa-arrow-down-long"></i>Min:${cityMinTemp}º</span
            >
            </div>
            <span class="weather-humidity">${cityHumidity}% Humedad</span>
        </div>
    </div>
  `;
};

const renderCityCard = cityData => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

// Funcion si está vacío el input
const isEmptyInput = () => {
  return cityInput.value.trim() === '';
};

// Funcion si no existe la city
const isInvalidCity = cityData => !cityData.id;

// Funcion para cambiar el mensaje de busqueda
const changeSearchMsg = cityData => {
  const cityName = cityData.name;
  searchMsg.textContent = `Así está el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`;
};

const searchCity = async e => {
  e.preventDefault();

  //   Validacion si el input está vacio
  if (isEmptyInput()) {
    alert('Debes ingresar una ciudad');
    return;
  }

  // Fetch a la ciudad si el input no está vacío
  const fetchedCity = await requestCity(cityInput.value);

  //  Validamos que exista la ciudad
  if (isInvalidCity(fetchedCity)) {
    alert('Ciudad no encontrada');
    form.reset();
    return;
  }

  renderCityCard(fetchedCity);
  changeSearchMsg(fetchedCity);
  form.reset();
};

const init = () => {
  form.addEventListener('submit', searchCity);
};

init();
