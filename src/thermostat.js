function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if(!(this.isMaximumTemperature())){
    this.temperature++;
  }
}
Thermostat.prototype.down = function() {
  if(!(this.isMinimumTemperature())){ this.temperature--;}
}
Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}
Thermostat.prototype.psmState = function(){
  if(this.isPowerSavingModeOn()){return "On";}
  else {return "Off";}
}
Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}
Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
}
Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSavingModeOn()){
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  else{
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
}
Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
}
Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage'
  }
  else if (this.temperature  >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON){
    return 'medium-usage'
  }
  else{
    return 'high-usage'
  }
}