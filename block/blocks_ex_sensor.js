const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
    'use strict';
    var color_pir_motion = "#ff3399";
    var color_sound = "#e62e00";
    var color_distance = "#cc0052";
    var color_MLX90614 = "#47d147";
    var color_dht = "#3366ff";
    //////////////////////////////pir/////////////////////////////////////////////
    Blockly.Blocks['setup_pir_motion'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/pir_icon.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Setup PIR Motion PIN :")
            this.appendValueInput("pir_PIN")
                .setCheck("Number")

            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_pir_motion);
            this.setTooltip("PIR Motion Sensor");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['block_looppir'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/pir_icon.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("LOOP PIR INTERRUPT");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_pir_motion);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['read_pir'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/pir_icon.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read PIR sensor");
            this.setOutput(true, null);
            this.setColour(color_pir_motion);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };


    //////////////////////////////sound/////////////////////////////////////////////
    Blockly.Blocks['set_pinsound'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/sound_icon.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Set up SOUND KY-037 SENSOR PIN");
            this.appendValueInput("soundPIN")
                .setCheck("Number");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_sound);
            this.setTooltip("set PIN Sound sensor");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['read_sound'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/sound_icon.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read Sound KY-037 sensor");
            this.setOutput(true, "Number");
            this.setColour(color_sound);
            this.setTooltip("read value Sound Sensor");
            this.setHelpUrl("");
        }
    };


    //////////////////////////////distance/////////////////////////////////////////////
    Blockly.Blocks['set_pindistance'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/distance.png`, 42, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Set up DISTANCE Ultrasonic SENSOR :")
                .appendField("trig Pin");
            this.appendValueInput("trigPin")
                .setCheck("Number");
            this.appendValueInput("echoPin")
                .setCheck("Number")
                .appendField(", echo Pin");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_distance);
            this.setTooltip("set PIN Dintance Sensor");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['read_distance_mm'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/distance.png`, 42, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read Ultrasonic Distance (mm.)");
            this.setOutput(true, "Number");
            this.setColour(color_distance);
            this.setTooltip("distance(mm)");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['read_distance_cm'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/distance.png`, 42, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read Ultrasonic Distance (cm.)");
            this.setOutput(true, "Number");
            this.setColour(color_distance);
            this.setTooltip("distance(cm)");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['read_distance_in'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/distance.png`, 42, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read Ultrasonic Distance (in.)");
            this.setOutput(true, "Number");
            this.setColour(color_distance);
            this.setTooltip("distance(in)");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['read_distance_m'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/distance.png`, 42, 20, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Read Ultrasonic Distance (m.)");
            this.setOutput(true, "Number");
            this.setColour(color_distance);
            this.setTooltip("distance(m)");
            this.setHelpUrl("");
        }
    };


    //////////////////////////////MLX90614/////////////////////////////////////////////
    Blockly.Blocks['KBD_beginMLX90614'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/mlx90614.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("setup MLX90614 pin (SDA [GPIO21]");
            this.appendDummyInput()
                .appendField(", SCL");
            this.appendValueInput("SCL")
                .setCheck("Number");
            this.appendDummyInput()
                .appendField(")");
            this.setInputsInline(true);

            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_MLX90614);
            this.setTooltip("start sensor MLX90614");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_read_object_temp_c'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/mlx90614.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("MLX90614 read object temperature (C)");
            this.setOutput(true, ["double", "Number"]);
            this.setColour(color_MLX90614);
            this.setTooltip("MLX90614 read object temperature (C)");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_read_object_temp_f'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/mlx90614.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("MLX90614 read object temperature (F)");
            this.setOutput(true, ["double", "Number"]);
            this.setColour(color_MLX90614);
            this.setTooltip("MLX90614 read object temperature (F)");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_read_ambient_temp_c'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/mlx90614.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("MLX90614 read ambient temperature (C)");
            this.setOutput(true, ["double", "Number"]);
            this.setColour(color_MLX90614);
            this.setTooltip("MLX90614 read object temperature (C)");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_read_ambient_temp_f'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/mlx90614.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField("MLX90614 read ambient temperature (F)");
            this.setOutput(true, ["double", "Number"]);
            this.setColour(color_MLX90614);
            this.setTooltip("MLX90614 read object temperature (F)");
            this.setHelpUrl("");
        }
    };

    //////////////////////////////DHT11/////////////////////////////////////////////
    Blockly.Blocks['KBD_dht_setup'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/dht_icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("DHT-1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
                .appendField("Setup")
                .appendField(new Blockly.FieldDropdown([["DHT11", "DHTesp::DHT11"], ["DHT22", "DHTesp::DHT22"]]), "dht_type")

            this.appendValueInput("dht_PIN")
                .setCheck("Number")
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color_dht);
            this.setTooltip("setup sensor DHT ");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_dht_read_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/dht_icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("DHT-1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
                .appendField("read temperature °C");
            this.setInputsInline(true);
            this.setOutput(true, ["float", "Number"]);
            this.setColour(color_dht);
            this.setTooltip("read temperature in Celsius");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['KBD_dht_read_humid'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/dht_icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
                .appendField(new Blockly.FieldVariable("DHT-1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
                .appendField("read humidity %");
            this.setInputsInline(true);
            this.setOutput(true, ["float", "Number"]);
            this.setColour(color_dht);
            this.setTooltip("read humidity in percentage");
            this.setHelpUrl("");
        }
    };
};