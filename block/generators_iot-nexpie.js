module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['setup_iot_nexpie_connect'] = function (block) {
		var mqtt_server = block.getFieldValue('mqtt_server');
		var client_id = block.getFieldValue('client_id');
		var token = block.getFieldValue('token');
		var secret = block.getFieldValue('secret');
		var port = block.getFieldValue('port');

		var code = `
			#EXTINC
				#include <PubSubClient.h>
			#END
			#VARIABLE 
				const char * mqtt_server = "${mqtt_server}";
				const int mqtt_port = ${port};
				const char * mqtt_client_id = "${client_id}";
				const char * mqtt_username = "${token}";
				const char * mqtt_password = "${secret}";
				const int LED_IOT = 2;

				WiFiClient espClient;
				PubSubClient client(espClient, mqtt_server, mqtt_port);
                
			#END
			#SETUP
				client.set_callback(callback);
				
	  			pinMode(LED_IOT, OUTPUT);
			#END
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
		`;
		return code;
	};

	Blockly.JavaScript['iot_nexpie_reconnect'] = function (block) {
		var code = `
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
		`;
		return code;
	}

	Blockly.JavaScript['iot_nexpie_callback'] = function (block) {
		var callback_statement = Blockly.JavaScript.statementToCode(block, 'callback');
		var code = `
			#FUNCTION
				void callback(const MQTT::Publish& pub){
					String topic = String(pub.topic());
					String payload = pub.payload_string();
					${callback_statement}
				}
			#END
		`;
		return code
	}

	Blockly.JavaScript['iot_nexpie_isConnected'] = function (block) {
		var code = `client.connected()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['iot_nexpie_subscribe'] = function (block) {
		var subscribe_topic = Blockly.JavaScript.valueToCode(block, 'subscribe_text', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
			client.subscribe(${subscribe_topic});
		`
		return code
	}

	Blockly.JavaScript['iot_nexpie_unsubscribe'] = function (block) {
		var unsubscribe_topic = Blockly.JavaScript.valueToCode(block, 'unsubscribe_text', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
			client.unsubscribe(${unsubscribe_topic});
		`
		return code
	}

	Blockly.JavaScript['iot_nexpie_publish'] = function (block) {
		var publish_topic = Blockly.JavaScript.valueToCode(block, 'publish_text', Blockly.JavaScript.ORDER_ATOMIC);
		var message = Blockly.JavaScript.valueToCode(block, 'message_text', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
			client.publish(${publish_topic}, ${message});
		`
		return code
	}

	Blockly.JavaScript['iot_nexpie_update_shadow'] = function (block) {
		if (block.itemCount_ < 1) {
			return '{}'
		} else {
			var elements = new Array();
			for (var i = 0; i < block.itemCount_; i++) {
				let converted = Blockly.JavaScript.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_COMMA);
				if (converted != '') {
					elements.push(converted);
				}
			}
			var shadow_data = elements.join(',');
			var code = `client.publish("@shadow/data/update", "{\\"data\\":{${shadow_data}}}");`
			return code
		}
	}

	Blockly.JavaScript['iot_nexpie_client_loop'] = function (block) {
		var code = `client.loop();`;
		return code;
	}

	Blockly.JavaScript['iot_nexpie_topic'] = function (block) {
		var code = `topic`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['iot_nexpie_payload'] = function (block) {
		var code = `payload`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['iot_nexpie_key_value_pair'] = function (block) {
		var key = block.getFieldValue('key');
		var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_COMMA);
		var code = `\\"${key}\\":" + String(${value}) + "`
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}
};