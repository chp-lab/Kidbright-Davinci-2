#include "KB_DAVINCIPIR.h"

// Constructor
KB_DAVINCIPIR::KB_DAVINCIPIR()
{
    setPin(DEFAULT_pir_PIN);
    setfreq(KB_DAVINCIPIR_freq);
    setchannel(KB_DAVINCIPIR_channel);
    setresolution(KB_DAVINCIPIR_resolution);
    setdutycycle(KB_DAVINCIPIR_dutyCycle);
    setbuzzer(KB_DAVINCIPIR_BUZZER);
}

// Constructor with parameter
KB_DAVINCIPIR::KB_DAVINCIPIR(
    byte pin ,
    int freq,
    int channel,
    int resolution,
    int dutycycle,
    int buzzer
)
{
    setPin(pin);
    setfreq(freq);
    setchannel(channel);
    setresolution(resolution);
    setdutycycle(dutycycle);
    setbuzzer(buzzer);
}

// Methods
void KB_DAVINCIPIR::setPin(byte pin)
{   
    this->_pir_pin = pin;
    pinMode(this->_pir_pin, INPUT);
}
void KB_DAVINCIPIR::setfreq(int freq){
	this->_freq = freq;
}
void KB_DAVINCIPIR::setchannel(int channel){
	this->_channel = channel;
}
void KB_DAVINCIPIR::setresolution(int resolution){
	this->_resolution = resolution;
}
void KB_DAVINCIPIR::setdutycycle(int dutycycle){
	this->_dutyCycle = dutycycle;
}
void KB_DAVINCIPIR::setbuzzer(int buzzer){
	this->_buzzer = buzzer;
}
int KB_DAVINCIPIR::readPIRMotion(){
	return analogRead(this->_pir_pin);
}
