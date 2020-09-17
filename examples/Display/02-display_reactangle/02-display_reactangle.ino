#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

Number i;
Number j;
Number k;
Number x;
Number y;
SSD1306Wire oled1(0x3c, 5, 22);

void setup() {
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  i = 0;
  j = 10;
  k = 20;
  x = 30;
  y = 40;
}
void loop() {
  i = i + 5;
  j = j + 5;
  k = k + 5;
  x = x + 5;
  y = y + 5;
  oled1.clear();
  oled1.fillRect(0, 10, 20, i);
  oled1.fillRect(30, 10, 20, j);
  oled1.fillRect(60, 10, 20, k);
  oled1.fillRect(90, 10, 20, x);
  oled1.fillRect(120, 10, 20, y);
  delay(100);
  if (i == 60) {
    i = 0;
  }
  if (j == 60) {
    j = 0;
  }
  if (k == 60) {
    k = 0;
  }
  if (x == 60) {
    x = 0;
  }
  if (y == 60) {
    y = 0;
  }
  oled1.display();
}
