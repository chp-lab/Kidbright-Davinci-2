const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
    'use strict';
    var music_colour = "#6699ff";

    Blockly.Blocks['block_game_squid'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/game_icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
              .appendField("Game : Let's go Squid !!");
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/squid.png`, 212, 164, { alt: "*", flipRtl: "FALSE" }));
          this.setPreviousStatement(true, null);
          this.setColour(music_colour);
       this.setTooltip("Let's go Squid !!");
       this.setHelpUrl("");
        }
      };
};