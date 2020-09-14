#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_MLX90614.h>
#include <Wire.h>

Adafruit_MLX90614 mlx90614 = Adafruit_MLX90614();



void setup()
{
  
  Serial.begin(115200);

  
  
  
  mlx90614.begin(0);
}
void loop()
{
    Serial.println(mlx90614.readObjectTempC());

  
}
