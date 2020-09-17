#include "ledBlink.h"

ledBlink::ledBlink(int ledPIN,int duration){
    this->_ledPIN = ledPIN;
    this->_duration = duration;
    init();
}

void ledBlink::init(){
    pinMode(_ledPIN , OUTPUT);
}

void ledBlink::Blink(){
    digitalWrite(_ledPIN , HIGH);
    delay(_duration);
    digitalWrite(_ledPIN , LOW);
    delay(_duration);

}