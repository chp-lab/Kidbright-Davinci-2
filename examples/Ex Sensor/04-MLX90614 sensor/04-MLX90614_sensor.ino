#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_MLX90614.h>
#include "Wire.h"
#include <Adafruit_SSD1306.h>
#include <Setup_wire_OLED.h>

Adafruit_MLX90614 mlx90614_1 = Adafruit_MLX90614(0x5A);
#define SCREEN_WIDTH 128  // OLED display width, in pixels
#define SCREEN_HEIGHT 64  // OLED display height, in pixels
Setup_wire_OLED Setup_wire = Setup_wire_OLED(0x3c);
Adafruit_SSD1306 oled1(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  mlx90614_1.begin(5, 22);

  Setup_wire.begin(5, 22);
  oled1.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  oled1.clearDisplay();
  oled1.setTextColor(WHITE);

  oled1.clearDisplay();

  oled1.setTextColor(WHITE);
}
void loop() {
  oled1.clearDisplay();
  oled1.setTextSize(1);
  oled1.setCursor(0, 0);
  oled1.print(String("ObjectTemp :"));
  oled1.setTextSize(2);
  oled1.setCursor(0, 10);
  oled1.print(((String((mlx90614_1.readObjectTempC(0))) + String("C"))));
  oled1.setTextSize(1);
  oled1.setCursor(0, 35);
  oled1.print(String("AmbientTemp :"));
  oled1.setTextSize(2);
  oled1.setCursor(0, 45);
  oled1.print(((String((mlx90614_1.readAmbientTempC(0))) + String("C"))));
  oled1.display();
  delay(500);
}