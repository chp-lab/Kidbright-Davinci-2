#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "KBProTime.h"

KBProTime kbprotime;



void setup()
{
  
  Serial.begin(115200);
  
  
  kbprotime.sync();
}
void loop()
{
    Serial.println(kbprotime.getYear());

  
}
