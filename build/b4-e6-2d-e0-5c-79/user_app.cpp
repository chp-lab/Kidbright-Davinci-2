#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIBTN_DI1 BTN1;
KB_DAVINCIBTN_DI2 BTN2;



void setup()
{
  BTN1.init();
BTN2.init();
  Serial.begin(115200);
}
void loop()
{
    if (
  		    BTN1.pressed()
  		) {
    Serial.println(String("111"));
  } else if (
  		    BTN2.pressed()
  		) {
    Serial.println(String("222222"));
  }

  
}
