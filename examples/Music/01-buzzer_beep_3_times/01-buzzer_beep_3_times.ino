#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

int i;
KB_DAVINCIBUZZER music;

void setup() {
  music.begin();
}
void loop() {
  for (i = 1; i <= 3; i++) {
    music.tone(1047, 500);
    delay(500);
  }
  delay(5000);
}
