#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>

byte sensorPin = 32;
byte buzzerPin = 23;

int freq = 2000;
int channel = 0;
int resolution = 8;
int dutyCycle = 128;

SemaphoreHandle_t syncSemaphore;
SSD1306Wire oled1(0x3c, 5, 22);
KB_DAVINCIRGB RGB;

void IRAM_ATTR handleInterrupt() {
  xSemaphoreGiveFromISR(syncSemaphore, NULL);
}

void setup() {
  syncSemaphore = xSemaphoreCreateBinary();

  pinMode(sensorPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(sensorPin), handleInterrupt, CHANGE);

  ledcSetup(channel, freq, resolution);
  ledcAttachPin(buzzerPin, channel);
  RGB.begin();
  RGB.setCommonCathode(false);

  RGB.begin();
  RGB.setCommonCathode(false);
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  RGB.on();
}
void loop() {
  oled1.clear();
  xSemaphoreTake(syncSemaphore, portMAX_DELAY);
  if (digitalRead(sensorPin)) {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 0, String(String("Motion detected")));
    RGB.green();
  } else {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 0, String(String("Motion stoped")));
    RGB.red();
  }
  oled1.display();
}