#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

SSD1306Wire oled1(0x3c, 5, 22);

void setup() {
  Serial.begin(115200);

  const int LED_WIFI = 12;
  pinMode(LED_WIFI, OUTPUT);
  digitalWrite(LED_WIFI, 1);

  WiFi.begin("test", "test123");
  while (WiFi.status() != WL_CONNECTED) {
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

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 0, String((WiFi.localIP().toString())));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 0, String((WiFi.softAPIP().toString())));
  oled1.display();
}
