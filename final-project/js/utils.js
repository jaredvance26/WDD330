export const getBackground = (hour) => {
  const html = document.querySelector("html");

  if (hour < 12) {
    html.classList.add("morning");
  } else if (hour > 17) {
    html.classList.add("evening");
  }
};

export const convertUnitsSign = (isCelsius) => {
  const units = document.querySelectorAll("span.unit");

  units.forEach((unit) => {
    unit.textContent = isCelsius ? "\u00B0C" : "\u00B0F";
  });
};

export const getWeather = () => {
  const hourlyWeather = document.querySelector("div.hourly-weather");
  const dailyForecast = document.querySelector("ul.daily-forecast");

  hourlyWeather.textContent = "";
  dailyForecast.textContent = "";
};

export const changeConversionButtonText = (button, isCelsius) => {
  button.textContent = isCelsius
    ? "Convert to Fahrenheit "
    : "Convert to Celsius";
};

export const createShortcuts = (favorites) => {
  favorites.forEach((favorite) => {
    const p = document.createElement("p");
    p.classList.add("shortcut");

    const zip = document.createElement("span");
    zip.classList.add("saved-zip");
    zip.textContent = favorite;

    const cancel = document.createElement("span");
    cancel.classList.add("x");
    cancel.textContent = " X";

    p.appendChild(zip);
    p.appendChild(cancel);
    document.querySelector("div.favorites").appendChild(p);
  });
};

export const isAlreadyFavorite = (favorites, zip) => {
  favorites.forEach((favorite) => {
    if (favorite.slice(0, 5) === zip) {
      document
        .querySelector("span.material-symbols-outlined")
        .classList.add("liked");
    }
  });
};
