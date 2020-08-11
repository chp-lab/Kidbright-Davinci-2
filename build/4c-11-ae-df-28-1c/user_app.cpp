#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>







void setup()
{
  
  Serial.begin(115200);

        const int LED_WIFI = 12;
        pinMode(LED_WIFI, OUTPUT);
        digitalWrite(LED_WIFI, 1);



      WiFi.begin("Yew@","YEWyew111");
      while(WiFi.status() != WL_CONNECTED){
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
      }
        digitalWrite(LED_WIFI, 1);
}
void loop()
{
    Serial.println((WiFi.localIP().toString()));

  
}
