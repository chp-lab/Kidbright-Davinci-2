#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "Servo.h"
#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>

Servo Servo1;
SSD1306Wire oled1(0x3c, 5, 22);
KB_DAVINCIBTN_DI1 BTN1;



void setup()
{
  BTN1.init();
  Servo1.attach(32);

  

  

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop()
{
    oled1.clear();
  if (
  		    BTN1.pressed()
  		) {
    Servo1.write(20);
    Servo1.writeMicroseconds(30);
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,0,String(((String((Servo1.read()))))));
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,20,String(((String((Servo1.readMicroseconds()))))));
    delay(2000);
  }
  oled1.display();

  
}
