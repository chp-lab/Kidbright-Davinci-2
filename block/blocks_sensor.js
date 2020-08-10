const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = function (Blockly) {
	'use strict';
	
	var music_colour_thermistor = "#e6b800";
	var music_colour_LDR = "#ff4d4d";
	// ------------------------------------Thermitor--------------------------------------------------------------------------------------------------	
	Blockly.Blocks['setup_thermistor_pin'] = {
		init: function () {
			this.appendDummyInput()
			    .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/axial-ntc-thermistor.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("set up THERMISTOR PIN ")
				.appendField(new Blockly.FieldTextInput("39"), "THERMISTOR_PIN");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(music_colour_thermistor);
			this.setTooltip(" THERMISTOR PIN ");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['thermistorCelsius'] = {
		init: function () {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/axial-ntc-thermistor.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Thermitor Read : Celsius");
			this.setOutput(true, "Number");
			this.setColour(music_colour_thermistor);
			this.setTooltip("Thermistor");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['thermistorFahrenheit'] = {
		init: function () {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/axial-ntc-thermistor.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Thermitor Read : Fahrenheit");
			this.setOutput(true, "Number");
			this.setColour(music_colour_thermistor);
			this.setTooltip("Thermistor");
			this.setHelpUrl("");
		}
	};
	// ------------------------------------LDR--------------------------------------------------------------------------------------------------	

	Blockly.Blocks['setup_LDR_pin'] = {
		init: function () {
			this.appendDummyInput()
			    .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/LDR.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("set up LDR PIN ")
				.appendField(new Blockly.FieldTextInput("25"), "LDR_PIN");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(music_colour_LDR);
			this.setTooltip(" LDR PIN ");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['block_LDR'] = {
		init: function () {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/LDR.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Read LDR ");
			this.setOutput(true, "Number");
			this.setColour(music_colour_LDR);
			this.setTooltip("LDR");
			this.setHelpUrl("");
		}
	};
};