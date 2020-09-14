/*************************************************** 
  This is a library for the MLX90614 Temp Sensor

  Designed specifically to work with the MLX90614 sensors in the
  adafruit shop
  ----> https://www.adafruit.com/products/1748
  ----> https://www.adafruit.com/products/1749

  These sensors use I2C to communicate, 2 pins are required to  
  interface
  Adafruit invests time and resources providing this open source code, 
  please support Adafruit and open-source hardware by purchasing 
  products from Adafruit!

  Written by Limor Fried/Ladyada for Adafruit Industries.  
  BSD license, all text above must be included in any redistribution
 ****************************************************/

#include "Adafruit_MLX90614.h"

Adafruit_MLX90614::Adafruit_MLX90614(uint8_t i2caddr) {
  _addr = i2caddr;
}


boolean Adafruit_MLX90614::begin(uint8_t wireNumber) {
  _wireNumber = wireNumber;
  if(_wireNumber == 0){
  	Wire.begin();
  }
#ifdef ESP32
  if(_wireNumber == 1){
  	Wire1.begin();
  }
#endif
  /*
  for (uint8_t i=0; i<0x20; i++) {
    Serial.print(i); Serial.print(" = ");
    Serial.println(read16(i), HEX);
  }
  */
  return true;
}

//////////////////////////////////////////////////////


double Adafruit_MLX90614::readObjectTempF(void) {
  return (readTemp(MLX90614_TOBJ1) * 9 / 5) + 32;
}


double Adafruit_MLX90614::readAmbientTempF(void) {
  return (readTemp(MLX90614_TA) * 9 / 5) + 32;
}

double Adafruit_MLX90614::readObjectTempC(void) {
  return readTemp(MLX90614_TOBJ1);
}


double Adafruit_MLX90614::readAmbientTempC(void) {
  return readTemp(MLX90614_TA);
}

float Adafruit_MLX90614::readTemp(uint8_t reg) {
  float temp;
  
  temp = read16(reg);
  temp *= .02;
  temp  -= 273.15;
  return temp;
}

/*********************************************************************/

uint16_t Adafruit_MLX90614::read16(uint8_t a) {
  uint16_t ret;
  if(_wireNumber == 0){
	  Wire.beginTransmission(_addr); // start transmission to device 
	  Wire.write(a); // sends register address to read from
	  Wire.endTransmission(false); // end transmission
	  
	  Wire.requestFrom(_addr, (uint8_t)3);// send data n-bytes read
	  ret = Wire.read(); // receive DATA
	  ret |= Wire.read() << 8; // receive DATA

	  uint8_t pec = Wire.read();
	}
#ifdef ESP32
	if(_wireNumber == 1){
	  Wire1.beginTransmission(_addr); // start transmission to device 
	  Wire1.write(a); // sends register address to read from
	  Wire1.endTransmission(false); // end transmission
	  
	  Wire1.requestFrom(_addr, (uint8_t)3);// send data n-bytes read
	  ret = Wire1.read(); // receive DATA
	  ret |= Wire1.read() << 8; // receive DATA

	  uint8_t pec = Wire1.read();
	}
#endif
  return ret;
}
