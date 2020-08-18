#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>

SSD1306Wire oled1(0x3c, 5, 22);
KB_DAVINCII2C I2C_PORT;

void setup() {
  I2C_PORT.begin();
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 0, String(String("I2C Block Example")));
  oled1.display();
}
void loop() {
  oled1.display();
  if (I2C_PORT.scanI2CDevice() != 0) {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 20,
                     String(((String("Number I2C Device : ") +
                              String(I2C_PORT.scanI2CDevice())))));
  } else {
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 20, String(((String(I2C_PORT.scanI2CDevice())))));
    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0, 30, String(String("No I2C device")));
  }
}
