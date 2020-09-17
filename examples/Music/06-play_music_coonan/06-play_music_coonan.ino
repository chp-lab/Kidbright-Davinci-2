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
  music.tone(831, 500);
  music.tone(784, 500);
  music.tone(698, 1000);
  music.tone(1047, 2000);
  music.tone(831, 500);
  music.tone(698, 500);
  music.tone(784, 1000);
  music.tone(1109, 1000);
  music.tone(1047, 500);
  music.tone(932, 2000);
  music.tone(831, 500);
  music.tone(932, 500);
  music.tone(831, 500);
  music.tone(932, 500);
  music.tone(1047, 1000);
  music.tone(831, 500);
  music.tone(784, 500);
  music.tone(698, 1000);
  music.tone(932, 1000);
  music.tone(831, 500);
  music.tone(784, 1000);
  music.tone(698, 250);
  music.tone(784, 250);
  music.tone(831, 1000);
  music.tone(698, 1000);
  music.tone(1047, 1000);
  music.tone(831, 1000);
  music.tone(932, 1000);
  music.tone(1397, 1000);
  music.tone(1245, 1000);
  music.tone(1109, 500);
  music.tone(1047, 250);
  music.tone(932, 250);
  music.tone(1047, 2000);
  delay(2000);
}
