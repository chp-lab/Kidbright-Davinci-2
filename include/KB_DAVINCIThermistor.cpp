#include "KB_DAVINCIThermistor.h"

// constructor
KB_DAVINCIThermistor::KB_DAVINCIThermistor(){
	setPin(KB_DAVINCI_THERMISTOR_PIN);
	setVoltageInput(KB_DAVINCI_VOLTAGE_INPUT);
	setReferenceResistance(KB_DAVINCI_REFERENCE_RESISTANCE);
	setNorminalThermistorResistance(KB_DAVINCI_NOMINAL_THERMISTOR_RESISTANCE);
	setNorminalTemperature(KB_DAVINCI_NOMINAL_TEMP);
	setBValue(KB_DAVINCI_B_VALUE);
	setADCResolution(KB_DAVINCI_ADC_RESOLUTION);
}

// constructor with parameter
KB_DAVINCIThermistor::KB_DAVINCIThermistor(
	int pin,
	double voltageInput,
	double referenceResistance,
	double nominalThermistorResistance,
	double nominalTemperature,
	double bValue,
	int resolution
) {
	setPin(pin);
	setVoltageInput(voltageInput);
	setReferenceResistance(referenceResistance);
	setNorminalThermistorResistance(nominalThermistorResistance);
	setNorminalTemperature(nominalTemperature);
	setBValue(bValue);
	setADCResolution(resolution);
}

void KB_DAVINCIThermistor::setPin(int pin){
	this->_thermistorPin = pin;
	pinMode(_thermistorPin, INPUT);
}

void KB_DAVINCIThermistor::setVoltageInput(double voltageInput){
	this->_voltageInput = voltageInput;
}

void KB_DAVINCIThermistor::setReferenceResistance(double resistance){
	this->_referenceResistance = resistance;
}

void KB_DAVINCIThermistor::setNorminalThermistorResistance(double resistance){
	this->_nominalThermistorResistance = resistance;
}

void KB_DAVINCIThermistor::setNorminalTemperature(double temperature) {
	this->_nominalTemperature = temperature + 273.15;
}

void KB_DAVINCIThermistor::setADCResolution(int resolution){
	this->_adcResolution = resolution;
}

void KB_DAVINCIThermistor::setBValue(double bValue){
	this->_bValue = bValue;
}

void KB_DAVINCIThermistor::setCalibrateValue(double differentTemp, bool adding){
	this->_adding_calibrate = adding;
	this->_TEMPERATURE_DIFFERENT_VALUE = differentTemp;
}

double KB_DAVINCIThermistor::readVoltage(){
	double voltageOutput = 0;
	double thermistorVoltage = 0;
	for(int i = 0; i<NUM_SAMPLING; i++){
		thermistorVoltage = thermistorVoltage + analogRead(this->_thermistorPin);
	}
	thermistorVoltage = thermistorVoltage/NUM_SAMPLING;
	voltageOutput = this->_voltageInput * thermistorVoltage / this->_adcResolution;
	return voltageOutput;
}

double KB_DAVINCIThermistor::readThermistorResistance(){
	return this->_referenceResistance/ ((this->_voltageInput / readVoltage()) - 1);
}

double KB_DAVINCIThermistor::readTemperatureCelsius(){
	double celsius_temp;
	if (this->_adding_calibrate){
		celsius_temp = (1/(log(readThermistorResistance()/this->_nominalThermistorResistance)/this->_bValue + (1/this->_nominalTemperature))) - 273.15;
		celsius_temp = celsius_temp + _TEMPERATURE_DIFFERENT_VALUE;
	}else{
		celsius_temp = (1/(log(readThermistorResistance()/this->_nominalThermistorResistance)/this->_bValue + (1/this->_nominalTemperature))) - 273.15;
		celsius_temp = celsius_temp - _TEMPERATURE_DIFFERENT_VALUE;
	}
	return celsius_temp;
}

double KB_DAVINCIThermistor::readTemperatureFahrenheit(){
	double fahrenheit_temp = (readTemperatureCelsius() * 1.8) + 32;
	return fahrenheit_temp;
}