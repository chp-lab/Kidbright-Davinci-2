#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include "DHTesp.h"

SSD1306Wire oled1(0x3c, 5, 22);
DHTesp DHT_1;

void setup() {
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  DHT_1.setup(32, DHTesp::DHT11);
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 0,
      String(((String("temperature C :") + String(DHT_1.getTemperature())))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 20,
      String(((String("temperature F :") + String(DHT_1.getHumidity())))));
  oled1.display();
  delay(500);
}
