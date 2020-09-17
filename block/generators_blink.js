module.exports = function (Blockly) {
	'use strict';
	
    Blockly.JavaScript['set_led_blink'] = function(block) {
        var dropdown_rgb = block.getFieldValue('RGB');
        var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = `
                #EXTINC
                    #include "ledBlink.h"
                    #include<Arduino.h>
                #END
                #VARIABLE
                    int pin_RGB = ${dropdown_rgb};
                    int duration = ${value_delay};

                    ledBlink led(pin_RGB ,duration);                    
                #END
                #SETUP
                            
                #END
                    
                `;return code;
      };

    Blockly.JavaScript['led_blink'] = function(block) {
        // TODO: Assemble JavaScript into code variable.
        var code = `
                #EXTINC
                    
                #END
                #VARIABLE
                                       
                #END
                #SETUP
                            
                #END
                led.Blink();   
                `
        return code;
      };
	
};


