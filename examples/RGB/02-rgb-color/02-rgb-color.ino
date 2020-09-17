#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <KB_DAVINCI.h>

int r;
int g;
int b;
int int_Increase_rgb;
KB_DAVINCIRGB RGB;

void setup() {
  RGB.begin();
  RGB.setCommonCathode(false);
  Serial.begin(115200);

  RGB.on();
  r = 255;
  g = 0;
  b = 0;
  int_Increase_rgb = 51;
}
void loop() {
  RGB.setColor(r, g, b);
  if (((r == 255) && (g == 0)) && (b < 255)) {
    b = b + int_Increase_rgb;
  } else if (((b == 255) && (g == 0)) && (r > 0)) {
    r = r - int_Increase_rgb;
  } else if (((r == 0) && (b == 255)) && (g < 255)) {
    g = g + int_Increase_rgb;
  } else if (((g == 255) && (r == 0)) && (b > 0)) {
    b = b - int_Increase_rgb;
  } else if (((b == 0) && (g == 255)) && (r < 255)) {
    r = r + int_Increase_rgb;
  } else if (((r == 255) && (b == 0)) && (g > 0)) {
    g = g - int_Increase_rgb;
  }
  delay(500);
}
