#include "KB_DAVINCIBUZZER.h"

void KB_DAVINCIBUZZER::begin(void) {
    // ledcSetup(TONE_CHANNEL, 5000, 13);
}

void KB_DAVINCIBUZZER::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(KBD_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        float x = duration * this->tempo;
        delay(x);
        noTone();
    }
}
void KB_DAVINCIBUZZER::setTempo(int tempo) {
   float ratio = 60.0 / tempo;
   this->tempo = ratio;
  }

void KB_DAVINCIBUZZER::noTone()
{
    ledcDetachPin(KBD_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void KB_DAVINCIBUZZER::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}
