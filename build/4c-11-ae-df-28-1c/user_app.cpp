#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Wire.h>
#include <RtcDS1307.h>

RtcDS1307<TwoWire> RTC1(Wire);



void setup()
{
  RTC1.Begin();
    RtcDateTime RTC1_compiled = RtcDateTime(__DATE__, __TIME__);
    // printDateTime(RTC1_compiled);

    if (!RTC1.IsDateTimeValid())
    {
      if (RTC1.LastError() != 0)
      {

      }
      else
      {
        RTC1.SetDateTime(RTC1_compiled);
      }
    }

    if (!RTC1.GetIsRunning())
    {
      RTC1.SetIsRunning(true);
    }

    RtcDateTime RTC1_now = RTC1.GetDateTime();
    if (RTC1_now < RTC1_compiled)
    {
      RTC1.SetDateTime(RTC1_compiled);
    }
    else if (RTC1_now > RTC1_compiled)
    {

    }
    else if (RTC1_now == RTC1_compiled)
    {

    }

    RTC1.SetSquareWavePin(DS1307SquareWaveOut_Low);
  Serial.begin(115200);

  
  
  

  

    RtcDateTime RTC1_now = RTC1.GetDateTime();

    char RTC1_format_year[5];
    char RTC1_format_month[5];
    char RTC1_format_day[5];
    char RTC1_format_hour[5];
    char RTC1_format_minute[5];
    char RTC1_format_second[5];

    sprintf(RTC1_format_year, "%02d", RTC1_now.Year());
    sprintf(RTC1_format_month, "%02d", RTC1_now.Month());
    sprintf(RTC1_format_day, "%02d", RTC1_now.Day());
    sprintf(RTC1_format_hour, "%02d", RTC1_now.Hour());
    sprintf(RTC1_format_minute, "%02d", RTC1_now.Minute());
    sprintf(RTC1_format_second, "%02d", RTC1_now.Second());
}
void loop()
{
    Serial.println((
    RTC1_now.Month()
    ));

  
}
