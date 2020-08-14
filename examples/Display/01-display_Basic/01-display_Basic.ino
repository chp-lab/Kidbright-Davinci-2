#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>

std::vector<uint8_t> img1;
SSD1306Wire oled1(0x3c, 5, 22);

void setup() {
  Serial.begin(115200);

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);

  img1 = (std::vector<uint8_t>{
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x20,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x20, 0x00, 0x00, 0x00,
      0x00, 0x08, 0x00, 0x01, 0x02, 0x00, 0x00, 0x00, 0x00, 0x04, 0x80, 0x00,
      0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x72, 0x20, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0xd2,
      0x80, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x9c, 0x73, 0x03, 0x00, 0x00,
      0x00, 0x00, 0x80, 0xc8, 0xc3, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xe0,
      0x37, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0xc2, 0xc7, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0xf0, 0x2f, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0xe0,
      0xc7, 0x0c, 0x04, 0x00, 0x00, 0x00, 0x00, 0xc8, 0x0f, 0x09, 0x10, 0x00,
      0x00, 0x00, 0x28, 0x00, 0x57, 0x14, 0x10, 0x00, 0x00, 0x00, 0x00, 0x80,
      0x07, 0x04, 0x20, 0x00, 0x00, 0x00, 0x00, 0x20, 0x8a, 0xe8, 0x21, 0x00,
      0x00, 0x00, 0x48, 0x0a, 0x12, 0xc5, 0x01, 0x00, 0x00, 0x00, 0x90, 0x80,
      0x20, 0xa8, 0x03, 0x18, 0x00, 0x00, 0x25, 0x2a, 0x54, 0x45, 0x40, 0x18,
      0x00, 0x80, 0xda, 0x50, 0x8a, 0x22, 0x00, 0x18, 0x00, 0x50, 0x25, 0x8b,
      0x20, 0x08, 0x41, 0x10, 0x00, 0xa0, 0xc8, 0x24, 0x4a, 0x55, 0x02, 0x18,
      0x00, 0x0a, 0x37, 0x89, 0x94, 0x22, 0x20, 0x10, 0x00, 0xc0, 0xc8, 0x20,
      0x21, 0x08, 0x10, 0x10, 0x00, 0x08, 0x25, 0x41, 0x8a, 0x52, 0x00, 0x00,
      0x00, 0xd2, 0x5a, 0xa0, 0x24, 0x85, 0x04, 0x10, 0x00, 0x00, 0xa4, 0x1b,
      0x52, 0x00, 0x00, 0x10, 0x00, 0x80, 0x4b, 0xa4, 0x84, 0x92, 0x02, 0x10,
      0x00, 0x00, 0x94, 0x0a, 0x29, 0x01, 0x00, 0x00, 0x00, 0x84, 0x6a, 0x05,
      0x84, 0x04, 0x02, 0x10, 0x00, 0x00, 0x95, 0x0a, 0x29, 0x29, 0x02, 0x10,
      0x00, 0x00, 0x22, 0x05, 0x52, 0x82, 0x00, 0x10, 0x00, 0x00, 0xcd, 0x88,
      0x84, 0x24, 0x00, 0x10, 0x00, 0x00, 0x20, 0x00, 0x20, 0x09, 0x08, 0x18,
      0x00, 0x20, 0x50, 0x00, 0x50, 0x22, 0x00, 0x18, 0x00, 0xc0, 0x00, 0x10,
      0x84, 0x08, 0x10, 0x18, 0x00, 0x00, 0x00, 0x20, 0x00, 0x92, 0x20, 0x18,
      0x00, 0x00, 0x00, 0x80, 0xa4, 0x28, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xa4, 0x3c, 0x40, 0x08,
      0x00, 0x00, 0x00, 0x09, 0x01, 0xe9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x40, 0xa4, 0x13, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x89, 0x03, 0x00,
      0x00, 0x00, 0x80, 0x00, 0x3c, 0xd2, 0x97, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x60, 0xe9, 0x03, 0x00, 0x00, 0x00, 0x00, 0x01, 0x64, 0xf1, 0x92, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x68, 0xe8, 0x03, 0x00, 0x00, 0x00, 0x00, 0x80,
      0xe0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x28, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x01, 0x08, 0x00, 0x00, 0x00, 0x00, 0x0d, 0x00, 0x00, 0x40, 0x01, 0x00,
      0x00, 0x80, 0x08, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x80, 0x08, 0x00,
      0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x80, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40,
      0x08, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x20, 0x08, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x20, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20,
      0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x08, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80,
      0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00});
  oled1.drawFastImage(11, 0, 106, 64, img1.data());
}
void loop() {
  oled1.display();
}
