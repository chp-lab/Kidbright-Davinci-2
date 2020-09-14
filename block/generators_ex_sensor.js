module.exports = function (Blockly) {
	'use strict';


	//////////////////////////////pir/////////////////////////////////////////////
	Blockly.JavaScript['setup_pir_motion'] = function (block) {
		var pin_pir = Blockly.JavaScript.valueToCode(block, 'pir_PIN', Blockly.JavaScript.ORDER_ATOMIC);
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

			SemaphoreHandle_t syncSemaphore;
		#END
		#FUNCTION
			void IRAM_ATTR handleInterrupt() {
				xSemaphoreGiveFromISR(syncSemaphore, NULL);
				}
		#END
		#SETUP 
			syncSemaphore = xSemaphoreCreateBinary();
	
			pinMode(sensorPin, INPUT_PULLUP);
			attachInterrupt(digitalPinToInterrupt(sensorPin), handleInterrupt, CHANGE);
		
			ledcSetup(channel, freq, resolution);
			ledcAttachPin(buzzerPin, channel);		
		#END
		
	`;
		return code;
	};

	Blockly.JavaScript['block_looppir'] = function (block) {
		var code = `
		#EXTINC
			
		#END
		#VARIABLE
	
		#END
		#FUNCTION
			
		#END
		#SETUP 
		
		#END
			xSemaphoreTake(syncSemaphore, portMAX_DELAY);
	`;
		return code;
	};

	Blockly.JavaScript['read_pir'] = function (block) {
		var pin_pir = Blockly.JavaScript.valueToCode(block, 'pir_PIN', Blockly.JavaScript.ORDER_ATOMIC);
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
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
		    int setpin = ${value_soundpin};
			KB_DAVINCISOUND sound(setpin);
		#END
		#SETUP
			
		#END
		
	`;
		return code;
	};
	Blockly.JavaScript['read_sound'] = function (block) {
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		sound.readValue()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	//////////////////////////////distance/////////////////////////////////////////////
	Blockly.JavaScript['set_pindistance'] = function (block) {
		var value_trigpin = Blockly.JavaScript.valueToCode(block, 'trigPin', Blockly.JavaScript.ORDER_ATOMIC);
		var value_echopin = Blockly.JavaScript.valueToCode(block, 'echoPin', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
			int trigPin = ${value_trigpin};
			int echoPin = ${value_echopin};
			KB_DAVINCIDistance Distance(trigPin,echoPin);
		#END
		#SETUP
			
		#END
		
	`;
		return code;
	};
	Blockly.JavaScript['read_distance_mm'] = function (block) {
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		Distance.readDistance_mm()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_cm'] = function (block) {
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		Distance.readDistance_cm()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_in'] = function (block) {
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		Distance.readDistance_in()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['read_distance_m'] = function (block) {
		var code = `
		#EXTINC

		#END
		#VARIABLE

		#END
		#SETUP
			
		#END
		Distance.readDistance_m()
		
	`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	//////////////////////////////MLX90614/////////////////////////////////////////////
	Blockly.JavaScript['KBD_beginMLX90614'] = function (block) {
		var value_scl = Blockly.JavaScript.valueToCode(block, 'SCL', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
	#EXTINC
	#include <Adafruit_MLX90614.h>
	#END
	#EXTINC
	#include <Wire.h>
	#END
	#VARIABLE
	Adafruit_MLX90614 mlx90614 = Adafruit_MLX90614();
	#END
	mlx90614.begin(0);
	`;
		return code;
	};

	Blockly.JavaScript['KBD_read_object_temp_c'] = function (block) {
		var code = `mlx90614.readObjectTempC()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_object_temp_f'] = function (block) {
		var code = `mlx90614.readObjectTempF()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_ambient_temp_c'] = function (block) {
		var code = `mlx90614.readAmbientTempC()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['KBD_read_ambient_temp_f'] = function (block) {
		var code = `mlx90614.readAmbientTempF()`;
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