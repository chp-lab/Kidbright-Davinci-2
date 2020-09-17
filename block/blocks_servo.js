const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = function (Blockly) {
    'use strict';

    var color_ = "#cc3399";


    Blockly.Blocks['KBD_servo_setup'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("start and setup pin :")
                this.appendValueInput("servo_pin")
				.setCheck("Number")
			this.setInputsInline(true);  
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_);
            this.setTooltip("input is connected to pin.");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_servo_stop'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("stop driving");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_);
            this.setTooltip("Stop driving the servo pulse train.");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_servo_write'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("write angle");
            this.appendValueInput("degree")
                .setCheck("Number");
            this.appendDummyInput()
                .appendField(" degree");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_);
            this.setTooltip("Set the servomotor target angle.");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_servo_write_micros'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("write pulse");
            this.appendValueInput("degree")
                .setCheck("Number");
            this.appendDummyInput()
                .appendField("microseconds");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_);
            this.setTooltip("Set the pulse width, in microseconds.");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_servo_read'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("read angle");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(color_);
            this.setTooltip("Get the servomotor's target angle, in degrees.  This will lie inside the range specified at attach() time.");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_servo_read_micros'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/servo-Logo2.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("Servo1", null, ["Plugin.Servo"], ["Plugin.Servo"]), "instance")
                .appendField("read pulse microsec");
            this.setInputsInline(true);
            this.setOutput(true, "Number");
            this.setColour(color_);
            this.setTooltip("Get the current pulse width, in microseconds.  This will lie within the range specified at attach() time.");
            this.setHelpUrl("");
        }
    };

};