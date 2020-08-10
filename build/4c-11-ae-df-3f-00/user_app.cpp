#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

KB_DAVINCIBUZZER music;




void setup()
{
  music.begin();

  Serial.begin(115200);

    
    

    
    
    
      music.setTempo(145);
}
void loop()
{
            music.tone(831, 500);
          music.tone(784, 1000);
          music.tone(698, 2000);
          music.tone(1047, 1000);
          music.tone(831, 1000);
          music.tone(698, 1000);
          music.tone(784, 1000);
          music.tone(1109, 2000);
          music.tone(1047, 1000);
          music.tone(932, 1000);
          music.tone(831, 1000);
          music.tone(932, 1000);
          music.tone(831, 1000);
          music.tone(932, 1000);
          music.tone(1047, 1000);
          music.tone(831, 1000);
          music.tone(784, 1000);
          music.tone(698, 1000);
          music.tone(932, 1000);
          music.tone(831, 1000);
          music.tone(784, 1000);
          music.tone(698, 1000);
          music.tone(784, 1000);
          music.tone(831, 1000);
          music.tone(1047, 1000);
          music.tone(831, 1000);
          music.tone(932, 1000);
          music.tone(1397, 1000);
          music.tone(1245, 2000);
          music.tone(932, 1000);
          music.tone(1047, 1000);
          delay(2000);

  
}
