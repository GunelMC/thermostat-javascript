class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
  }
  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
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
}
