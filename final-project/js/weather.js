import { isAlreadyFavorite } from "./utils.js";

const api_key = "34dd0d127d4ea30eac4da8671ffa60e3";
let favorites = JSON.parse(localStorage.getItem("favorites"));

export const getWeatherData = (
  zip,
  isCelsius,
  hourlyWeather,
  dailyForecast
) => {
  const area_api_url = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${api_key}`;
  fetch(area_api_url)
    .then((response) => response.json())
    .then((area) => {
      document.querySelector("h2.city").textContent = area.name;

      const lat = area.lat;
      const lon = area.lon;
      const weather_api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=${
        isCelsius ? "metric" : "imperial"
      }&appid=${api_key}`;

      fetch(weather_api_url)
        .then((response) => response.json())
        .then((data) => {
          const unit = isCelsius ? "\u00B0C" : "\u00B0F";

          document.querySelector("p.desc").textContent =
            data.current.weather[0].description;
          document.querySelector("span.current-temp").textContent = Math.round(
            data.current.temp
          );

          // Hourly weather
          for (let i = 1; i < 13; i++) {
            const weather = document.createElement("div");

            const hour = document.createElement("h4");
            const temp = document.createElement("p");

            let time = new Date(data.hourly[i].dt * 1000).getHours();

            if (time === 0) {
              time = 12 + "AM";
            } else if (time === 12) {
              time = 12 + "PM";
            } else {
              time = time <= 12 ? time + "AM" : time - 12 + "PM";
            }

            hour.textContent = time;
            temp.textContent = `${Math.round(data.hourly[i].temp)}${unit}`;

            weather.appendChild(hour);
            weather.appendChild(temp);

            hourlyWeather.appendChild(weather);
          }

          // More current weather data
          document.querySelector("span.uv").textContent = Math.round(
            data.current.uvi
          );
          document.querySelector("span.humidity").textContent =
            data.current.humidity;
          document.querySelector("span.feels").textContent = Math.round(
            data.current.feels_like
          );

          document.querySelector("span.sunrise").textContent = new Date(
            data.current.sunrise * 1000
          ).toLocaleTimeString();

          document.querySelector("span.sunset").textContent = new Date(
            data.current.sunset * 1000
          ).toLocaleTimeString();

          document.querySelector(
            "span.gusts"
          ).textContent = `${data.current.wind_speed} MPH`;

          //Daily forecast

          data.daily.forEach((day) => {
            const li = document.createElement("li");

            const today = new Date();
            const date = new Date(day.dt * 1000);
            const weekDay =
              today.getDate() === date.getDate()
                ? "Today"
                : date.toLocaleDateString("en-us", {
                    weekday: "short",
                  });

            const low = `${Math.round(day.temp.min)}${unit}`;
            const high = `${Math.round(day.temp.max)}${unit}`;

            li.textContent = `${weekDay}: ${high} / ${low}`;
            dailyForecast.appendChild(li);
          });
        });
    });
  if (favorites) {
    isAlreadyFavorite(favorites, zip);
  }
};
