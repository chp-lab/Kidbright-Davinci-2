/*
 * Cr. Chatpeth Kenanan
 * Nexpie Giant team
 * ch.ee.psu@outlook.com
 */


#ifndef KB_DAVINCIBTN_DI1_H
#define KB_DAVINCIBTN_DI1_H

#if defined(KB_DAVINCI_H) || defined(KB_DAVINCIBTN_DI1_H)
	#define KBD_DI1 34    //default DI1 in Kidbright davinci board
#endif

#include <Arduino.h>

class KB_DAVINCIBTN_DI1 {
private:
		 static KB_DAVINCIBTN_DI1 * instance0_;
		 byte btn_pin;
		 void handleInterrupt ();
		 static void isr0 ();
		 bool btn_press;
 public:
		 KB_DAVINCIBTN_DI1();
		 void init();
		 void init(byte new_btn);
		 int read();
		 bool pressed();
		 void set_di();
		 void clear_di();
		 void destroy_di();
};

#endif
