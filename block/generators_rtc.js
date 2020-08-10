module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['rtc_KBD_begin'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble JavaScript into code variable.
        var code = `
      #EXTINC
            #include <Wire.h>
            #include <RtcDS1307.h>
      #END
      #VARIABLE
            #define SDA  5
            #define SCL  22
            #define countof(a) (sizeof(a) / sizeof(a[0]))
            
            int get_day = 0;
            int get_mouth = 0;
            int get_year = 0;
            int get_hour = 0;
            int get_minute = 0;
            int get_second = 0;
            String get_dateTime;
            RtcDS1307<TwoWire> ${variable_rtc_variable}(Wire);
      #END
      #FUNCTION
            void printDateTime(const RtcDateTime& dt)
            {
                char datestring[20];
            
                snprintf_P(datestring, 
                        countof(datestring),
                        PSTR("%02u/%02u/%04u %02u:%02u:%02u"),
                        dt.Day(),
                        dt.Month(),
                        dt.Year(),
                        dt.Hour(),
                        dt.Minute(),
                        dt.Second() );

                    get_day =  dt.Day();       
                    get_mouth = dt.Month();  
                    get_year = dt.Year(); 
                    get_hour = dt.Hour(); 
                    get_minute = dt.Minute(); 
                    get_second = dt.Second(); 
                    get_dateTime = datestring;
            }
      #END
      #SETUP
                    Serial.begin(115200);

                    Serial.print("compiled: ");
                    Serial.print(__DATE__);
                    Serial.println(__TIME__);
                
                    ${variable_rtc_variable}.Begin(SDA,SCL);
                
                    RtcDateTime compiled = RtcDateTime(__DATE__, __TIME__);
                    printDateTime(compiled);
                    Serial.println();
                
                    if (!${variable_rtc_variable}.IsDateTimeValid()) 
                    {
                        if (${variable_rtc_variable}.LastError() != 0)
                        {
                            Serial.print("RTC communications error = ");
                            Serial.println(${variable_rtc_variable}.LastError());
                        }
                        else
                        {
                            Serial.println("RTC lost confidence in the DateTime!");
                            ${variable_rtc_variable}.SetDateTime(compiled);
                        }
                    }
                
                    if (!${variable_rtc_variable}.GetIsRunning())
                    {
                        Serial.println("RTC was not actively running, starting now");
                        ${variable_rtc_variable}.SetIsRunning(true);
                    }
                
                    RtcDateTime now = ${variable_rtc_variable}.GetDateTime();
                    if (now < compiled) 
                    {
                        Serial.println("RTC is older than compile time!  (Updating DateTime)");
                        ${variable_rtc_variable}.SetDateTime(compiled);
                    }
                    else if (now > compiled) 
                    {
                        Serial.println("RTC is newer than compile time. (this is expected)");
                    }
                    else if (now == compiled) 
                    {
                        Serial.println("RTC is the same as compile time! (not expected but all is fine)");
                    }
                    ${variable_rtc_variable}.SetSquareWavePin(DS1307SquareWaveOut_Low); 

      #END
      `;
        return code;
      };
      
      Blockly.JavaScript['rtc_KBD_updateTime'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble JavaScript into code variable.
        var code = `
  
        if (!${variable_rtc_variable}.IsDateTimeValid()) 
        {
            if (${variable_rtc_variable}.LastError() != 0)
            {
                Serial.print("RTC communications error = ");
                Serial.println(${variable_rtc_variable}.LastError());
            }
            else
            {
                Serial.println("RTC lost confidence in the DateTime!");
            }
        }
    
        RtcDateTime now = ${variable_rtc_variable}.GetDateTime();
    
        printDateTime(now);
        Serial.println();
    
        delay(5000); // ten seconds
        `;
        return code;
      };
      
      Blockly.JavaScript['rtc_KBD_timestamp_format'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var dropdown_rtc_timestamp_format = block.getFieldValue('RTC_TIMESTAMP_FORMAT');
        // TODO: Assemble JavaScript into code variable.
        
        var code = ``;
      
        if (dropdown_rtc_timestamp_format == 'RTC_TIMESTAMP_FORMAT_1') {
          code = `
          String(${variable_rtc_variable}_format_year) + 
          "/" + 
          String(${variable_rtc_variable}_format_month) + 
          "/" + 
          String(${variable_rtc_variable}_format_day) +
          " " + 
          String(${variable_rtc_variable}_format_hour) + 
          ":" + 
          String(${variable_rtc_variable}_format_minute) + 
          ":" + 
          String(${variable_rtc_variable}_format_second)
          `;
        } else if (dropdown_rtc_timestamp_format == 'RTC_TIMESTAMP_FORMAT_2') {
          code = `
          String(${variable_rtc_variable}_format_day) +
          "/" + 
          String(${variable_rtc_variable}_format_month) + 
          "/" + 
          String(${variable_rtc_variable}_format_year) +
          " " + 
          String(${variable_rtc_variable}_format_hour) + 
          ":" + 
          String(${variable_rtc_variable}_format_minute) + 
          ":" + 
          String(${variable_rtc_variable}_format_second)
          `;
        }
      
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_day_time'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble JavaScript into code variable.
        var code = `
                   get_dateTime
        `;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['rtc_KBD_get_year'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
            get_year
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_month'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
              get_mouth
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_day'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
              get_day
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_hour'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
              get_hour
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_minute'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
              get_minute
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
      Blockly.JavaScript['rtc_KBD_get_second'] = function(block) {
        var variable_rtc_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RTC_INSTANCE'), Blockly.Variables.NAME_TYPE);
        var code = `
              get_second
        `;
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
	
};