#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIRGB RGB;



void setup()
{
  RGB.begin();
  				RGB.setCommonCathode(false);
  Serial.begin(115200);
}
void loop()
{
    			RGB.red();
  		delay(500);
  			RGB.green();
  		delay(500);
  			RGB.blue();
  		delay(500);
  			RGB.orange();
  		delay(500);
  			RGB.pink();
  		delay(500);

  
}
