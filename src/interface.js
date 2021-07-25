"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93255817bef63d7addf556ae9a8e49e6&units=metric`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector("#current-temperature").innerText =
          data.main.temp;
      });
  };

  displayWeather("London");

  document.querySelector("#select-city").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#current-city").value;

    displayWeather(city);
  });

  const thermostat = new Thermostat();

  const updateTemperature = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
    document.querySelector("#temperature").className = thermostat.energyUsage();
  };
  updateTemperature();

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up(); //update model
    updateTemperature(); //update view
  });

  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down(); //update model
    updateTemperature(); //update view
  });

  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector("#power-saving-on").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector("#power-saving-status").innerText = "on";
    updateTemperature();
  });

  document.querySelector("#power-saving-off").addEventListener("click", () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector("#power-saving-status").innerText = "off";
    updateTemperature();
  });
});
