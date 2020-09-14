module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['setup_thermistor_pin'] = function (block) {
		var thermistor_pin = Blockly.JavaScript.valueToCode(block, 'thermistor_pin', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				int THERMISTOR_PIN = ${thermistor_pin};
				#define VOLTAGE_INPUT 3.30
				#define NOMINAL_TEMP 25
				#define NOMINAL_RESISTANCE 100000
				#define REFERENCE_RESISTANCE 100000 // external RESISTANCE
				#define B_VALUE 3950
				#define ADC_RESOLUTION 4095


				KB_DAVINCIThermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT, REFERENCE_RESISTANCE, NOMINAL_RESISTANCE, NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);
			#END
		`;
		return code;
    };
	Blockly.JavaScript['thermistorCelsius'] = function (block) {
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END

			thermistor.readTemperatureCelsius()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['thermistorFahrenheit'] = function (block) {
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END

			thermistor.readTemperatureFahrenheit()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
///------------------------------------------------------------------------------------------------------------------------------------	

Blockly.JavaScript['setup_LDR_pin'] = function (block) {
	var LDR_pin  = Blockly.JavaScript.valueToCode(block, 'LDR_PIN', Blockly.JavaScript.ORDER_ATOMIC);
	var code = `
		#EXTINC
			#include "KB_DAVINCI.h"
		#END
		#VARIABLE
		    int setpin = ${LDR_pin};
			KB_DAVINCILDR LDRSensor;
		#END
		#SETUP
			LDRSensor.setPin(setpin);
		#END
		
	`;
	return code;
};
Blockly.JavaScript['block_LDR'] = function (block) {
	var code = `
		#EXTINC
		#END
		
		    LDRSensor.readValue()
	`;
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};






};