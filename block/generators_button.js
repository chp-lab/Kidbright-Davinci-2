module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['button_di1'] = function (block) {
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
			KB_DAVINCIBTN_DI1 BTN1;
		#END
        #SETUP
			BTN1.init();		
		#END
		    BTN1.pressed()
		`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['button_di2'] = function (block) {
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
			KB_DAVINCIBTN_DI2 BTN2;
		#END
        #SETUP
			BTN2.init();		
		#END
		    BTN2.pressed()
		`;
		return [code, Blockly.JavaScript.ORDER_NONE];
    };
};