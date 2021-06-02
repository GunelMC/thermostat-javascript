class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }
  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature++;
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn === true) {
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    } else {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "low-usage";
    } else if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
