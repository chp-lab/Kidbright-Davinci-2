#ifndef KB_DAVINCIThermistor_H
#define KB_DAVINCIThermistor_H

#include <Arduino.h>

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCIThermistor_H)
	#define KB_DAVINCI_THERMISTOR_PIN 39
	#define KB_DAVINCI_ADC_RESOLUTION 4095
	#define KB_DAVINCI_VOLTAGE_INPUT 3.30
	#define KB_DAVINCI_REFERENCE_RESISTANCE 100000
	#define KB_DAVINCI_NOMINAL_THERMISTOR_RESISTANCE 100000
	#define KB_DAVINCI_NOMINAL_TEMP 25
	#define KB_DAVINCI_B_VALUE 3950
#endif

class KB_DAVINCIThermistor {
	private:
		// static const int DEFAULT_ADC_RESOLUTION = 1023;		//default analog resolution for arduino board
		const int NUM_SAMPLING = 10;			// number of sampling
		int _thermistorPin;
		int _adcResolution;
		double _voltageInput;
		double _referenceResistance;
		double _nominalThermistorResistance;
		double _nominalTemperature;
		double _bValue;
		bool _adding_calibrate = false;
		double _TEMPERATURE_DIFFERENT_VALUE = 4.75;
	public:
		KB_DAVINCIThermistor();
		KB_DAVINCIThermistor(
			int pin,
			double voltageInput,
			double referenceResistance,
			double nominalThermistorResistance,
			double nominalTemperature,
			double bValue,
			int resolution = KB_DAVINCI_ADC_RESOLUTION
		);
		void setPin(int pin);
		void setVoltageInput(double voltageInput);
		void setReferenceResistance(double resistance);
		void setNorminalThermistorResistance(double resistance);
		void setNorminalTemperature(double temperature);
		void setBValue(double bValue);
		void setADCResolution(int adcResolution);
		void setCalibrateValue(double differentTemp, bool adding=false);
		double readVoltage();
		double readThermistorResistance();
		double readTemperatureCelsius();
		double readTemperatureFahrenheit();
};
#endif
