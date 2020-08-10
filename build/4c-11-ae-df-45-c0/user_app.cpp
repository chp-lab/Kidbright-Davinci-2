#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCII2C I2C_PORT;



void setup()
{
  I2C_PORT.begin();
  Serial.begin(115200);
}
void loop()
{
    Serial.println(
  			I2C_PORT.scanI2CDevice()
  		);
  delay(500);
  Serial.println(
  			I2C_PORT.hasDeviceAddress(1)
  		);
  delay(500);

  
}
