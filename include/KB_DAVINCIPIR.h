#ifndef KB_DAVINCIPIR_H
#define KB_DAVINCIPIR_H

#include <Arduino.h>

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCIPIR_H)
#define DEFAULT_pir_PIN 32
#define KB_DAVINCIPIR_freq 2000
#define KB_DAVINCIPIR_channel 0
#define KB_DAVINCIPIR_resolution 8
#define KB_DAVINCIPIR_dutyCycle 128
#define KB_DAVINCIPIR_BUZZER 23

#endif

class KB_DAVINCIPIR{

private:
    byte _pir_pin;
    int _freq = 2000;
    int _channel = 0;
    int _resolution = 8;
    int _dutyCycle = 128;
    int _buzzer = 23;
    SemaphoreHandle_t syncSemaphore;
public:
    KB_DAVINCIPIR();
    KB_DAVINCIPIR(
        byte pin,
        int freq,
        int channel,
        int resolution,
        int dutycycle,
        int buzzer
    );
    void setPin(byte pin);
    void setfreq(int freq);
    void setchannel(int channel);
    void setresolution(int resolution);
    void setdutycycle(int dutycycle);
    void setbuzzer(int buzzer);
    int readPIRMotion();
};
#endif
