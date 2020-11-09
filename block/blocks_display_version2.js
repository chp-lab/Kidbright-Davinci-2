const app = require('electron').remote;
const nativeImage = require('electron').nativeImage;
const dialog = app.dialog;
const dirIcon = Vue.prototype.$global.board.board_info.dir;

function floyd_steinberg(imageData, w) {
  var imageDataLength = imageData.length;
  var lumR = [],
    lumG = [],
    lumB = [];
  var newPixel, err;
  for (var i = 0; i < 256; i++) {
    lumR[i] = i * 0.299;
    lumG[i] = i * 0.587;
    lumB[i] = i * 0.110;
  }
  // Greyscale luminance (sets r pixels to luminance of rgb)
  for (var i = 0; i <= imageDataLength; i += 4) {
    imageData[i] = Math.floor(lumR[imageData[i]] + lumG[imageData[i + 1]] + lumB[imageData[i + 2]]);
  }
  for (var currentPixel = 0; currentPixel <= imageDataLength; currentPixel += 4) {
    // threshold for determining current pixel's conversion to a black or white pixel
    newPixel = imageData[currentPixel] < 150 ? 0 : 255;
    err = Math.floor((imageData[currentPixel] - newPixel) / 23);
    imageData[currentPixel + 0 * 1 - 0] = newPixel;
    imageData[currentPixel + 4 * 1 - 0] += err * 7;
    imageData[currentPixel + 4 * w - 4] += err * 3;
    imageData[currentPixel + 4 * w - 0] += err * 5;
    imageData[currentPixel + 4 * w + 4] += err * 1;
    // Set g and b values equal to r (effectively greyscales the image fully)
    imageData[currentPixel + 1] = imageData[currentPixel + 2] = imageData[currentPixel];
  }
  return imageData;
}

module.exports = function (Blockly) {
  'use strict';
  var music_colour = "#6666ff";

  Blockly.Blocks['OLED_begin'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
      .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("begin address")
        .appendField(new Blockly.FieldTextInput("0x3c"), "ADDR");
      this.appendDummyInput()
        .appendField("pin (SDA");
      this.appendValueInput("SDA")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField(", SCL");
      this.appendValueInput("SCL")
        .setCheck("Number");
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("begin address");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_clearDisplay"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("clear display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("clear display");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["OLED_setTextColor_WHITE"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("setTextColor White font");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("setTextColor Text is White font");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["OLED_setTextColor_BLACK_WHITE"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("setTextColor (Black font, Background White)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("setTextColor font is Black and background color is White ");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_create_image"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("create image from PNG file");
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAIAAABdtOgoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ/SURBVHhe7ZbbdQIxDES3LgraeqiGZiiG2JLWHhmbx08Gkrk/kWU9GR/IdhNUJAAZCUBGApCRAGQkABkJQEYCkJEAZCQAGQlARgKQkQBkJAAZCUBGApCRAGQkABkJQEYCkJEAZCQAGQlARgKQkQBkJACZFwW47Nu2nc7XOP4ZbK9tv8SRgASQAP+bhQDX86k+jYo9jxDgbA+mAG/GH5GDEs393dtLQLNRZL9qTnwHs/oeHpUh18xjfHzvkBAxF/NUirf16DnQts+KsxTiwos7PXZgKkDesxrRweZw20dCGxZe+aHw9bzH33obC9p92A4WhfRF/VTszj+UrkBCxKT4sVfxm+s+8a492pO9GjMB+p6N5OqHHOk96/Ghv18U0pzTSWfdVvVTte5GMwMJKSYVyt2CPAymQbW2iUW3EzIRYMg10gztkGaGi5X/MB3rAOfGMGiqalWW9dPoEJX8CFykoikBxh/m7cUH65W9nKUA0TDAGeCQ3DD1yn/QW+TIORaznU5tu2X91Kk3mUwQwAWEDwmtG3r7CO4NjqFe2cuYfQWlUeA3YFIc/fPx0F+s8PV7s45VF7QVI/tJX7fd9CAMScCFm5OavZl5PcKrD04EJnnI9Ef4GKAC/Y4u6dAjC9Bv7gdvj/VZG5OhIw3XXPVtxeIfGsvx4GVhu3AzWqQE2LePuu/FHJ1Ga/N8r8JCgE8DPoNPI422VHrJdwjgb+mdvX6N/JG/P+g3COA7fubnX8lfNW+O+SVfQX8XCUBGApCRAGQkABkJQEYCkJEAZCQAGQlARgKQkQBkJAAZCUBGApCRAGQkABkJQEYCkJEAZCQAGQlARgKQkQBkJACV2+0HImEfdtax+UEAAAAASUVORK5CYII=",
          128,
          64,
          "click to upload",
          function (e) {
            let myself = this;
            let id = this.sourceBlock_.id.toUpperCase();
            const dialogOptions = {
              filters: [{ name: "Images PNG", extensions: ["png"] }],
              properties: ["openFile"]
            };
            dialog.showOpenDialog(dialogOptions, imageFileName => {
              console.log(imageFileName);
              if (imageFileName != undefined) {
                imageFileName = imageFileName[0];
                //--- resize image ---//
                let image = nativeImage.createFromPath(imageFileName);
                let size = image.getSize();
                if (size.width > 128) {
                  image = image.resize({ width: 128 });
                  size = image.getSize();
                }
                if (size.height > 64) {
                  image = image.resize({ height: 64 });
                  size = image.getSize();
                }
                var buff = image.getBitmap();
                //---- dithering image ----//
                floyd_steinberg(buff, size.width);
                //---- display image ----//
                myself.sourceBlock_.inputList[2].fieldRow[0].setValue(`image size ${size.width} x ${size.height}`);
                myself.sourceBlock_.inputList[2].fieldRow[0].init();
                myself.setValue(image.toDataURL());
                myself.init();
              }
            });
          },
          true));
      this.appendDummyInput().appendField("image size 128 x 64");

      this.setOutput(true, "std::vector<uint8_t>");
      this.setColour(music_colour);
      this.setTooltip(
        "create image from PNG file (for best quality result please use size within 128x64 pixel otherwise, it'll resize)");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_image"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance");
      this.appendValueInput("img")
        .setCheck("std::vector<uint8_t>")
        .appendField("draw image");
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField(" at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(") width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("display image to display");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_display"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("display");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("display everything to screen");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_print_text"] = {
    init: function () {
      this.appendValueInput("text")
        .setCheck("String")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .appendField("display text");
      this.appendValueInput("x")
        .setCheck("Number")
        .appendField("at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendDummyInput()
        .appendField(")  font")
        .appendField(new Blockly.FieldDropdown([
          [
            "Arial_MT_10pt",
            "1"
          ],
          ["Arial_MT_16pt", "2"],
          ["Arial_MT_24pt", "3"],
          ["Arial_MT_28pt", "4"],
          ["Arial_MT_32pt", "5"],
        ]), "font");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("display string at x,y");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['OLED_display_print_number'] = {
    init: function() {
      this.appendValueInput("number_show")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display number");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField("at (X");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField(", Y");
      this.appendDummyInput()
          .appendField(")  font")
          .appendField(new Blockly.FieldDropdown([["Arial_MT_10pt","1"], ["Arial_MT_16pt","2"], ["Arial_MT_24pt","3"], ["Arial_MT_28pt","4"], ["Arial_MT_32pt","5"]]), "font");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display number at x,y");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OLED_display_startscrollright'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display start scroll-right");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display start scroll-right");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OLED_display_startscrollleft'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display start scroll-left");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display start scroll-left");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OLED_display_startscroll_diagright'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display start scroll-diagright");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display start scroll-diagright");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OLED_display_startscroll_diagleft'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display start scroll-diagleft");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display start scroll-diagleft");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OLED_display_stop_scroll'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
          .appendField("display stop-scroll");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
   this.setTooltip("display start stop-scroll");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_draw_rect"] = {
    init: function () {
      this.appendValueInput("x")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .setCheck("Number")
        .appendField("draw rectangle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(")  width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField(" height");
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("draw rectangle to display");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_draw_RoundRect"] = {
    init: function () {
      this.appendValueInput("x")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .setCheck("Number")
        .appendField("draw round-rectangle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(")  width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField(" height");
      this.appendValueInput("radius")
        .setCheck("Number")
        .appendField(" radius");  
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("draw round-rectangle to display");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_draw_rect"] = {
    init: function () {
      this.appendValueInput("x")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .setCheck("Number")
        .appendField("draw rectangle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendValueInput("width")
        .setCheck("Number")
        .appendField(")  width");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField(" height");
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("draw rectangle to display");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["OLED_display_draw_Circle"] = {
    init: function () {
      this.appendValueInput("x")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .setCheck("Number")
        .appendField("draw Circle at (X");
      this.appendValueInput("y")
        .setCheck("Number")
        .appendField(", Y");
      this.appendValueInput("height")
        .setCheck("Number")
        .appendField(" height");
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("draw circle to display");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["OLED_display_draw_Triangle"] = {
    init: function () {
      this.appendValueInput("X1")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_display.png`, 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("oled1", null, ["Plugin.OLED"], ["Plugin.OLED"]), "instance")
        .setCheck("Number")
        .appendField("draw Triangle at Point 1(X1:");
      this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField(", Y1:");
      this.appendValueInput("X2")
        .setCheck("Number")
        .appendField("),Point 2(X2:");
      this.appendValueInput("Y2")
        .setCheck("Number")
        .appendField(", Y2:");
        this.appendValueInput("X3")
        .setCheck("Number")
        .appendField("),Point 3(X3:");
      this.appendValueInput("Y3")
        .setCheck("Number")
        .appendField(", Y3:");
      this.appendDummyInput()
        .appendField(" fill ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "fill");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("draw Triangle to display");
      this.setHelpUrl("");
    }
  };
}
