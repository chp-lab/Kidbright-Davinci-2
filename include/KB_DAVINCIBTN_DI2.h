/*
 * Cr. Chatpeth Kenanan
 * Nexpie Giant team
 * ch.ee.psu@outlook.com
 */


#ifndef KB_DAVINCIBTN_DI2_H
#define KB_DAVINCIBTN_DI2_H

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCIBTN_DI2_H)
	#define KBD_DI2 35    //default DI1 in Kidbright davinci board
#endif

#include <Arduino.h>

class KB_DAVINCIBTN_DI2 {
private:
		 static KB_DAVINCIBTN_DI2 * instance0_;
		 byte btn_pin;
		 void handleInterrupt ();
		 static void isr0 ();
		 bool btn_press;
 public:
		 KB_DAVINCIBTN_DI2();
		 void init();
		 void init(byte new_btn);
		 int read();
		 bool pressed();
		 void set_di();
		 void clear_di();
		 void destroy_di();
};

#endif
