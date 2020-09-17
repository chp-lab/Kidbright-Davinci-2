module.exports = function(Blockly){
'use strict';

const notes = {
  "SIL" : -1,
  "C2" : 65,  "C#2" : 69,  "D2" : 73,  "D#2" : 78,  "E2" : 82,  "F2" : 87,  "F#2" : 93,  "G2" : 98,  "G#2" : 104,  "A2" : 110,  "A#2" : 117,  "B2" : 123,
  "C3" : 131,  "C#3" : 139,  "D3" : 147,  "D#3" : 156,  "E3" : 165,  "F3" : 175,  "F#3" : 185,  "G3" : 196,  "G#3" : 208,  "A3" : 220,  "A#3" : 233,  "B3" : 247,
  "C4" : 262,  "C#4" : 277,  "D4" : 294,  "D#4" : 311,  "E4" : 330,  "F4" : 349,  "F#4" : 370,  "G4" : 392,  "G#4" : 415,  "A4" : 440,  "A#4" : 466,  "B4" : 494,
  "C5" : 523,  "C#5" : 554,  "D5" : 587,  "D#5" : 622,  "E5" : 659,  "F5" : 698,  "F#5" : 740,  "G5" : 784,  "G#5" : 831,  "A5" : 880,  "A#5" : 932,  "B5" : 988,
  "C6" : 1047,  "C#6" : 1109,  "D6" : 1175,  "D#6" : 1245,  "E6" : 1319,  "F6" : 1397,  "F#6" : 1480,  "G6" : 1568,  "G#6" : 1661,  "A6" : 1760,  "A#6" : 1865,  "B6" : 1976
};
// =============================================================================
// music
// =============================================================================
Blockly.JavaScript['setup_nx2003_Music'] = function(block) {
  var code = `
  #EXTINC
    #include <KB_DAVINCI.h>
  #END
  #VARIABLE
    KB_DAVINCIBUZZER music;
  #SETUP
    music.begin();
  #END

  #END
`;
return code;
};

Blockly.JavaScript['setup_tempo'] = function(block) {
  var number_value_tempo = Blockly.JavaScript.valueToCode(block, 'tempo', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `
  #EXTINC
    #include <KB_DAVINCI.h>
  #END
  #VARIABLE
     
  #END
  #SETUP
     
  #END
    music.setTempo(${number_value_tempo});
  `;
  return code;
};

Blockly.JavaScript['music_note'] = function(block) {
	var code = 'music.tone('+ block.getFieldValue('NOTE') + ',' + block.getFieldValue('DURATION') + ');\n';
	return code;
};

Blockly.JavaScript["music_notes"] = function(block) {
    let text_notes = block.getFieldValue("notes").split(",").map(e=>e.trim());
    let keyNote = text_notes.map(e => (e in notes) ? notes[e] : -1);
    let code = `(std::vector<int>{${keyNote}})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["music_song_mario_underworld"] = function (block) {
  let text_notes = block.getFieldValue("notes").split(",").map(e => e.trim());
  let keyNote = text_notes.map(e => (e in notes) ? notes[e] : -1);
  let code = `(std::vector<int>{${keyNote}})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["music_song_jingle_bell"] = function (block) {
  let text_notes = block.getFieldValue("notes").split(",").map(e => e.trim());
  let keyNote = text_notes.map(e => (e in notes) ? notes[e] : -1);
  let code = `(std::vector<int>{${keyNote}})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["music_song_cannon_rock"] = function (block) {
  let text_notes = block.getFieldValue("notes").split(",").map(e => e.trim());
  let keyNote = text_notes.map(e => (e in notes) ? notes[e] : -1);
  let code = `(std::vector<int>{${keyNote}})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["music_song_ice_cream"] = function (block) {
  let text_notes = block.getFieldValue("notes").split(",").map(e => e.trim());
  let keyNote = text_notes.map(e => (e in notes) ? notes[e] : -1);
  let code = `(std::vector<int>{${keyNote}})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript["music_play_notes"] = function(block) {
    let number_duration = block.getFieldValue("DURATION");
    let dropdown_instrument = block.getFieldValue("instrument");
    let value_note = Blockly.JavaScript.valueToCode(block, "note",Blockly.JavaScript.ORDER_NONE);
    let code = `music.song(${value_note},${number_duration});\n`;
    return code;
};
Blockly.JavaScript['music_ice_cream'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
    #SETUP
       
		#END
        music.tone(494, 500);
        music.tone(587, 250);
        music.tone(440, 1000);
        music.tone(659, 500);
        music.tone(784, 250);
        music.tone(523, 1000);
        music.tone(659, 250);
        music.tone(740, 250);
        music.tone(587, 250);
        music.tone(659, 250);
        music.tone(740, 250);
        music.tone(880, 250);
        music.tone(784, 1000);
		`;
		return code;
};
Blockly.JavaScript['music_cat'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
    #SETUP
       
		#END
        music.tone(659, 1000);
        music.tone(587, 1000);
        music.tone(523, 1000);
        music.tone(587, 1000);
        music.tone(659, 1000);
        music.tone(659, 1000);
        music.tone(659, 2000);
        music.tone(587, 1000);
        music.tone(587, 1000);
        music.tone(587, 2000);
        music.tone(659, 1000);
        music.tone(784, 1000);
        music.tone(784, 2000);
        music.tone(659, 1000);
        music.tone(587, 1000);
        music.tone(523, 1000);
        music.tone(587, 1000);
        music.tone(659, 1000);
        music.tone(659, 1000);
        music.tone(659, 2000);
        music.tone(587, 1000);
        music.tone(587, 1000);
        music.tone(659, 1000);
        music.tone(587, 1000);
        music.tone(523, 4000);
        delay(2000);
		`;
		return code;
};
Blockly.JavaScript['music_conan'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
    #SETUP
       
		#END
            music.tone(831, 500);
            music.tone(784, 500);
            music.tone(698, 1000);
            music.tone(1047, 2000);
            music.tone(831, 500);
            music.tone(698, 500);
            music.tone(784, 1000);
            music.tone(1109, 1000);
            music.tone(1047, 500);
            music.tone(932, 2000);
            music.tone(831, 500);
            music.tone(932, 500);
            music.tone(831, 500);
            music.tone(932, 500);
            music.tone(1047, 1000);
            music.tone(831, 500);
            music.tone(784, 500);
            music.tone(698, 1000);
            music.tone(932, 1000);
            music.tone(831, 500);
            music.tone(784, 1000);
            music.tone(698, 250);
            music.tone(784, 250);
            music.tone(831, 1000);
            music.tone(698, 1000);
            music.tone(1047, 1000);
            music.tone(831, 1000);
            music.tone(932, 1000);
            music.tone(1397, 1000);
            music.tone(1245, 1000);
            music.tone(1109, 500);
            music.tone(1047, 250);
            music.tone(932, 250);
            music.tone(1047, 2000);
            delay(2000);
		`;
		return code;
};
Blockly.JavaScript['music_pirate'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
          Serial.println(String("1st round"));
          music.tone(440, 500);
          music.tone(523, 500);
          music.tone(587, 1000);
          music.tone(587, 1000);
          music.tone(587, 500);
          music.tone(659, 500);
          music.tone(698, 1000);
          music.tone(698, 1000);
          music.tone(698, 500);
          music.tone(784, 500);
          music.tone(659, 1000);
          music.tone(659, 1000);
          music.tone(587, 500);
          music.tone(523, 500);
          music.tone(523, 500);
          music.tone(587, 1000);
          Serial.println(String("2nd round"));
          music.tone(440, 500);
          music.tone(523, 500);
          music.tone(587, 1000);
          music.tone(587, 1000);
          music.tone(587, 500);
          music.tone(659, 500);
          music.tone(698, 1000);
          music.tone(698, 1000);
          music.tone(698, 500);
          music.tone(784, 500);
          music.tone(659, 1000);
          music.tone(659, 1000);
          music.tone(587, 500);
          music.tone(523, 500);
          music.tone(587, 2000);
          Serial.println(String("3rd roud"));
          music.tone(440, 500);
          music.tone(523, 500);
          music.tone(587, 1000);
          music.tone(587, 1000);
          music.tone(587, 500);
          music.tone(698, 500);
          music.tone(784, 1000);
          music.tone(784, 1000);
          music.tone(784, 500);
          music.tone(880, 500);
          music.tone(932, 1000);
          music.tone(932, 1000);
          music.tone(880, 500);
          music.tone(784, 500);
          music.tone(880, 500);
          music.tone(587, 2000);
          music.tone(587, 500);
          music.tone(659, 500);
          music.tone(698, 1000);
          music.tone(698, 1000);
          music.tone(784, 1000);
          music.tone(880, 500);
          music.tone(587, 2000);
          music.tone(587, 500);
          music.tone(698, 500);
          music.tone(659, 1000);
          music.tone(659, 1000);
          music.tone(698, 500);
          music.tone(587, 500);
          music.tone(659, 2000);
          delay(2000);
  
		`;
		return code;
};
Blockly.JavaScript['music_mario'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
    #SETUP
       
		#END
        music.tone(1319, 500);
        music.tone(1319, 500);
        delay(200);
        music.tone(1319, 1000);
        delay(200);
        music.tone(2093, 500);
        music.tone(1319, 1000);
        delay(200);
        music.tone(1568, 1000);
        delay(200);
        music.tone(1568, 1000);
        delay(200);
        music.tone(2093, 1000);
        delay(200);
        music.tone(1568, 1000);
        delay(200);
        music.tone(1319, 1000);
        delay(200);
        music.tone(1760, 500);
        delay(200);
        music.tone(1976, 1000);
        delay(200);
        music.tone(1865, 1000);
        music.tone(1760, 1000);
        delay(200);
        music.tone(1568, 500);
        music.tone(1319, 1000);
        music.tone(1568, 1000);
        music.tone(1760, 1000);
        delay(200);
        music.tone(1397, 1000);
        music.tone(1568, 1000);
        delay(200);
        music.tone(1319, 1000);
        delay(200);
        music.tone(2093, 1000);
        music.tone(1175, 1000);
        music.tone(1976, 1000);
        delay(200);
        music.tone(2093, 1000);
        delay(200);
        music.tone(1568, 1000);
        delay(200);
        music.tone(1319, 1000);
        delay(200);
        music.tone(1760, 1000);
        delay(200);
        music.tone(1976, 1000);
        delay(200);
        music.tone(1865, 1000);
        music.tone(1760, 1000);
        delay(200);
        music.tone(1568, 1000);
        music.tone(1319, 1000);
        music.tone(1568, 1000);
        music.tone(1760, 1000);
        delay(200);
        music.tone(1397, 1000);
        music.tone(1568, 1000);
        delay(200);
        music.tone(1319, 1000);
        delay(200);
        music.tone(2093, 1000);
        music.tone(1175, 1000);
        music.tone(1976, 1000);
        delay(200);
		`;
		return code;
};
Blockly.JavaScript['music_harry'] = function(block) {
  var code = `
		#EXTINC
      #include <KB_DAVINCI.h>
		#END
		#VARIABLE

		#END
    #SETUP
       
		#END
        Serial.println(String("1st Part"));
        music.tone(494, 500);
        music.tone(659, 1000);
        music.tone(784, 250);
        music.tone(740, 500);
        music.tone(659, 1000);
        Serial.println(String("2nd Part"));
        music.tone(988, 500);
        music.tone(880, 1000);
        music.tone(740, 1000);
        Serial.println(String("3rd Part"));
        music.tone(659, 1000);
        music.tone(784, 250);
        music.tone(740, 500);
        music.tone(622, 1000);
        music.tone(698, 500);
        music.tone(494, 1000);
        music.tone(392, 500);
        music.tone(494, 1000);
        Serial.println(String("4th Part"));
        music.tone(494, 500);
        music.tone(659, 1000);
        music.tone(784, 250);
        music.tone(740, 500);
        music.tone(659, 1000);
        Serial.println(String("5th Part"));
        music.tone(988, 500);
        music.tone(1175, 1000);
        music.tone(1109, 500);
        music.tone(1047, 1000);
        Serial.println(String("6th Part"));
        music.tone(831, 500);
        music.tone(1047, 1000);
        music.tone(988, 250);
        music.tone(932, 500);
        music.tone(466, 1000);
        Serial.println(String("7th Part"));
        music.tone(784, 500);
        music.tone(659, 1000);
        music.tone(392, 500);
        music.tone(494, 1000);
        Serial.println(String("8th Part"));
        music.tone(784, 500);
        music.tone(988, 1000);
        music.tone(784, 500);
        music.tone(988, 1000);
        music.tone(784, 500);
        music.tone(1047, 1000);
        music.tone(988, 500);
        music.tone(932, 1000);
        Serial.println(String("9th Part"));
        music.tone(740, 500);
        music.tone(784, 1000);
        music.tone(988, 250);
        music.tone(932, 500);
        music.tone(466, 1000);
        music.tone(494, 500);
        music.tone(988, 1000);
        music.tone(392, 500);
        music.tone(494, 1000);
        Serial.println(String("10th Part"));
        music.tone(784, 500);
        music.tone(988, 1000);
        music.tone(784, 500);
        music.tone(988, 1000);
        music.tone(784, 500);
        music.tone(1175, 1000);
        music.tone(1109, 500);
        music.tone(1047, 1000);
        music.tone(831, 500);
        music.tone(1047, 500);
        music.tone(988, 500);
        music.tone(932, 500);
        music.tone(466, 1000);
        music.tone(784, 500);
        music.tone(659, 2000);
        delay(2000);
		`;
		return code;
};
}
