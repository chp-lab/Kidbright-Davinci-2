module.exports = function (Blockly) {
	'use strict';


	//////////////////////////////pir/////////////////////////////////////////////
	Blockly.JavaScript['setup_pir_motion'] = function (block) {
		var pin_pir = Blockly.JavaScript.valueToCode(block, 'pir_PIN', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC
			
		#END
		#VARIABLE
	        byte sensorPin = ${pin_pir};
			byte buzzerPin = 23;
    
            int freq = 2000;
			int channel = 0;
			int resolution = 8;
			int dutyCycle = 128;

			SemaphoreHandle_t ${variable_instance};
		#END
		#FUNCTION
			void IRAM_ATTR handleInterrupt() {
				xSemaphoreGiveFromISR(${variable_instance}, NULL);
				}
		#END
		#SETUP 
			${variable_instance} = xSemaphoreCreateBinary();
	
			pinMode(sensorPin, INPUT_PULLUP);
			attachInterrupt(digitalPinToInterrupt(sensorPin), handleInterrupt, CHANGE);
		
			ledcSetup(channel, freq, resolution);
			ledcAttachPin(buzzerPin, channel);		
		#END
		
	`;
		return code;
	};

	Blockly.JavaScript['block_looppir'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC
			
		#END
		#VARIABLE
	
		#END
		#FUNCTION
			
		#END
		#SETUP 
		
		#END
			xSemaphoreTake(${variable_instance}, portMAX_DELAY);
	`;
		return code;
	};

	Blockly.JavaScript['read_pir'] = function (block) {

		var code = `
		#EXTINC
			
		#END
		#VARIABLE
	
		#END
		#FUNCTION
			
		#END
		#SETUP 
			
		#END
			digitalRead(sensorPin)
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	//////////////////////////////sound/////////////////////////////////////////////
	Blockly.JavaScript['set_pinsound'] = function (block) {
		var value_soundpin = Blockly.JavaScript.valueToCode(block, 'soundPIN', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
		    int setpin = ${value_soundpin};
			KB_DAVINCISOUND ${variable_instance}(setpin);
		#END
		#SETUP
			
		#END
		
	`;
		return code;
	};
	Blockly.JavaScript['read_sound'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		${variable_instance}.readValue()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	//////////////////////////////distance/////////////////////////////////////////////
	Blockly.JavaScript['set_pindistance'] = function (block) {
		var value_trigpin = Blockly.JavaScript.valueToCode(block, 'trigPin', Blockly.JavaScript.ORDER_ATOMIC);
		var value_echopin = Blockly.JavaScript.valueToCode(block, 'echoPin', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
			KB_DAVINCIDistance ${variable_instance}(${value_trigpin},${value_echopin});
		#END
		#SETUP
			
		#END
		
	`;
		return code;
	};
	Blockly.JavaScript['read_distance_mm'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		${variable_instance}.readDistance_mm()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_cm'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		${variable_instance}.readDistance_cm()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_in'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		${variable_instance}.readDistance_in()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_m'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		${variable_instance}.readDistance_m()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	//////////////////////////////MLX90614/////////////////////////////////////////////
	Blockly.JavaScript['KBD_beginMLX90614'] = function (block) {
		var value_scl = Blockly.JavaScript.valueToCode(block, 'SCL', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
	#EXTINC
			#include <Adafruit_MLX90614.h>
			#include <Wire.h>
	#END
	#VARIABLE
			Adafruit_MLX90614 ${variable_instance} = Adafruit_MLX90614();
	#END
			${variable_instance}.begin(0);
	`;
		return code;
	};

	Blockly.JavaScript['KBD_read_object_temp_c'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.readObjectTempC()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_object_temp_f'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.readObjectTempF()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_ambient_temp_c'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.readAmbientTempC()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_ambient_temp_f'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.readAmbientTempF()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	//////////////////////////////load cell/////////////////////////////////////////////
	Blockly.JavaScript['set_load_cell'] = function (block) {
		var value_DOUTPin = Blockly.JavaScript.valueToCode(block, 'DOUTPin', Blockly.JavaScript.ORDER_ATOMIC);
		var value_SCKPin = Blockly.JavaScript.valueToCode(block, 'SCKPin', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `
		#EXTINC
			#include <HX711.h>
		#END
		#VARIABLE
			int LOADCELL_DOUT_PIN = ${value_DOUTPin};
			int LOADCELL_SCK_PIN = ${value_SCKPin};

			HX711 ${variable_instance};

		#END
		#SETUP
			${variable_instance}.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
		#END
		
	`;
		return code;
	};
	Blockly.JavaScript['ready_load_cell'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.is_ready()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['read_load_cell_g'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `(${variable_instance}.read()) / (4653251*1000)`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
    Blockly.JavaScript['read_load_cell_kg'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `(${variable_instance}.read()) / 4653251`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['read_load_cell_N'] = function (block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `(${variable_instance}.read()) / (4653251*1000*1000)`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};






	//////////////////////////////DHT/////////////////////////////////////////////
	  Blockly.JavaScript['KBD_dht_setup'] = function(block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var dropdown_dht_type = block.getFieldValue('dht_type');
		var number_pin = Blockly.JavaScript.valueToCode(block, 'dht_PIN', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
	  #EXTINC#include "DHTesp.h"#END
	  #VARIABLE DHTesp ${variable_instance};#END
	  ${variable_instance}.setup(${number_pin},${dropdown_dht_type});
	  `;
		return code;
	  };
	  
	  Blockly.JavaScript['KBD_dht_read_temp'] = function(block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.getTemperature()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	  };
	  
	  Blockly.JavaScript['KBD_dht_read_humid'] = function(block) {
		var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `${variable_instance}.getHumidity()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	  };
};