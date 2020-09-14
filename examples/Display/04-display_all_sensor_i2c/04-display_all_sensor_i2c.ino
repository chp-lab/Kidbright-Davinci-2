#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <Wire.h>
#include <RtcDS1307.h>
#include <KB_DAVINCI.h>
#include "KB_DAVINCI.h"

SSD1306Wire oled1(0x3c, 5, 22);
#define SDA 5
#define SCL 22
#define countof(a) (sizeof(a) / sizeof(a[0]))

int get_day = 0;
int get_mouth = 0;
int get_year = 0;
int get_hour = 0;
int get_minute = 0;
int get_second = 0;
String get_dateTime;
RtcDS1307<TwoWire> RTC1(Wire);
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
KB_DAVINCII2C I2C_PORT;

void printDateTime(const RtcDateTime& dt) {
  char datestring[20];

  snprintf_P(datestring, countof(datestring),
             PSTR("%02u/%02u/%04u %02u:%02u:%02u"), dt.Day(), dt.Month(),
             dt.Year(), dt.Hour(), dt.Minute(), dt.Second());

  get_day = dt.Day();
  get_mouth = dt.Month();
  get_year = dt.Year();
  get_hour = dt.Hour();
  get_minute = dt.Minute();
  get_second = dt.Second();
  get_dateTime = datestring;
}

void setup() {
  Serial.begin(115200);

  Serial.print("compiled: ");
  Serial.print(__DATE__);
  Serial.println(__TIME__);

  RTC1.Begin(SDA, SCL);

  RtcDateTime compiled = RtcDateTime(__DATE__, __TIME__);
  printDateTime(compiled);
  Serial.println();

  if (!RTC1.IsDateTimeValid()) {
    if (RTC1.LastError() != 0) {
      Serial.print("RTC communications error = ");
      Serial.println(RTC1.LastError());
    } else {
      Serial.println("RTC lost confidence in the DateTime!");
      RTC1.SetDateTime(compiled);
    }
  }

  if (!RTC1.GetIsRunning()) {
    Serial.println("RTC was not actively running, starting now");
    RTC1.SetIsRunning(true);
  }

  RtcDateTime now = RTC1.GetDateTime();
  if (now < compiled) {
    Serial.println("RTC is older than compile time!  (Updating DateTime)");
    RTC1.SetDateTime(compiled);
  } else if (now > compiled) {
    Serial.println("RTC is newer than compile time. (this is expected)");
  } else if (now == compiled) {
    Serial.println(
        "RTC is the same as compile time! (not expected but all is fine)");
  }
  RTC1.SetSquareWavePin(DS1307SquareWaveOut_Low);
  LDRSensor.setPin(setpin);
  I2C_PORT.begin();
  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);
}
void loop() {
  if (!RTC1.IsDateTimeValid()) {
    if (RTC1.LastError() != 0) {
      Serial.print("RTC communications error = ");
      Serial.println(RTC1.LastError());
    } else {
      Serial.println("RTC lost confidence in the DateTime!");
    }
  }
  RtcDateTime now = RTC1.GetDateTime();
  printDateTime(now);
  Serial.println();
  oled1.clear();
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 0,
                   String(((String("Temperature :") +
                            String(thermistor.readTemperatureCelsius())))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 15,
                   String(((String("LDR :") + String(LDRSensor.readValue())))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(0, 30, String(((String((get_dateTime))))));
  oled1.setFont(ArialMT_Plain_10);
  oled1.drawString(
      0, 45,
      String(((String("I2c Device :") + String(I2C_PORT.scanI2CDevice())))));
  oled1.display();
  delay(200);
}
