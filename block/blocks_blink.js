const dirIcon = Vue.prototype.$global.board.board_info.dir;


module.exports = function (Blockly) {
	'use strict';
    var cl1 = "#339933";
    var cl2 = "#e6004c";

    
	// >>>>>>>>>>>>>>>>>>button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    Blockly.Blocks['set_led_blink'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/led.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
              .appendField("LED pin")
              .appendField(new Blockly.FieldDropdown([["18","18"], ["19","19"], ["21","21"]]), "RGB");
          this.appendValueInput("delay")
            .setCheck("Number")
            .appendField("delay");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(cl1);
       this.setTooltip("set led PIN ");
       this.setHelpUrl("");
        }
      };
    
      Blockly.Blocks['led_blink'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("Blink : ON");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(cl2);
       this.setTooltip("LED blink");
       this.setHelpUrl("");
        }
      };
}