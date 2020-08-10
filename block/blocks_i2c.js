const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';
	var music_colour = "#ff66d9";

	// >>>>>>>>>>>>>>>I2C>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Blockly.Blocks['i2c_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField('Using Kid Bright Davinci I2C port');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(music_colour);
		}
	}

	Blockly.Blocks['i2c_scanI2Cdevice'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))

				.appendField('Number of connected I2C device');
			this.setInputsInline(true);
			this.setOutput(true, "Number");
			this.setColour(music_colour);
		}
	}

	Blockly.Blocks['i2c_hasDeviceAddress'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))

				.appendField('has I2C device At Address ')
				.appendField(new Blockly.FieldNumber(1, 1, 127), 'address');
			this.setInputsInline(true);
			this.setOutput(true, "Boolean");
			this.setColour(music_colour);
		}
	}

};