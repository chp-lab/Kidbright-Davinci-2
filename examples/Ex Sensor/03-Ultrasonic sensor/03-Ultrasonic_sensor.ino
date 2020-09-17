#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>

SSD1306Wire oled1(0x3c, 5, 22);
int trigPin = 33;
int echoPin = 32;
KB_DAVINCIDistance Distance(trigPin, echoPin);

void setup() {
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 0,
      String(((String("Utrasonic :") + String((Distance.readDistance_mm())) +
               String("mm.")))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 15,
      String(((String("Utrasonic :") + String((Distance.readDistance_cm())) +
               String("cm.")))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 30,
      String(((String("Utrasonic :") + String((Distance.readDistance_in())) +
               String("in.")))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 45,
      String(((String("Utrasonic :") + String((Distance.readDistance_m())) +
               String("m.")))));
  oled1.display();
  delay(500);
}
