module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['i2c_begin'] = function(block) {
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE 
			KB_DAVINCII2C I2C_PORT;	
		#END
		#SETUP 
			I2C_PORT.begin();
		#END
		`;
		return code;
	};

	Blockly.JavaScript['i2c_scanI2Cdevice'] = function(block) {
		var code = `
			I2C_PORT.scanI2CDevice()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['i2c_hasDeviceAddress'] = function(block) {
		var address = block.getFieldValue('address')
		var code = `
			I2C_PORT.hasDeviceAddress(${address})
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
};