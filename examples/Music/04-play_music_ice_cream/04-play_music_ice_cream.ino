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
  music.tone(494, 500);
  music.tone(587, 250);
  music.tone(440, 1000);
  music.tone(659, 500);
  music.tone(784, 250);
  music.tone(523, 1000);
  music.tone(659, 250);
  music.tone(740, 250);
  music.tone(587, 250);
  music.tone(659, 250);
  music.tone(740, 250);
  music.tone(880, 250);
  music.tone(784, 1000);
}
