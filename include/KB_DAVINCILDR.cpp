#include "KB_DAVINCILDR.h"

// Constructor
KB_DAVINCILDR::KB_DAVINCILDR(){
	setPin(DEFAULT_LDR_PIN);
}

// Constructor with parameter
KB_DAVINCILDR::KB_DAVINCILDR(byte pin){
	setPin(pin);
}

// Methods
void KB_DAVINCILDR::setPin(byte pin){
	this->_ldr_pin = pin;
	pinMode(this->_ldr_pin, INPUT);
}

int KB_DAVINCILDR::readValue(){
	return analogRead(this->_ldr_pin);
}
