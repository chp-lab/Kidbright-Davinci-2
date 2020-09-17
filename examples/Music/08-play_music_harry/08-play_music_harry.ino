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
  Serial.println(String("1st Part"));
  music.tone(494, 500);
  music.tone(659, 1000);
  music.tone(784, 250);
  music.tone(740, 500);
  music.tone(659, 1000);
  Serial.println(String("2nd Part"));
  music.tone(988, 500);
  music.tone(880, 1000);
  music.tone(740, 1000);
  Serial.println(String("3rd Part"));
  music.tone(659, 1000);
  music.tone(784, 250);
  music.tone(740, 500);
  music.tone(622, 1000);
  music.tone(698, 500);
  music.tone(494, 1000);
  music.tone(392, 500);
  music.tone(494, 1000);
  Serial.println(String("4th Part"));
  music.tone(494, 500);
  music.tone(659, 1000);
  music.tone(784, 250);
  music.tone(740, 500);
  music.tone(659, 1000);
  Serial.println(String("5th Part"));
  music.tone(988, 500);
  music.tone(1175, 1000);
  music.tone(1109, 500);
  music.tone(1047, 1000);
  Serial.println(String("6th Part"));
  music.tone(831, 500);
  music.tone(1047, 1000);
  music.tone(988, 250);
  music.tone(932, 500);
  music.tone(466, 1000);
  Serial.println(String("7th Part"));
  music.tone(784, 500);
  music.tone(659, 1000);
  music.tone(392, 500);
  music.tone(494, 1000);
  Serial.println(String("8th Part"));
  music.tone(784, 500);
  music.tone(988, 1000);
  music.tone(784, 500);
  music.tone(988, 1000);
  music.tone(784, 500);
  music.tone(1047, 1000);
  music.tone(988, 500);
  music.tone(932, 1000);
  Serial.println(String("9th Part"));
  music.tone(740, 500);
  music.tone(784, 1000);
  music.tone(988, 250);
  music.tone(932, 500);
  music.tone(466, 1000);
  music.tone(494, 500);
  music.tone(988, 1000);
  music.tone(392, 500);
  music.tone(494, 1000);
  Serial.println(String("10th Part"));
  music.tone(784, 500);
  music.tone(988, 1000);
  music.tone(784, 500);
  music.tone(988, 1000);
  music.tone(784, 500);
  music.tone(1175, 1000);
  music.tone(1109, 500);
  music.tone(1047, 1000);
  music.tone(831, 500);
  music.tone(1047, 500);
  music.tone(988, 500);
  music.tone(932, 500);
  music.tone(466, 1000);
  music.tone(784, 500);
  music.tone(659, 2000);
  delay(2000);
}
