#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCII2C I2C_PORT;

void setup() {
  I2C_PORT.begin();
  Serial.begin(115200);
  Serial.println(String("I2C Block Example"));
}
void loop() {
  if (I2C_PORT.scanI2CDevice() != 0) {
    Serial.print(String("Number of connected I2C Device : "));
    Serial.println(I2C_PORT.scanI2CDevice());
  } else {
    Serial.println(String("No I2C device connected."));
  }
}
