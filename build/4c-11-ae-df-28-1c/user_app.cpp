#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

SSD1306Wire oled1(0x3c, 13, 4);



void setup()
{
  
  Serial.begin(115200);

  

  

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop()
{
    oled1.clear();
  oled1.setFont(ArialMT_Plain_16);
  oled1.drawString(0,0,String(String("noootttttttttttt")));
  oled1.display();

  
}
