#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIRGB RGB;

void setup() {
  RGB.begin();
  RGB.setCommonCathode(false);
  Serial.begin(115200);
  Serial.println(String("RGB Example"));
}
void loop() {
  RGB.setColor(30, 193, 177);
  delay(1000);
  RGB.setColor(238, 92, 218);
  delay(1000);
  RGB.setColor(162, 162, 13);
  delay(1000);
}
