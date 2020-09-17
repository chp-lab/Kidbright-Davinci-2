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
  music.tone(659, 1000);
  music.tone(587, 1000);
  music.tone(523, 1000);
  music.tone(587, 1000);
  music.tone(659, 1000);
  music.tone(659, 1000);
  music.tone(659, 2000);
  music.tone(587, 1000);
  music.tone(587, 1000);
  music.tone(587, 2000);
  music.tone(659, 1000);
  music.tone(784, 1000);
  music.tone(784, 2000);
  music.tone(659, 1000);
  music.tone(587, 1000);
  music.tone(523, 1000);
  music.tone(587, 1000);
  music.tone(659, 1000);
  music.tone(659, 1000);
  music.tone(659, 2000);
  music.tone(587, 1000);
  music.tone(587, 1000);
  music.tone(659, 1000);
  music.tone(587, 1000);
  music.tone(523, 4000);
  delay(2000);
}
