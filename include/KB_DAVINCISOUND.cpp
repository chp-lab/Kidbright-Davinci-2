#include "KB_DAVINCISOUND.h"

KB_DAVINCISOUND::KB_DAVINCISOUND(int soundPIN){
    this->_soundPIN = soundPIN;
    init();
}

void KB_DAVINCISOUND::init(){
    pinMode(_soundPIN , INPUT);
}

int KB_DAVINCISOUND::readValue(){
    return analogRead(_soundPIN);
}