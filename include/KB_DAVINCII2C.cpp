#include "KB_DAVINCII2C.h"

KB_DAVINCII2C::KB_DAVINCII2C(void){
	_SDAPIN = DEFAULT_SDA_PIN;
	_SCLPIN = DEFAULT_SCL_PIN;
}

KB_DAVINCII2C::KB_DAVINCII2C(int sda, int scl){
	_SDAPIN = sda;
	_SCLPIN = scl;
}

void KB_DAVINCII2C::begin(void){
	Wire.begin(_SDAPIN, _SCLPIN);
}

int KB_DAVINCII2C::scanI2CDevice(void){
	byte address;
  int nDevices = 0;
  for(address = 1; address < 127; address++ ) {
    if (hasDeviceAddress(address)) {
      nDevices++;
    }
  }
	return nDevices;
}

bool KB_DAVINCII2C::hasDeviceAddress(int address){
	byte error;
	Wire.beginTransmission(address);
	error = Wire.endTransmission();
	if (error == 0) {
		return true;
	} else {
		return false;
	}
}