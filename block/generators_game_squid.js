module.exports = function (Blockly) {
  'use strict';
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript['block_game_squid'] = function (block) {
    var code = `
		#EXTINC	
        #include <Wire.h>
        #include "SSD1306Wire.h"
        #include "images.h"
        #include "fontovi.h"
        #include "KB_DAVINCI.h"

		#END
		#VARIABLE
        SSD1306Wire  display(0x3c, 5, 22);
        KB_DAVINCIRGB RGB;
        KB_DAVINCIBUZZER music;
        
        #define DEMO_DURATION 3000
        #define SWITHCH_Button_DI1 34
        #define SWITHCH_Button_DI2 35
        #define delay_time 1500
        
        typedef void (*Demo)(void);
        
        float zidx[4];
        int prazan[4];
        int razmak = 32;
        int sirinaProlaza = 30;
        
        int score = 0;
        int hight_score = 0;
        int stis = 0;
        float fx = 30.00;
        float fy = 22.00;
        int smjer = 0;
        unsigned long trenutno = 0;
        
        int display_start_game = 0;
        int frame = 0;
        int sviraj = 0;
        unsigned long ton = 0;
		#END
    
    #FUNCTION
    void set_time321_display() {
      display.setFont(ArialMT_Plain_16);
      display.clear();
      display.drawString(54, 26, "3 !!");
      display.display();
      delay(1000);
    
      display.clear();
      display.drawString(54, 26, "2 !!");
      display.display();
      delay(1000);
    
      display.clear();
      display.drawString(54, 26, "1 !!");
      display.display();
      delay(1000);
    }
    
    void set_display_start() {
      display.setFont(ArialMT_Plain_16);
      display.drawString(0, 4, "Let's go Squid !!");
      display.drawXbm(0, 0, 128, 64, wall);
    
      display.drawXbm(16, 28, 7, 12, squid);
      display.drawXbm(26, 24, 7, 12, squid);
      display.drawXbm(36, 28, 7, 12, squid);
      display.setFont(ArialMT_Plain_10);
      display.drawString(0, 40, "press to start");
    }
    void set_letgo_display() {
      display.clear();
      display.drawString(22, 26, "Let's Go squid !!!");
      display.display();
      delay(1000);
      set_time321_display();
    }
    void endgame_display() {
      display.clear();
      display.drawString(22, 26, "Congratulations !!!");
      display.drawString(36, 44, "Score : 999");
      display.display();
      delay(1000);
    }
   
    void set_gameover_display() {
      delay(1000);
      if (score > hight_score) {
        hight_score = score;
      }
      if (score >= 999) {
        endgame_display();
      }
      else {
        display.clear();
        display.drawString(28, 5, " GAME OVER ");
        display.drawString(30, 32, "High score : " + String(hight_score));
        display.drawString(42, 44, "Score : " + String(score));
        display.display();
        delay(5000);
      }
    
    }
    #END    
    
		#SETUP
          RGB.setCommonCathode(false);
          music.begin();
          music.setTempo(240);
          Serial.println();
          Serial.println();
          
          pinMode(2, OUTPUT);
          pinMode(23, OUTPUT);
          pinMode(25, OUTPUT);
          pinMode(SWITHCH_Button_DI2, INPUT);
          pinMode(SWITHCH_Button_DI1, INPUT);
          display.init();
        
          for (int i = 0; i < 4; i++)
          {
            zidx[i] = 128 + ((i + 1) * razmak);
            {
              prazan[i] = random(8, 32);
            }
          }
        
          display.flipScreenVertically();
          display.setFont(ArialMT_Plain_10);
        
        
    #END
    
    display.clear();

    if (display_start_game == 0)
    {
      set_display_start(); //function set default
       
      if (digitalRead(SWITHCH_Button_DI2) == 1 || digitalRead(SWITHCH_Button_DI1) == 1) {
        RGB.begin();
        RGB.red();
        set_letgo_display();  //function ready or go to play game
        display_start_game = 1;
      }
  
    }
   
    if (display_start_game == 1)
    {
  
      display.setFont(ArialMT_Plain_10);
      display.drawString(3, 0, String(score));
  
      if (digitalRead(SWITHCH_Button_DI2) == 1 || digitalRead(SWITHCH_Button_DI1) == 1)
  
  
      { 
        
        RGB.green(); // set RGB LED to green
        RGB.off();
        music.tone(100, 500); // set music
        if (stis == 0)
        {
          trenutno = millis();
          smjer = 1;
          sviraj = 1;
          stis = 1;
          ton = millis();
  
        }
  
      } else {
        stis = 0;
      }
  
      /// set size pillar
      for (int j = 0; j < 4; j++) {
        display.setColor(WHITE);
        display.fillRect(zidx[j], 0, 10, 64);
        display.setColor(BLACK);
        display.fillRect(zidx[j], prazan[j], 16, sirinaProlaza);
  
      }
  
      display.setColor(WHITE);
      display.drawXbm(fx, fy, 7, 12, squid);
  
      for (int j = 0; j < 4; j++)
      {
        zidx[j] = zidx[j] - 0.01;
        if (zidx[j] < -7) {
          score = score + 1;
          digitalWrite(23, 1);
          prazan[j] = random(8, 32);
  
          zidx[j] = 128;
        }
      }
      if ((trenutno + 185) < millis())
        smjer = 0;
  
      if ((ton + 40) < millis())
        sviraj = 0;
  
      if (smjer == 0)
        fy = fy + 0.01;
      else
        fy = fy - 0.03;
  
  
      if (sviraj == 1)
        digitalWrite(23, 1);
      else
        digitalWrite(23, 0);
  
      if (fy > 63 || fy < 0) {
        display_start_game = 0;
        digitalWrite(23, 0);
        set_gameover_display();
        digitalWrite(23, 1);
        fy = 22;
        score = 0;
        delay(500);
        for (int i = 0; i < 4; i++)
        {
          zidx[i] = 128 + ((i + 1) * razmak);
          {
            prazan[i] = random(4, 30);
          }
        }
      }
  
      for (int m = 0; m < 4; m++)
        if (zidx[m] <= fx + 7 && fx + 7 <= zidx[m] + 6)
        {
  
          if (fy < prazan[m] || fy + 8 > prazan[m] + sirinaProlaza) {
            display_start_game = 0;
            digitalWrite(23, 1);
            set_gameover_display();
            fy = 22;
            score = 0;          
            delay(500);
            digitalWrite(23, 0);
            for (int i = 0; i < 4; i++)
            {
              zidx[i] = 128 + ((i + 1) * razmak);
              {
                prazan[i] = random(8, 32);
              }
            }
          }
        }
      display.drawRect(0, 0, 128, 64);
    }
  
    display.display();
  
        
		`;
    return code;
  };
};
