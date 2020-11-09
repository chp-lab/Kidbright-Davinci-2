const nativeImage = require('electron').nativeImage;
var createBuffer = function (pixels, width, height) {
    var depth = 4,
        pixelsLen = pixels.length,
        unpackedBuffer = [],
        threshold = 120;

    var buffer = new Buffer((width * (Math.ceil(height / 8) * 8)) / 8);
    buffer.fill(0x00);// filter pixels to create monochrome image data
    for (var i = 0; i < pixelsLen; i += depth) { // just take the red value
        var pixelVal = pixels[i + 1] = pixels[i + 2] = pixels[i];
        pixelVal = (pixelVal > threshold) ? 1 : 0;
        unpackedBuffer[i / depth] = pixelVal; // push to unpacked buffer list
    }
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y += 8) {
            for (var cy = 0; cy < 8; cy++) {
                var iy = y + cy;
                if (iy >= height) { break; }
                buffer[x * Math.ceil(height / 8) + Math.floor(y / 8)] |= unpackedBuffer[iy * width + x] << cy;
            }
        }
    }
    return buffer;
};

module.exports = function (Blockly) {
    'use strict';

    Blockly.JavaScript["OLED_create_image"] = function (block) {
        var dataurl = block.inputList[1].fieldRow["0"].src_;
        var image = nativeImage.createFromDataURL(dataurl);
        var size = image.getSize();
        var buff = createBuffer(image.getBitmap(), size.width, size.height);
        var hexStringArr = "";
        for (let i = 1; i <= buff.length; i++) {
            hexStringArr += (buff[i - 1] < 16)
                ? `0x0${buff[i - 1].toString(16)},`
                : `0x${buff[i - 1].toString(16)},`;
            if (i % 20 == 0) { hexStringArr += "\n"; }
        }
        hexStringArr = hexStringArr.trim();
        if (hexStringArr.endsWith(",")) {
            hexStringArr = hexStringArr.substring(0, hexStringArr.length - 1);
        }
        var code = `(std::vector<uint8_t>{${hexStringArr}} [])`;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript["OLED_display_image"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_img = Blockly.JavaScript.valueToCode(block,
            "img",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_x = Blockly.JavaScript.valueToCode(block,
            "x",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block,
            "y",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_width = Blockly.JavaScript.valueToCode(block,
            "width",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_height = Blockly.JavaScript.valueToCode(block,
            "height",
            Blockly.JavaScript.ORDER_ATOMIC);
        var code = `${variable_instance}.drawBitmap(${value_x}, ${value_y}, ${value_img}.data(),${value_width},${value_height}, WHITE);\n`;
        return code;
    };


    Blockly.JavaScript["OLED_begin"] = function (block) {
        var value_addr = block.getFieldValue('ADDR');
        var value_sda = Blockly.JavaScript.valueToCode(block, 'SDA', Blockly.JavaScript.ORDER_ATOMIC);
        var value_scl = Blockly.JavaScript.valueToCode(block, 'SCL', Blockly.JavaScript.ORDER_ATOMIC);
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

        var code =
            `
            #EXTINC
                 #include "Wire.h"
                 #include <Adafruit_SSD1306.h>
                 #include <Setup_wire_OLED.h>
            #END

            #VARIABLE
                
                #define SCREEN_WIDTH 128 // OLED display width, in pixels
                #define SCREEN_HEIGHT 64 // OLED display height, in pixels
                Setup_wire_OLED Setup_wire = Setup_wire_OLED(${value_addr}); 
                Adafruit_SSD1306 ${variable_instance}(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
                
            #END
                Setup_wire.begin(${value_sda},${value_scl});
                ${variable_instance}.begin(SSD1306_SWITCHCAPVCC, 0x3C);
                ${variable_instance}.clearDisplay();
                ${variable_instance}.setTextColor(WHITE);
            \n
            `;
        return code;
    };

    Blockly.JavaScript["OLED_display_display"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.display();
        \n`;
        return code;
    };

    Blockly.JavaScript["OLED_setTextColor_WHITE"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.setTextColor(WHITE);
        \n`;
        return code;
    };

    Blockly.JavaScript["OLED_setTextColor_BLACK_WHITE"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.setTextColor(BLACK, WHITE);\n`;
        return code;
    };

    Blockly.JavaScript["OLED_clearDisplay"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `  
        ${variable_instance}.clearDisplay();
        \n`;
        return code;
    };

    Blockly.JavaScript["OLED_display_print_text"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);

        var value_text = Blockly.JavaScript.valueToCode(block,
            "text",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_x = Blockly.JavaScript.valueToCode(block,
            "x",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block,
            "y",
            Blockly.JavaScript.ORDER_ATOMIC);
        var dropdown_font = block.getFieldValue("font");
        var code =
            `
            ${variable_instance}.setTextSize(${dropdown_font});
            ${variable_instance}.setCursor(${value_x},${value_y});
            ${variable_instance}.print(${value_text});
            `;
        return code;
    };

    Blockly.JavaScript['OLED_display_print_number'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_number_show = Blockly.JavaScript.valueToCode(block, 'number_show', Blockly.JavaScript.ORDER_ATOMIC);
        var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
        var dropdown_font = block.getFieldValue('font');
        var code =
            `
                ${variable_instance}.setTextSize(${dropdown_font});
                ${variable_instance}.setCursor(${value_x},${value_y});
                ${variable_instance}.println(${value_number_show});
                `;
        return code;
    };
    Blockly.JavaScript['OLED_display_startscrollright'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.startscrollright(0x00, 0x07);
            delay(2000);
            `;
        return code;
    };
    Blockly.JavaScript['OLED_display_startscrollleft'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.startscrollleft(0x00, 0x07);
            delay(2000);
            `;
        return code;
    };
    Blockly.JavaScript['OLED_display_startscroll_diagright'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.startscrolldiagright(0x00, 0x07);
            delay(2000);
            `;
        return code;
    };
    Blockly.JavaScript['OLED_display_startscroll_diagleft'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.startscrolldiagleft(0x00, 0x07);
            delay(2000);
            `;
        return code;
    };
    Blockly.JavaScript['OLED_display_stop_scroll'] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var code = `
            ${variable_instance}.stopscroll();
            `;
        return code;
    };

    Blockly.JavaScript["OLED_display_draw_rect"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_x = Blockly.JavaScript.valueToCode(block,
            "x",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block,
            "y",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_width = Blockly.JavaScript.valueToCode(block,
            "width",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_height = Blockly.JavaScript.valueToCode(block,
            "height",
            Blockly.JavaScript.ORDER_ATOMIC);
        var checkbox_fill = block.getFieldValue("fill") == "TRUE";
        if (checkbox_fill) {
            var code = `${variable_instance}.fillRect(${value_x},${value_y},${value_width},${value_height},WHITE);\n`;
        } else {
            var code = `${variable_instance}.drawRect(${value_x},${value_y},${value_width},${value_height},WHITE);\n`;
        }
        return code;
    };

    Blockly.JavaScript["OLED_display_draw_RoundRect"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_x = Blockly.JavaScript.valueToCode(block,
            "x",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block,
            "y",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_width = Blockly.JavaScript.valueToCode(block,
            "width",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_height = Blockly.JavaScript.valueToCode(block,
            "height",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_radius = Blockly.JavaScript.valueToCode(block,
            "radius",
            Blockly.JavaScript.ORDER_ATOMIC);
        var checkbox_fill = block.getFieldValue("fill") == "TRUE";
        if (checkbox_fill) {
            var code = `${variable_instance}.fillRoundRect(${value_x},${value_y},${value_width},${value_height},${value_radius},WHITE);\n`;
        } else {
            var code = `${variable_instance}.drawRoundRect(${value_x},${value_y},${value_width},${value_height},${value_radius},WHITE);\n`;
        }
        return code;
    };
    Blockly.JavaScript["OLED_display_draw_Circle"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_x = Blockly.JavaScript.valueToCode(block,
            "x",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(block,
            "y",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_height = Blockly.JavaScript.valueToCode(block,
            "height",
            Blockly.JavaScript.ORDER_ATOMIC);
        var checkbox_fill = block.getFieldValue("fill") == "TRUE";
        if (checkbox_fill) {
            var code = `${variable_instance}.fillCircle(${value_x},${value_y},${value_height},WHITE);\n`;
        } else {
            var code = `${variable_instance}.drawCircle(${value_x},${value_y},${value_height},WHITE);\n`;
        }
        return code;
    };
    Blockly.JavaScript["OLED_display_draw_Triangle"] = function (block) {
        var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
        var value_x1 = Blockly.JavaScript.valueToCode(block,
            "X1",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y1 = Blockly.JavaScript.valueToCode(block,
            "Y1",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_x2 = Blockly.JavaScript.valueToCode(block,
            "X2",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_y2 = Blockly.JavaScript.valueToCode(block,
            "Y2",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_x3 = Blockly.JavaScript.valueToCode(block,
            "X3",
            Blockly.JavaScript.ORDER_ATOMIC);
        var value_x3 = Blockly.JavaScript.valueToCode(block,
            "Y3",
            Blockly.JavaScript.ORDER_ATOMIC);
        var checkbox_fill = block.getFieldValue("fill") == "TRUE";
        if (checkbox_fill) {
            var code = `${variable_instance}.fillTriangle(${value_x1},${value_y1},${value_x2},${value_y2},${value_x3},${value_x3},WHITE);\n`;
        } else {
            var code = `${variable_instance}.drawTriangle(${value_x1},${value_y1},${value_x2},${value_y2},${value_x3},${value_x3},WHITE);\n`;
        }
        return code;
    };
}
