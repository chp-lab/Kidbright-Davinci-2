#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "Servo.h"
#include <KB_DAVINCI.h>

Servo Servo1;
KB_DAVINCIBTN_DI1 BTN1;
KB_DAVINCIBTN_DI2 BTN2;



void setup()
{
  BTN1.init();
BTN2.init();
  Serial.begin(115200);

          
          
            Servo1.attach(32);
}
void loop()
{
    if (
  		    BTN1.pressed()
  		) {
                Servo1.write(50);
            } else if (
  		    BTN2.pressed()
  		) {
                Servo1.write((-50));
            }

  
}
