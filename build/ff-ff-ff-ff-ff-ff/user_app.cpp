#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>


SSD1306Wire oled1(0x3c, 5, 22);
KB_DAVINCIDistance ultrasonic1(18,19);
KB_DAVINCIDistance ultra3(33,32);




void setup()
{
  
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop()
{
    oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0,0,String(((String((
  		ultra3.readDistance_mm()
  	))))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0,20,String(((String((
  		ultrasonic1.readDistance_cm()
  	))))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0,40,String(((String((
  		ultrasonic1.readDistance_in()
  	))))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0,50,String(((String((
  		ultra3.readDistance_m()
  	))))));
  oled1.display();
  delay(200);

  
}
