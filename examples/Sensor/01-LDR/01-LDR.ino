#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include "KB_DAVINCI.h"

SSD1306Wire oled1(0x3c, 5, 22);
int setpin = 25;
KB_DAVINCILDR LDRSensor;

void setup() {
  LDRSensor.setPin(setpin);
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 0,
                   String(((String("LDR :") + String(LDRSensor.readValue())))));
  oled1.display();
  delay(200);
}
