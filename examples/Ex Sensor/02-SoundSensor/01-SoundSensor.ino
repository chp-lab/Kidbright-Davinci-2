#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <Arduino.h>
#include "sound.h"

#include <KB_DAVINCI.h>

Number i;
SSD1306Wire oled1(0x3c, 5, 22);
int setpin = 32;
SoundSensor sound(setpin);

KB_DAVINCIRGB RGB;

void setup() {
  RGB.begin();
  RGB.setCommonCathode(false);
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  i = 0;
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 0, String(((String("value = ") + String((sound.readValue()))))));
  oled1.display();
  if ((sound.readValue()) > 10) {
    i = i + 1;
  }
  if (i == 1) {
    RGB.green();
  }
  if (i == 2) {
    RGB.off();
    i = 0;
  }
  delay(200);
}
