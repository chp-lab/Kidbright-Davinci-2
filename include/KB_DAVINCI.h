
#ifndef KB_DAVINCI_H
#define KB_DAVINCI_H

#include "KB_DAVINCIThermistor.h"
#include "KB_DAVINCIRGB.h"
#include "KB_DAVINCII2C.h"
#include "KB_DAVINCIBTN_DI1.h"
#include "KB_DAVINCIBTN_DI2.h" 
#include "KB_DAVINCIBUZZER.h"
#include "KB_DAVINCILDR.h"

#if defined(KB_DAVINCI_H)
	#define KBD_R_PIN 21
	#define KBD_G_PIN 19
	#define KBD_B_PIN 18
	#define KBD_THERMISTOR_PIN 39
	#define KBD_BUTTON_LEFT_PIN 34
  #define KBD_BUTTON_RIGHT_PIN 35
	#define KBD_SDA_PIN 5
	#define KBD_SCL_PIN 22
	#define KBD_TX_PIN 1
	#define KBD_RX_PIN 3
	#define KBD_GROVE1 33
  #define KBD_GROVE2 26
  #define KBD_GROVE3 27
  #define KBD_GROVE4 14
#endif

#endif
