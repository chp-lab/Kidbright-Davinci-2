#ifndef KB_DAVINCII2C_H
#define KB_DAVINCII2C_H

#include "Arduino.h"
#include "Wire.h"

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCII2C_H)
	#define DEFAULT_SDA_PIN 5
	#define DEFAULT_SCL_PIN 22
#endif

class KB_DAVINCII2C {
	private:
		int _SDAPIN;
		int _SCLPIN;
		
	public:
		KB_DAVINCII2C(void);
		KB_DAVINCII2C(int sda, int scl);
		void begin(void);
		int scanI2CDevice(void);
		bool hasDeviceAddress(int address);
};

#endif