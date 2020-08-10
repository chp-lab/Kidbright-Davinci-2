#include "KB_DAVINCIRGB.h"

// Constructor
KB_DAVINCIRGB::KB_DAVINCIRGB(){
	setPin(DEFAULT_R_PIN, DEFAULT_G_PIN, DEFAULT_B_PIN);			// default RGB pin on KB_DAVINCIShield
	setCommonCathode(TYPE_COMMON_CATHODE);
}

KB_DAVINCIRGB::KB_DAVINCIRGB(byte r_pin, byte g_pin, byte b_pin, bool common_cathode){
	setPin(r_pin, g_pin, b_pin);
	setCommonCathode(common_cathode);
}

// Init method
void KB_DAVINCIRGB::begin(){
	// setup timer chanel
	ledcSetup(_redChanel, _freq, _resolution);
	ledcSetup(_greenChanel, _freq, _resolution);
	ledcSetup(_blueChanel, _freq, _resolution);

	// attach the channel to the GPIO to be controlled
	ledcAttachPin(_REDPIN, _redChanel);
  ledcAttachPin(_GREENPIN, _greenChanel);
  ledcAttachPin(_BLUEPIN, _blueChanel);
}

void KB_DAVINCIRGB::setPin(byte r_pin, byte g_pin, byte b_pin){
	_REDPIN = r_pin;
	_GREENPIN = g_pin;
	_BLUEPIN = b_pin;
}

void KB_DAVINCIRGB::setCommonCathode(bool common_cathode){
	_common_cathode = common_cathode;
}

void KB_DAVINCIRGB::setColor(String color) {
	if (color.equals("red")) {
		red();
	}else if (color.equals("green")) {
		green();
	}else if (color.equals("blue")) {
		blue();
	}else if (color.equals("pink")) {
		pink();
	}else if (color.equals("yellow")) {
		yellow();
	}else if (color.equals("orange")) {
		orange();
	}else if (color.equals("lightblue")) {
		lightblue();
	}else if (color.equals("lightgreen")) {
		lightgreen();
	}else if (color.equals("white")) {
		white();
	}
}

void KB_DAVINCIRGB::setColor(byte rgb[3]){
	setColor(rgb[0], rgb[1], rgb[2]);
}

void KB_DAVINCIRGB::setColor(byte r, byte g, byte b){
	_red = r;
	_green = g;
	_blue = b;
	on();
}

void KB_DAVINCIRGB::on(){
	if(_common_cathode){
		ledcWrite(_redChanel, _red);
		ledcWrite(_greenChanel, _green);
		ledcWrite(_blueChanel, _blue);
	}else{
		ledcWrite(_redChanel, MAX_BRIGHTNESS - _red);
		ledcWrite(_greenChanel, MAX_BRIGHTNESS - _green);
		ledcWrite(_blueChanel, MAX_BRIGHTNESS - _blue);
	}
}

void KB_DAVINCIRGB::on(byte r, byte g, byte b){
	if(_common_cathode){
		ledcWrite(_redChanel, r);
		ledcWrite(_greenChanel, g);
		ledcWrite(_blueChanel, b);
	}else{
		ledcWrite(_redChanel, MAX_BRIGHTNESS - r);
		ledcWrite(_greenChanel, MAX_BRIGHTNESS - g);
		ledcWrite(_blueChanel, MAX_BRIGHTNESS - b);
	}
}

void KB_DAVINCIRGB::off(){
	if(_common_cathode){
		ledcWrite(_redChanel, MIN_BRIGHTNESS);
		ledcWrite(_greenChanel, MIN_BRIGHTNESS);
		ledcWrite(_blueChanel, MIN_BRIGHTNESS);
	}else{
		ledcWrite(_redChanel, MAX_BRIGHTNESS);
		ledcWrite(_greenChanel, MAX_BRIGHTNESS);
		ledcWrite(_blueChanel, MAX_BRIGHTNESS);
	}
}

void KB_DAVINCIRGB::clear(){
	if (_common_cathode){
		_red = MAX_BRIGHTNESS;
		_green = MAX_BRIGHTNESS;
		_blue = MAX_BRIGHTNESS;
	}else{
		_red  = MIN_BRIGHTNESS;
		_green = MIN_BRIGHTNESS;
		_blue = MIN_BRIGHTNESS;
	}
	on();
}

void KB_DAVINCIRGB::red(){
	setColor(MAX_BRIGHTNESS, MIN_BRIGHTNESS, MIN_BRIGHTNESS);
}

void KB_DAVINCIRGB::green(){
	setColor(MIN_BRIGHTNESS, MAX_BRIGHTNESS, MIN_BRIGHTNESS);
}

void KB_DAVINCIRGB::blue(){
	setColor(MIN_BRIGHTNESS, MIN_BRIGHTNESS, MAX_BRIGHTNESS);
}

void KB_DAVINCIRGB::yellow(){
	setColor(MAX_BRIGHTNESS, MAX_BRIGHTNESS, MIN_BRIGHTNESS);
}

void KB_DAVINCIRGB::pink(){
	setColor(MAX_BRIGHTNESS, MIN_BRIGHTNESS, MAX_BRIGHTNESS);
}

void KB_DAVINCIRGB::lightblue(){
	setColor(MIN_BRIGHTNESS, MAX_BRIGHTNESS/3, MAX_BRIGHTNESS);
}

void KB_DAVINCIRGB::orange(){
	setColor(MAX_BRIGHTNESS, MAX_BRIGHTNESS/10, MIN_BRIGHTNESS);
}

void KB_DAVINCIRGB::lightgreen(){
	setColor(MIN_BRIGHTNESS, MAX_BRIGHTNESS, MAX_BRIGHTNESS/5);
}

void KB_DAVINCIRGB::white(){
	setColor(MAX_BRIGHTNESS, MAX_BRIGHTNESS, MAX_BRIGHTNESS);
}

