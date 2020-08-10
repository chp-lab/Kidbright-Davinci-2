
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
    'use strict';

    var music_colour = "#ff80ff";
    var music_colour_setting = "#0000FF";
    // >>>>>>>>>>>>>>>RGB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>	
    Blockly.Blocks['set_rgb'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("set RGB color: ")
                .appendField("R")
                .appendField(new Blockly.FieldNumber(0, 0, 255), "R")
                .appendField("G")
                .appendField(new Blockly.FieldNumber(0, 0, 255), "G")
                .appendField("B")
                .appendField(new Blockly.FieldNumber(0, 0, 255), "B");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(music_colour_setting);
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_color'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("RGB LED Color")
                .appendField(new Blockly.FieldDropdown([
                    ["RED", "red"],
                    ["GREEN", "green"],
                    ["BLUE", "blue"],
                    ["YELLOW", "yellow"],
                    ["ORANGE", "orange"],
                    ["PINK", "pink"],
                    ["LIGHT BLUE", "lightblue"],
                    ["LIGHT GREEN", "lightgreen"],
                    ["WHITE", "white"]
                ]), "COLOR");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(music_colour_setting);
        }
    }
    Blockly.Blocks['rgb_status'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("RGB LED Status")
                .appendField(new Blockly.FieldDropdown([
                    ['ON', 'on'],
                    ['OFF', 'off']
                ]), 'RGB_STATUS');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(music_colour_setting);
        }
    }
    Blockly.Blocks['turn_off_rgb'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("turn off RGB");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            // this.setColour(240);
            this.setTooltip("RGB");
            this.setHelpUrl(music_colour_setting);
        }
    };
    Blockly.Blocks['clear_rgb'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("clear RGB");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#d9d9d9");
            this.setTooltip("RGB to (255,255,255)");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_red'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : red");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#ff0000");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_green'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : green");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#33cc33");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_blue'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : blue");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#3399ff");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_yellow'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : yellow");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#ffcc00");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_pink'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : pink");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#ff4d94");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_orange'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : orange");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#ff6600");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_lightblue'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : lightblue");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#66ccff");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_lightgreen'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : lightgreen");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#66ff99");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['rgb_white'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/rgb-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("color : white");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("#000000");
            this.setTooltip("RGB");
            this.setHelpUrl("");
        }
    };
}