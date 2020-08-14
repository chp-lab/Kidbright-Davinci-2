module.exports = function (Blockly) {
	'use strict';
	var music_colour = "#ff471a";
	// >>>>>>>>>>>>>>>>>>button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
	Blockly.Blocks['button_di1'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://www.robotshop.com/media/catalog/product/cache/image/1350x/9df78eab33525d08d6e5fb8d27136e95/s/f/sfe-12mm-push-button-switch_1.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Button DI1 pressed");
				this.setOutput(true, null);
			this.setColour(music_colour);
			this.setTooltip("Button pressed DI1");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['button_di2'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://www.robotshop.com/media/catalog/product/cache/image/1350x/9df78eab33525d08d6e5fb8d27136e95/s/f/sfe-12mm-push-button-switch_1.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Button DI2 pressed");
				this.setOutput(true, null);
			this.setColour(music_colour);
			this.setTooltip("Button pressed DI2");
			this.setHelpUrl("");
		}
    };
}