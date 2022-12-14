import { addFavorite, removeFavorite } from "./favorites.js";

import { getWeatherData } from "./weather.js";

import {
  changeConversionButtonText,
  convertUnitsSign,
  createShortcuts,
  getBackground,
  getWeather,
} from "./utils.js";

const container = document.querySelector("div.weather-data");
const hourlyWeather = document.querySelector("div.hourly-weather");
const getWeatherButton = document.querySelector("button.get-weather");
const celsiusConversionButton = document.querySelector(
  "button.celsius-conversion"
);
const likeButton = document.querySelector("span.material-symbols-outlined");
const dailyForecast = document.querySelector("ul.daily-forecast");
let isCelsius = false;
const now = new Date();
const hour = now.getHours();

const favoritesExist = localStorage.getItem("favorites") !== null;

if (!favoritesExist) {
  localStorage.setItem("favorites", JSON.stringify([]));
}

let favorites = JSON.parse(localStorage.getItem("favorites"));
createShortcuts(favorites);

getBackground(hour);

getWeatherButton.onclick = () => {
  likeButton.classList.remove("liked");
  getWeather();

  const zip = document.querySelector("input").value;
  if (zip) {
    getWeatherData(zip, isCelsius, hourlyWeather, dailyForecast);
    container.style.display = "block";
  }
};

celsiusConversionButton.onclick = () => {
  isCelsius = !isCelsius;

  changeConversionButtonText(celsiusConversionButton, isCelsius);

  const zip = document.querySelector("input").value;
  getWeather(isCelsius);
  convertUnitsSign(isCelsius);
  getWeatherData(zip, isCelsius, hourlyWeather, dailyForecast);
  container.style.display = "block";
};

likeButton.onclick = () => {
  const zip = document.querySelector("input").value;
  favorites = addFavorite(likeButton, zip, favorites);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  if (likeButton.classList.contains("liked")) {
    location.reload();
  }
};

if (favorites.length) {
  document.querySelectorAll("span.x").forEach((button) => {
    button.onclick = () => {
      favorites = removeFavorite(
        favorites,
        button.parentElement.textContent.slice(0, 5)
      );
      localStorage.setItem("favorites", JSON.stringify(favorites));

      location.reload();
    };
  });

  document.querySelectorAll("span.saved-zip").forEach((zip) => {
    zip.onclick = () => {
      document.querySelector("input").value = zip.textContent.slice(0, 5);
      getWeather();
      getWeatherData(
        zip.textContent.slice(0, 5),
        isCelsius,
        hourlyWeather,
        dailyForecast
      );
      container.style.display = "block";
    };
  });
}
