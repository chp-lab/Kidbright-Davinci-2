#ifndef KB_DAVINCISOUND_h
#define KB_DAVINCISOUND_h

#include "Arduino.h"

class KB_DAVINCISOUND{
    private:
        int _soundPIN;
        
    public: 
        KB_DAVINCISOUND(int soundPIN);
        void init();
		int readValue();
                 
};
#endif