#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

Number i;
Number j;
SSD1306Wire oled1(0x3c, 5, 22);

void setup() {
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  j = 100;
  i = 0;
}
void loop() {
  i = i + 5;
  j = j - 5;
  oled1.clear();
  oled1.drawProgressBar(0, 0, 120, 30, j);
  oled1.drawProgressBar(0, 32, 120, 30, i);
  delay(100);
  if (i == 100) {
    i = 0;
  }
  if (j == 0) {
    j = 100;
  }
  oled1.display();
}
