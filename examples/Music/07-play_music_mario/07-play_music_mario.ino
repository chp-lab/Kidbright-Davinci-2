#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIBUZZER music;

void setup() {
  music.begin();

  music.setTempo(60);
}
void loop() {
  music.tone(1319, 500);
  music.tone(1319, 500);
  delay(200);
  music.tone(1319, 1000);
  delay(200);
  music.tone(2093, 500);
  music.tone(1319, 1000);
  delay(200);
  music.tone(1568, 1000);
  delay(200);
  music.tone(1568, 1000);
  delay(200);
  music.tone(2093, 1000);
  delay(200);
  music.tone(1568, 1000);
  delay(200);
  music.tone(1319, 1000);
  delay(200);
  music.tone(1760, 500);
  delay(200);
  music.tone(1976, 1000);
  delay(200);
  music.tone(1865, 1000);
  music.tone(1760, 1000);
  delay(200);
  music.tone(1568, 500);
  music.tone(1319, 1000);
  music.tone(1568, 1000);
  music.tone(1760, 1000);
  delay(200);
  music.tone(1397, 1000);
  music.tone(1568, 1000);
  delay(200);
  music.tone(1319, 1000);
  delay(200);
  music.tone(2093, 1000);
  music.tone(1175, 1000);
  music.tone(1976, 1000);
  delay(200);
  music.tone(2093, 1000);
  delay(200);
  music.tone(1568, 1000);
  delay(200);
  music.tone(1319, 1000);
  delay(200);
  music.tone(1760, 1000);
  delay(200);
  music.tone(1976, 1000);
  delay(200);
  music.tone(1865, 1000);
  music.tone(1760, 1000);
  delay(200);
  music.tone(1568, 1000);
  music.tone(1319, 1000);
  music.tone(1568, 1000);
  music.tone(1760, 1000);
  delay(200);
  music.tone(1397, 1000);
  music.tone(1568, 1000);
  delay(200);
  music.tone(1319, 1000);
  delay(200);
  music.tone(2093, 1000);
  music.tone(1175, 1000);
  music.tone(1976, 1000);
  delay(200);
}
