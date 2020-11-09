#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <HX711.h>

SSD1306Wire oled1(0x3c, 5, 22);
int LOADCELL_DOUT_PIN = 32;
int LOADCELL_SCK_PIN = 33;

HX711 LoadCell1;

void setup() {
  LoadCell1.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  oled1.clear();
  if (LoadCell1.is_ready()) {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 0, String(LoadCell1.read()));
  } else {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 0, String(String("HX711 not found.")));
  }
  delay(1000);
  oled1.display();
}
