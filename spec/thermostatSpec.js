"use strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature with up()", () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases temperature with down()", () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has power saving mode on by default", () => {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can switch PSM off", () => {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it("can switch PSM on", () => {
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  describe("when powerSavingMode is on", () => {
    it("has a maximum temperature of 25 degrees", () => {
      for (let i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", () => {
    it("has a maximum temperature of 32 degrees", () => {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it("can be reset to the default temperature", () => {
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
