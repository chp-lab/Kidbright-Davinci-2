#ifndef KB_DAVINCILDR_H
#define KB_DAVINCILDR_H
#include "Arduino.h"

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCILDR_H)
	#define DEFAULT_LDR_PIN 25
#endif

class KB_DAVINCILDR {
	private:
		byte _ldr_pin;
	public:
		KB_DAVINCILDR();
		KB_DAVINCILDR(byte pin);
		void setPin(byte pin);
		int readValue();
};
#endif
