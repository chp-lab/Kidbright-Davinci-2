const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
    'use strict';
    var music_colour = "#ff8533";

    Blockly.Blocks['rtc_KBD_begin'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("SETUP RTC  BEGIN");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_updateTime'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("LOOP RTC UPDATE TIME");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_timestamp_format'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("RTC TIMESTAMP FORMAT")
                .appendField(new Blockly.FieldDropdown([["YYYY/MM/DD-H:M:S", "RTC_TIMESTAMP_FORMAT_1"], ["DD/MM/YYYY-H:M:S", "RTC_TIMESTAMP_FORMAT_2"]]), "RTC_TIMESTAMP_FORMAT");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_day_time'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET DAY-TIME");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_year'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET YEAR");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_month'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET MONTH");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_day'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET DAY");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_hour'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET HOUR");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_minute'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET MINUTE");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['rtc_KBD_get_second'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/RTC2.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("RTC1", null, ["Plugin.RTC"], ["Plugin.RTC"]), "RTC_INSTANCE")
                .appendField("GET SECOND");
            this.setOutput(true, null);
            this.setColour(music_colour);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
}