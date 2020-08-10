/*
 * Cr. Chatpeth Kenanan
 * Nexpie Giant team
 * ch.ee.psu@outlook.com
 */


#include "KB_DAVINCIBTN_DI1.h"

// for use by ISR glue routines
KB_DAVINCIBTN_DI1 * KB_DAVINCIBTN_DI1::instance0_;

// Constructure
KB_DAVINCIBTN_DI1::KB_DAVINCIBTN_DI1() {
    this->btn_pin = KBD_DI1;
    this->btn_press = false;
}

void KB_DAVINCIBTN_DI1::init() {
    pinMode(btn_pin, INPUT);
    attachInterrupt(btn_pin, isr0, RISING);
    instance0_ = this;
}

void KB_DAVINCIBTN_DI1::init(byte new_btn) {
    this->btn_pin = new_btn;
    init();
}

int KB_DAVINCIBTN_DI1::read() {
    return digitalRead(btn_pin);
}

// ISR glue routines
void IRAM_ATTR KB_DAVINCIBTN_DI1::isr0() {
    instance0_->handleInterrupt();
}

// class instance to handle an interrupt
void KB_DAVINCIBTN_DI1::handleInterrupt () {
    this->btn_press = true;
    destroy_di();
}

void KB_DAVINCIBTN_DI1::set_di() {
    clear_di();
    delay(255);
    attachInterrupt(btn_pin, isr0, RISING);
}

void KB_DAVINCIBTN_DI1::clear_di() {
    this->btn_press = false;
}

void KB_DAVINCIBTN_DI1::destroy_di() {
    detachInterrupt(btn_pin);
}

bool KB_DAVINCIBTN_DI1::pressed() {
    if(btn_press)
    {
        set_di();
        return true;
    }
    else
    {
        return false;
    }
}
