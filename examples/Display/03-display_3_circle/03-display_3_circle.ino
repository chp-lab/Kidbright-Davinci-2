#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

Number i;
Number j;
Number k;
SSD1306Wire oled1(0x3c, 5, 22);

void setup() {
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  i = 0;
  j = 10;
  k = 20;
}
void loop() {
  i = i + 5;
  j = j + 5;
  k = j + 5;
  oled1.clear();
  oled1.drawCircle(64, 32, i);
  oled1.drawCircle(64, 32, j);
  oled1.drawCircle(64, 32, k);
  delay(100);
  if (i == 100) {
    i = 0;
  }
  if (j == 100) {
    j = 0;
  }
  if (k == 100) {
    j = 0;
  }
  oled1.display();
}
