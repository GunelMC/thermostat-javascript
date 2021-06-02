"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
