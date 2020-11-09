
#include "Setup_wire_OLED.h"

Setup_wire_OLED::Setup_wire_OLED(uint8_t i2caddr) {
  _addr = i2caddr;
}
boolean Setup_wire_OLED::begin( uint8_t SDA_Pin,uint8_t SCL_Pin) {
  Wire.begin(SDA_Pin,SCL_Pin);
  return true;
}

/*********************************************************************/

uint16_t Setup_wire_OLED::read16(uint8_t a) {
  uint16_t ret;

  Wire.beginTransmission(_addr); // start transmission to device 
  Wire.write(a); // sends register address to read from
  Wire.endTransmission(false); // end transmission
  
  Wire.requestFrom(_addr, (uint8_t)3);// send data n-bytes read
  ret = Wire.read(); // receive DATA
  ret |= Wire.read() << 8; // receive DATA

  uint8_t pec = Wire.read();

  return ret;
}
