#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_MLX90614.h>
#include "Wire.h"
                   #include <Adafruit_SSD1306.h>

Adafruit_MLX90614 mlx90614_1 = Adafruit_MLX90614(0x5A);
#define SCREEN_WIDTH 128 // OLED display width, in pixels
                  #define SCREEN_HEIGHT 64 // OLED display height, in pixels

                  Adafruit_SSD1306 oled1(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);



void setup()
{
  
  mlx90614_1.begin(5,22);

              

              
              oled1.begin(SSD1306_SWITCHCAPVCC, 0x3C);



          oled1.clearDisplay();
          oled1.display();
          oled1.setTextSize(1);
          oled1.setCursor(0,0);
          oled1.print("Ambient Temp: ");
}
void loop()
{
            oled1.clearDisplay();
          oled1.display();
          oled1.setTextSize(1);
          oled1.setCursor(0,0);
          oled1.print("Ambient Temp: ");
          oled1.setTextSize(2);
          oled1.setCursor(0,10);
          oled1.print(" ");
          oled1.setTextSize(1);
          oled1.cp437(true);
          oled1.write(3);
          oled1.setTextSize(2);
          oled1.print("C");
          oled1.setTextSize(1);
          oled1.setCursor(0, 35);
          oled1.print("Object Temp: ");
          oled1.setTextSize(2);
          oled1.setCursor(0, 45);
          oled1.print(" %");
          oled1.display();
  delay(200);

  
}
