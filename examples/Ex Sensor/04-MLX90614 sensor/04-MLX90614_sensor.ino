#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_MLX90614.h>
#include <Wire.h>

Adafruit_MLX90614 mlx90614 = Adafruit_MLX90614();

void setup() {
  Serial.begin(115200);

  mlx90614.begin(0);
}
void loop() {
  Serial.println(((String("object temp :") +
                   String(mlx90614.readObjectTempC()) + String("C"))));
  Serial.println(((String("ambient temp :") +
                   String(mlx90614.readAmbientTempC()) + String("C"))));
  Serial.println(((String("object temp :") +
                   String(mlx90614.readObjectTempF()) + String("F"))));
  Serial.println(((String("ambient temp :") +
                   String(mlx90614.readAmbientTempF()) + String("F"))));
  delay(500);
}
