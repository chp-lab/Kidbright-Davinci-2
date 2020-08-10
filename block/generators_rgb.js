module.exports = function (Blockly) {
	'use strict';
    Blockly.JavaScript['rgb_status'] = function(block) {
		var status = block.getFieldValue("RGB_STATUS");
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			
				RGB.${status}();
		`;
		return code;
	}
	Blockly.JavaScript['turn_off_rgb'] = function (block) {
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			
			RGB.off();
		`;
		return code;
	};
	Blockly.JavaScript['clear_rgb'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
		

			RGB.clear();
		`;
		return code;
	};
	Blockly.JavaScript['set_rgb'] = function (block) {
		var r = block.getFieldValue('R');
		var g = block.getFieldValue('G');
		var b = block.getFieldValue('B');

		var code = `
		#EXTINC	
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			
			RGB.setColor(${r},${g},${b});`;
		return code;
	};
	Blockly.JavaScript['rgb_color'] = function(block) {
		var color = block.getFieldValue("COLOR");
		var code = `
		#EXTINC
			#include <KB_DAVINCI.h>
		#END
		#VARIABLE
			KB_DAVINCIRGB RGB; 			
		#END
		#SETUP
			RGB.begin();
			RGB.setCommonCathode(false);
		#END
		
			RGB.${color}();
	`;

		return code;
	}
	Blockly.JavaScript['rgb_red'] = function (block) {
		var code = `
			#EXTINC
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			
			RGB.red();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_green'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.green();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_blue'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.blue();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_yellow'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.yellow();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_pink'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
				
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.pink();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_orange'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
				
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.orange();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_lightblue'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
				
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			RGB.lightblue();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_lightgreen'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
				
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.lightgreen();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_white'] = function (block) {
		var code = `
			#EXTINC	
				#include <KB_DAVINCI.h>
				
			#END
			#VARIABLE
				KB_DAVINCIRGB RGB; 			
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			

			RGB.white();
		`;
		return code;
	};
};