#include "KB_DAVINCIDistance.h"

KB_DAVINCIDistance::KB_DAVINCIDistance(int trigPin, int echoPin)
{
    this->_trigPin = trigPin;
    this->_echoPin = echoPin;
    init();
}

void KB_DAVINCIDistance::init()
{
    pinMode(_trigPin, OUTPUT);
    pinMode(_echoPin, INPUT);
}

float KB_DAVINCIDistance::readDistance()
{
    duration = 0;
    distance = 0;
    // Clear the trigPin by setting it LOW:
    digitalWrite(_trigPin, LOW);
    delayMicroseconds(5);

    // Trigger the sensor by setting the trigPin high for 10 microseconds:
    digitalWrite(_trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(_trigPin, LOW);

    // Read the echoPin, pulseIn() returns the duration (length of the pulse) in microseconds:
    duration = pulseIn(_echoPin, HIGH);
    // Calculate the distance:
    distance = duration * 0.034 / 2;
    return  distance;
}
float KB_DAVINCIDistance::readDistance_mm()
{
    readDistance();
     return  distance*10 ;
}
float KB_DAVINCIDistance::readDistance_cm()
{
    readDistance();
     return  distance ;
}
float KB_DAVINCIDistance::readDistance_in()
{
    readDistance();
     return  distance*0.3937 ;
}
float KB_DAVINCIDistance::readDistance_m()
{
    readDistance();
     return  distance/100 ;
}
