#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIBUZZER music;

void setup() {
  music.begin();

  music.setTempo(200);
}
void loop() {
  Serial.println(String("1st round"));
  music.tone(440, 500);
  music.tone(523, 500);
  music.tone(587, 1000);
  music.tone(587, 1000);
  music.tone(587, 500);
  music.tone(659, 500);
  music.tone(698, 1000);
  music.tone(698, 1000);
  music.tone(698, 500);
  music.tone(784, 500);
  music.tone(659, 1000);
  music.tone(659, 1000);
  music.tone(587, 500);
  music.tone(523, 500);
  music.tone(523, 500);
  music.tone(587, 1000);
  Serial.println(String("2nd round"));
  music.tone(440, 500);
  music.tone(523, 500);
  music.tone(587, 1000);
  music.tone(587, 1000);
  music.tone(587, 500);
  music.tone(659, 500);
  music.tone(698, 1000);
  music.tone(698, 1000);
  music.tone(698, 500);
  music.tone(784, 500);
  music.tone(659, 1000);
  music.tone(659, 1000);
  music.tone(587, 500);
  music.tone(523, 500);
  music.tone(587, 2000);
  Serial.println(String("3rd roud"));
  music.tone(440, 500);
  music.tone(523, 500);
  music.tone(587, 1000);
  music.tone(587, 1000);
  music.tone(587, 500);
  music.tone(698, 500);
  music.tone(784, 1000);
  music.tone(784, 1000);
  music.tone(784, 500);
  music.tone(880, 500);
  music.tone(932, 1000);
  music.tone(932, 1000);
  music.tone(880, 500);
  music.tone(784, 500);
  music.tone(880, 500);
  music.tone(587, 2000);
  music.tone(587, 500);
  music.tone(659, 500);
  music.tone(698, 1000);
  music.tone(698, 1000);
  music.tone(784, 1000);
  music.tone(880, 500);
  music.tone(587, 2000);
  music.tone(587, 500);
  music.tone(698, 500);
  music.tone(659, 1000);
  music.tone(659, 1000);
  music.tone(698, 500);
  music.tone(587, 500);
  music.tone(659, 2000);
  delay(2000);
}
