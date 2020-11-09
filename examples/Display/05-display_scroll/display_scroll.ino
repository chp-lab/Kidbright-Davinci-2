#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "Wire.h"
#include <Adafruit_SSD1306.h>
#include <Setup_wire_OLED.h>
#include <KB_DAVINCI.h>
#include "KB_DAVINCI.h"

#define SCREEN_WIDTH 128  // OLED display width, in pixels
#define SCREEN_HEIGHT 64  // OLED display height, in pixels
Setup_wire_OLED Setup_wire = Setup_wire_OLED(0x3c);
Adafruit_SSD1306 oled1(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
int THERMISTOR_PIN = 39;
#define VOLTAGE_INPUT 3.30
#define NOMINAL_TEMP 25
#define NOMINAL_RESISTANCE 100000
#define REFERENCE_RESISTANCE 100000  // external RESISTANCE
#define B_VALUE 3950
#define ADC_RESOLUTION 4095

KB_DAVINCIThermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT,
                                REFERENCE_RESISTANCE, NOMINAL_RESISTANCE,
                                NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);
int setpin = 25;
KB_DAVINCILDR LDRSensor;

void setup() {
  LDRSensor.setPin(setpin);
  Setup_wire.begin(5, 22);
  oled1.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  oled1.clearDisplay();
  oled1.setTextColor(WHITE);

  oled1.clearDisplay();

  oled1.setTextColor(WHITE);
}
void loop() {
  oled1.clearDisplay();
  oled1.startscrollright(0x00, 0x07);
  delay(2000);
  delay(500);
  oled1.startscrolldiagleft(0x00, 0x07);
  delay(2000);
  delay(500);
  oled1.setTextSize(1);
  oled1.setCursor(0, 0);
  oled1.print(((String("Celsius :") +
                String(thermistor.readTemperatureCelsius()) + String("C"))));
  oled1.setTextSize(1);
  oled1.setCursor(0, 15);
  oled1.print(((String("Fahrenheit:") +
                String(thermistor.readTemperatureFahrenheit()) + String("F"))));
  oled1.setTextSize(1);
  oled1.setCursor(0, 30);
  oled1.print(((String("LDR:") + String(LDRSensor.readValue()) + String("s"))));
  oled1.display();
  delay(500);
}
