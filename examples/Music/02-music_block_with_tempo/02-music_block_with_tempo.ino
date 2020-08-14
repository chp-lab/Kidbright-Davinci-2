#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIBUZZER music;

void setup() {
  music.begin();

  music.setTempo(100);
}
void loop() {
  music.song((std::vector<int>{262, 294, 330, 349, 392, 440, 494, 523}), 500);
  music.song((std::vector<int>{523, 494, 440, 392, 349, 330, 294, 262}), 500);
}
