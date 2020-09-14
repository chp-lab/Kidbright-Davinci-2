#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_MLX90614.h>
  			#include <Wire.h>

Adafruit_MLX90614 mlx2 = Adafruit_MLX90614();
Adafruit_MLX90614 mlx90614_1 = Adafruit_MLX90614();



void setup()
{
  
  Serial.begin(115200);

  	
  	
  			mlx2.begin(0);

  	
  	
  			mlx90614_1.begin(0);
}
void loop()
{
    Serial.println(mlx2.readObjectTempC());
  Serial.println(mlx90614_1.readObjectTempC());
  delay(2000);

  
}
