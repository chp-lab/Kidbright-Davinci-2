#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <SSD1306Wire.h>
#include <PubSubClient.h>

SSD1306Wire oled1(0x3c, 5, 22);
const char * mqtt_server = "broker.netpie.io";
  				const int mqtt_port = 1883;
  				const char * mqtt_client_id = "1c2ba517-2491-4fcc-b80f-765387521a0c";
  				const char * mqtt_username = "B9KnD4BA9AqUQN5VcbgEQGqphNa95qKd";
  				const char * mqtt_password = "Ns)aFrfq3w~h)U#UWM(OTIHhj~mR3NZp";
  				const int LED_IOT = 2;

  				WiFiClient espClient;
  				PubSubClient client(espClient, mqtt_server, mqtt_port);

void callback(const MQTT::Publish& pub){
					String topic = String(pub.topic());
					String payload = pub.payload_string();
					  if (topic == String("@msg/reboot")) {
    oled1.clear();

    oled1.setFont(ArialMT_Plain_10);
    oled1.drawString(0,0,String(payload));
    oled1.display();
  }

				}

void setup()
{
  client.set_callback(callback);

  	  			pinMode(LED_IOT, OUTPUT);
  Serial.begin(115200);

        const int LED_WIFI = 12;
        pinMode(LED_WIFI, OUTPUT);
        digitalWrite(LED_WIFI, 1);



      WiFi.begin("Yew@","YEWyew111");
      while(WiFi.status() != WL_CONNECTED){
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
        digitalWrite(LED_WIFI, 0);
        delay(200);
        digitalWrite(LED_WIFI, 1);
        delay(200);
      }
        digitalWrite(LED_WIFI, 1);


  

  

  oled1.init();
  oled1.flipScreenVertically();
  oled1.setFont(ArialMT_Plain_10);



  			
  			
  			
  					while(!client.connected()){
  						client.connect(MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
  						digitalWrite(LED_IOT, 0);
  						delay(200);
  						digitalWrite(LED_IOT, 1);
  						delay(200);
  						digitalWrite(LED_IOT, 0);
  						delay(200);
  						digitalWrite(LED_IOT, 1);
  						delay(200);
  					}
  					digitalWrite(LED_IOT, 1);

  			client.subscribe(String("@msg/reboot"));

  			client.publish(String("@msg/reboot"), String("Hello !!!"));
}
void loop()
{
    client.loop();if (!client.connected()) {
    			while(!client.connected()){
    				client.connect(MQTT::Connect(mqtt_client_id).set_auth(mqtt_username, mqtt_password));
    				digitalWrite(LED_IOT, 0);
    				delay(200);
    				digitalWrite(LED_IOT, 1);
    				delay(200);
    				digitalWrite(LED_IOT, 0);
    				delay(200);
    				digitalWrite(LED_IOT, 1);
    				delay(200);
    			}
    			digitalWrite(LED_IOT, 1);
    		}

  
}
