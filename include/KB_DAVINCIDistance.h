#ifndef KB_DAVINCIDistance_H
#define KB_DAVINCIDistance_H

#include "Arduino.h"

class KB_DAVINCIDistance{
    private:
        int _trigPin;
        int _echoPin;
            
    public: 
        KB_DAVINCIDistance(int trigPin,int echoPin);
        void init();
		float readDistance();
        float distance;
        long duration;
        float readDistance_mm();
        float readDistance_cm();
        float readDistance_in();
        float readDistance_m();
                 
};
#endif