#ifndef ledBlink_h
#define ledBlink_h

#include "Arduino.h"

class ledBlink{
    private:
        int _ledPIN;
        int _duration;
        
    public: 
        ledBlink(int ledPIN,int duration);
        void Blink();
        void init();
                 
};


#endif