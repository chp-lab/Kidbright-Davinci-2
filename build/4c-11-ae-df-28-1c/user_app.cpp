#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "Wire.h"
                   #include <Adafruit_SSD1306.h>
                   #include <Setup_wire_OLED.h>
#include <Wire.h>
              #include <RtcDS1307.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
                  #define SCREEN_HEIGHT 64 // OLED display height, in pixels
                  Setup_wire_OLED Setup_wire = Setup_wire_OLED(0x3c);
                  Adafruit_SSD1306 oled1(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
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
  Setup_wire.begin(5,22);
                  oled1.begin(SSD1306_SWITCHCAPVCC, 0x3C);
                  oled1.clearDisplay();
                  oled1.setTextColor(WHITE);



        
        
        
        

          oled1.clearDisplay();


              oled1.setTextColor(WHITE);
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
          oled1.clearDisplay();
              oled1.setTextSize(1);
              oled1.setCursor(0,0);
              oled1.print(((String((
                     get_dateTime
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,10);
              oled1.print(((String((
              get_year
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,20);
              oled1.print(((String((
                get_mouth
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,30);
              oled1.print(((String((
                get_day
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,40);
              oled1.print(((String((
                get_hour
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,50);
              oled1.print(((String((
                get_minute
          )))));
              oled1.setTextSize(1);
              oled1.setCursor(0,60);
              oled1.print(((String((
                get_second
          )))));
              oled1.display();
  delay(500);

  
}
