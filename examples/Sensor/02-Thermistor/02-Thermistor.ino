#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <KB_DAVINCI.h>

SSD1306Wire oled1(0x3c, 5, 22);
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

void setup() {
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 0,
      String(((String("Thermistor :") +
               String(thermistor.readTemperatureCelsius()) + String("C")))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 20,
      String(((String("Thermistor :") +
               String(thermistor.readTemperatureFahrenheit()) + String("F")))));
  oled1.display();
  delay(200);
}
