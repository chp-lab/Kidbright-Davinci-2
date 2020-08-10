/*
 * Cr. Chatpeth Kenanan
 * Nexpie Giant team
 * ch.ee.psu@outlook.com
 */


#include "KB_DAVINCIBTN_DI2.h"

// for use by ISR glue routines
KB_DAVINCIBTN_DI2 * KB_DAVINCIBTN_DI2::instance0_;

// Constructure
KB_DAVINCIBTN_DI2::KB_DAVINCIBTN_DI2() {
    this->btn_pin = KBD_DI2;
    this->btn_press = false;
}

void KB_DAVINCIBTN_DI2::init() {
    pinMode(btn_pin, INPUT);
    attachInterrupt(btn_pin, isr0, RISING);
    instance0_ = this;
}

void KB_DAVINCIBTN_DI2::init(byte new_btn) {
    this->btn_pin = new_btn;
    init();
}

int KB_DAVINCIBTN_DI2::read() {
    return digitalRead(btn_pin);
}

// ISR glue routines
void IRAM_ATTR KB_DAVINCIBTN_DI2::isr0() {
    instance0_->handleInterrupt();
}

// class instance to handle an interrupt
void KB_DAVINCIBTN_DI2::handleInterrupt () {
    this->btn_press = true;
    destroy_di();
}

void KB_DAVINCIBTN_DI2::set_di() {
    clear_di();
    delay(255);
    attachInterrupt(btn_pin, isr0, RISING);
}

void KB_DAVINCIBTN_DI2::clear_di() {
    this->btn_press = false;
}

void KB_DAVINCIBTN_DI2::destroy_di() {
    detachInterrupt(btn_pin);
}

bool KB_DAVINCIBTN_DI2::pressed() {
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
