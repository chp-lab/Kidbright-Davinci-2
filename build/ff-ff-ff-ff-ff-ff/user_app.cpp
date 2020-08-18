#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <Wire.h>
              #include <RtcDS1307.h>
#include <KB_DAVINCI.h>
#include "KB_DAVINCI.h"


SSD1306Wire oled1(0x3c, 5, 22);
#define SDA  5
              #define SCL  22
              #define countof(a) (sizeof(a) / sizeof(a[0]))

              int get_day = 0;
              int get_mouth = 0;
              int get_year = 0;
              int get_hour = 0;
              int get_minute = 0;
              int get_second = 0;
              String get_dateTime;
              RtcDS1307<TwoWire> RTC1(Wire);
int THERMISTOR_PIN = 39;
  				#define VOLTAGE_INPUT 3.30
  				#define NOMINAL_TEMP 25
  				#define NOMINAL_RESISTANCE 100000
  				#define REFERENCE_RESISTANCE 100000 // external RESISTANCE
  				#define B_VALUE 3950
  				#define ADC_RESOLUTION 4095


  				KB_DAVINCIThermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT, REFERENCE_RESISTANCE, NOMINAL_RESISTANCE, NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);
int setpin = 25;
  			KB_DAVINCILDR LDRSensor;
KB_DAVINCIBUZZER music;

KB_DAVINCIBTN_DI1 BTN1;
KB_DAVINCIRGB RGB;
KB_DAVINCIBTN_DI2 BTN2;

void printDateTime(const RtcDateTime& dt)
              {
                  char datestring[20];

                  snprintf_P(datestring,
                          countof(datestring),
                          PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
                          dt.Day(),
                          dt.Month(),
                          dt.Year(),
                          dt.Hour(),
                          dt.Minute(),
                          dt.Second() );

                      get_day =  dt.Day();
                      get_mouth = dt.Month();
                      get_year = dt.Year();
                      get_hour = dt.Hour();
                      get_minute = dt.Minute();
                      get_second = dt.Second();
                      get_dateTime = datestring;
              }

void setup()
{
  music.begin();
Serial.begin(115200);

                      Serial.print("compiled: ");
                      Serial.print(__DATE__);
                      Serial.println(__TIME__);

                      RTC1.Begin(SDA,SCL);

                      RtcDateTime compiled = RtcDateTime(__DATE__, __TIME__);
                      printDateTime(compiled);
                      Serial.println();

                      if (!RTC1.IsDateTimeValid())
                      {
                          if (RTC1.LastError() != 0)
                          {
                              Serial.print("RTC communications error = ");
                              Serial.println(RTC1.LastError());
                          }
                          else
                          {
                              Serial.println("RTC lost confidence in the DateTime!");
                              RTC1.SetDateTime(compiled);
                          }
                      }

                      if (!RTC1.GetIsRunning())
                      {
                          Serial.println("RTC was not actively running, starting now");
                          RTC1.SetIsRunning(true);
                      }

                      RtcDateTime now = RTC1.GetDateTime();
                      if (now < compiled)
                      {
                          Serial.println("RTC is older than compile time!  (Updating DateTime)");
                          RTC1.SetDateTime(compiled);
                      }
                      else if (now > compiled)
                      {
                          Serial.println("RTC is newer than compile time. (this is expected)");
                      }
                      else if (now == compiled)
                      {
                          Serial.println("RTC is the same as compile time! (not expected but all is fine)");
                      }
                      RTC1.SetSquareWavePin(DS1307SquareWaveOut_Low);
LDRSensor.setPin(setpin);

BTN1.init();
RGB.begin();
    				RGB.setCommonCathode(false);
BTN2.init();
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);



        
        
        
        

  			
  			

  		
  		
  		


    
    

    
    
    
      music.setTempo(60);

        const int LED_WIFI = 12;
        pinMode(LED_WIFI, OUTPUT);



      WiFi.begin("test","test");
      while(WiFi.status() != WL_CONNECTED){
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
      }
        digitalWrite(LED_WIFI, 1);
}
void loop()
{
            if (!RTC1.IsDateTimeValid())
          {
              if (RTC1.LastError() != 0)
              {
                  Serial.print("RTC communications error = ");
                  Serial.println(RTC1.LastError());
              }
              else
              {
                  Serial.println("RTC lost confidence in the DateTime!");
              }
          }
          RtcDateTime now = RTC1.GetDateTime();
          printDateTime(now);
          Serial.println();
          if (
  		    BTN1.pressed()
  		) {
    oled1.clear();
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,0,String(String("Button 1 TEST")));
    			    RGB.red();
    			    RGB.green();
    			    RGB.blue();
    		} else if (
  		    BTN2.pressed()
  		) {
    oled1.clear();
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,0,String(String("Button 2 TEST")));
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
    		} else {
    oled1.clear();
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,0,String(((String("Temperature :")+String(
    			thermistor.readTemperatureCelsius()
    		)))));
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,15,String(((String("LDR :")+String(
    		    LDRSensor.readValue()
    	)))));
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,30,String(((String((
                       get_dateTime
            ))))));
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,45,String(((String((WiFi.localIP().toString()))))));
    oled1.display();
    delay(200);
  }

  
}
