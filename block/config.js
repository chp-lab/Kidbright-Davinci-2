const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
	blocks: [
		{
			name: 'Blink',
			icon: `file:///${dirIcon}/static/icons/blink.png`,
			index: 1,
			color: "230",
			blocks: [
				{
					xml:
						`<block type="set_led_blink">
							<value name="delay">
								<shadow type="math_number">
									<field name="NUM">1000</field>
								</shadow>
							</value>							
						</block>`
				}, 'led_blink'

			]
		},
		// {
		// 	name: 'Temperature',
		// 	icon: `file:///${dirIcon}/static/icons/blink.png`,
		// 	index: 1,
		// 	color: "230",
		// 	blocks:[
		// 		{
		// 			xml:
		// 				`<block type="KBD_begin">
		// 					<value name="SCL">
		// 						<shadow type="math_number">
		// 							<field name="NUM">22</field>
		// 						</shadow>
		// 					</value>
		// 				</block>`
		// 		},
		// 		'KBD_read_object_temp_c',
		// 		'KBD_read_ambient_temp_c',
		// 		'KBD_read_object_temp_f',
		// 		'KBD_read_ambient_temp_f',
		// 	]
		// },
		{
			name: 'Game',
			icon: `file:///${dirIcon}/static/icons/game_icon.png`,
			index: 1,
			color: "230",
			blocks: ['block_game_squid']
		},
		{
			name: 'Display',
			color: '230',
			index: 2,
			icon: `file:///${dirIcon}/static/icons/icon_display.png`,
			blocks: [
				{
					xml:
						`<block type="i2c128x64_display_begin">
							<value name="SDA">
								<shadow type="math_number">
									<field name="NUM">5</field>
								</shadow>
							</value>
							<value name="SCL">
								<shadow type="math_number">
									<field name="NUM">22</field>
								</shadow>
							</value>
						</block>`
				},
				{
					xml: `<block type="variables_set">
									<field name="VAR">img1</field>
									<value name="VALUE">
										<block type="i2c128x64_create_image" inline="false"></block>
									</value>
						 </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_image">
							<value name="img">
								<block type="variables_get">
									<field name="VAR">img1</field>
								</block>
							</value>
							<value name="x">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="x">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="y">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="width">
								<shadow type="math_number">
									<field name="NUM">10</field>
								</shadow>
							</value>
							<value name="height">
								<shadow type="math_number">
									<field name="NUM">10</field>
								</shadow>
							</value>
						</block>`
				},
				"i2c128x64_display_clear",
				"i2c128x64_display_display",
				{
					xml:
						`<block type="i2c128x64_display_print">
									  <value name="text">
										  <shadow type="basic_string">
											  <field name="VALUE">Hello world!</field>
										  </shadow>
									  </value>
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_line">
									  <value name="x0">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="y0">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="x1">
										  <shadow type="math_number">
											  <field name="NUM">100</field>
										  </shadow>
									  </value>
									  <value name="y1">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_rect">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="width">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
									  <value name="height">
										  <shadow type="math_number">
											  <field name="NUM">30</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_circle">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">64</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>
									  <value name="r">
										  <shadow type="math_number">
											  <field name="NUM">20</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_progress_bar">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>
									  <value name="width">
										  <shadow type="math_number">
											  <field name="NUM">120</field>
										  </shadow>
									  </value>
									  <value name="height">
										  <shadow type="math_number">
											  <field name="NUM">30</field>
										  </shadow>
									  </value>
									  <value name="progress">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_pixel">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">64</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>    
								  </block>`
				},
				"i2c128x64_display_width",
				"i2c128x64_display_height",
				"basic_string"
			]
		},
		{
			name: "Music",
			index: 3,
			color: "230",
			icon: `file:///${dirIcon}/static/icons/music.png`,
			blocks: [
				{
					xml: `<sep gap="28"></sep><label text="Block setup Kid Bright Davinci 2.0 MUSIC" web-class="headline"></label>`
				},
				"setup_nx2003_Music",
				{
					xml:
						`<block type="setup_tempo">
						<value name="tempo">
							<shadow type="math_number">
								<field name="NUM">60</field>
							</shadow>
						</value>
					</block>`
				},
				// {
				//   xml: `<sep gap="28"></sep><label text="Block setting NX2003 MUSIC" web-class="headline"></label>`
				// },
				"music_note",
				"music_notes",
				{
					xml:
						`<block type="music_play_notes">
								  <value name="note">                    
									  <block type="music_notes">
										  <field name="notes">C4,B4,E4</field>
									  </block>
								  </value>
							  </block>`
				},
				{
					xml: `<sep gap="32"></sep><label text="Example song for Kid Bright Davinci 2.0" web-class="headline"></label>`
				},
				// 'music_song_mario_underworld',
				// 'music_song_jingle_bell',
				// 'music_song_cannon_rock',
				// 'music_song_ice_cream',
				'music_ice_cream',
				'music_cat',
				'music_conan',
				'music_mario',
				'music_pirate',
				'music_harry'
			]
		},

		{
			name: 'RTC',
			icon: `file:///${dirIcon}/static/icons/RTC2.png`,
			index: 4,
			color: "230",
			blocks: [
				'rtc_KBD_begin',
				'rtc_KBD_updateTime',
				// 'rtc_KBD_timestamp_format',
				'rtc_KBD_get_day_time',
				'rtc_KBD_get_year',
				'rtc_KBD_get_month',
				'rtc_KBD_get_day',
				'rtc_KBD_get_hour',
				'rtc_KBD_get_minute',
				'rtc_KBD_get_second'
			]
		},
		{
			name: 'Servo',
			icon: `file:///${dirIcon}/static/icons/servo-Logo2.png`,
			index: 4,
			color: "230",
			blocks: [
				{
					xml:
						`<block type="KBD_servo_setup">
							<value name="servo_pin">
								<shadow type="math_number">
									<field name="NUM">32</field>
								</shadow>
							</value>
						</block>`
				},
				'KBD_servo_stop',
				{
					xml:
						`<block type="KBD_servo_write">
						<value name="degree">
							<block type="math_number">><field name="NUM">0</field></block>
						</value>
					</block>`
				},
				{
					xml:
						`<block type="KBD_servo_write_micros">
						<value name="degree">
							<block type="math_number">><field name="NUM">0</field></block>
						</value>
					</block>`
				},
				'KBD_servo_read',
				'KBD_servo_read_micros',
			]
		},
		{
			name: 'Sensor',
			icon: `file:///${dirIcon}/static/icons/icon_sensor.png`,
			index: 5,
			color: "230",
			blocks: [
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : Thermistor" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="setup_thermistor_pin">
							<value name="thermistor_pin">
								<shadow type="math_number">
									<field name="NUM">39</field>
								</shadow>
							</value>
						</block>`
				},
				'thermistorCelsius',
				'thermistorFahrenheit',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : LDR" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="setup_LDR_pin">
							<value name="LDR_PIN">
								<shadow type="math_number">
									<field name="NUM">25</field>
								</shadow>
							</value>
						</block>`
				},
				'block_LDR',
			]
		},
		{
			name: 'Ex Sensor',
			icon: `file:///${dirIcon}/static/icons/ex-icon.png`,
			index: 6,
			color: "230",
			blocks: [
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : Motion sensor" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="setup_pir_motion">
							<value name="pir_PIN">
								<shadow type="math_number">
									<field name="NUM">32</field>
								</shadow>
							</value>
						</block>`
				},
				'block_looppir',
				'read_pir',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : Sound KY-037 sensor" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="set_pinsound">
							<value name="soundPIN">
								<shadow type="math_number">
									<field name="NUM">32</field>
								</shadow>
							</value>
						</block>`
				},
				'read_sound',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : Ultrasonic sensor" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="set_pindistance">
							<value name="trigPin">
								<shadow type="math_number">
									<field name="NUM">33</field>
								</shadow>
							</value>
							<value name="echoPin">
								<shadow type="math_number">
									<field name="NUM">32</field>
								</shadow>
							</value>
						</block>`
				},
				'read_distance_mm',
				'read_distance_cm',
				'read_distance_in',
				'read_distance_m',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : MLX90614 infrared thermomete" web-class="headline"></label>`
				},
				{
					xml:
						`<block type="KBD_beginMLX90614">
										<value name="SCL">
											<shadow type="math_number">
												<field name="NUM">22</field>
											</shadow>
										</value>
									</block>`
				},
				'KBD_read_object_temp_c',
				'KBD_read_ambient_temp_c',
				'KBD_read_object_temp_f',
				'KBD_read_ambient_temp_f',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : DHT" web-class="headline"></label>`
				},
				// 'KBD_dht_setup',
				{
					xml:
						`<block type="KBD_dht_setup">
										<value name="dht_PIN">
											<shadow type="math_number">
												<field name="NUM">32</field>
											</shadow>
										</value>
									</block>`
				},
				'KBD_dht_read_temp',
				'KBD_dht_read_humid',
			]
		},
		{
			name: "WiFi",
			index: 7,
			color: "30",
			icon: `file:///${dirIcon}/static/icons/wifi.png`,
			blocks: [
				'block_setup_wifi',
				'block_wifi_connect',
				'block_wifi_ap',
				// {
				//     xml : 
				//         `<block type="wifi_http_get">
				//             <value name="url">
				//                 <shadow type="basic_string">
				//                     <field name="VALUE">Hello world!</field>
				//                 </shadow>
				//             </value>
				//         </block>`
				// },
				// {
				//     xml : 
				//         `<block type="wifi_http_post">
				//             <value name="url">
				//                 <shadow type="basic_string">
				//                     <field name="VALUE">Hello world!</field>
				//                 </shadow>
				//             </value>
				//             <value name="data">
				//                 <shadow type="basic_string">
				//                     <field name="VALUE">Hello world!</field>
				//                 </shadow>
				//             </value>
				//         </block>`
				// },                   
				'block_wifi_start_server',
				'block_wifi_server_on',
				{
					xml:
						`<block type="block_wifi_server_send">
								<value name="text">
									<shadow type="basic_string">
										<field name="VALUE">Hello world!</field>
									</shadow>
								</value>
							</block>`
				},

				'block_wifi_get_ip_addr',
				'block_wifi_get_ap_ip_addr',
				'block_wifi_get_arg'
			]
		},
		{
			name: 'RGB',
			icon: `file:///${dirIcon}/static/icons/rgb-icon.png`,
			index: 8,
			color: "230",
			blocks: [
				{
					xml:
						`<block type="set_rgb">
							<value name="r">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="g">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="b">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
						</block>`
				},
				'rgb_color',
				'rgb_status',
				'turn_off_rgb',
				'clear_rgb',
				'rgb_red',
				'rgb_green',
				'rgb_blue',
				'rgb_yellow',
				'rgb_pink',
				'rgb_orange',
				'rgb_lightblue',
				'rgb_lightgreen',
				'rgb_white',
			]
		},
		{
			name: 'Button',
			icon: `file:///${dirIcon}/static/icons/button.png`,
			index: 9,
			color: "230",
			blocks: ['button_di1', 'button_di2']
		},
		{
			name: "IoT-NEXPIE",
			icon: `file:///${dirIcon}/static/icons/netpie.png`,
			index: 9,
			color: "120",
			blocks: [
				'setup_iot_nexpie_connect',
				'iot_nexpie_callback',
				{
					xml:
						`<block type="iot_nexpie_subscribe">
							<value name="subscribe_text">
								<shadow type="basic_string">
									<field name="VALUE">@msg/your_topic</field>
								</shadow>
							</value>
						</block>`
				},
				{
					xml:
						`<block type="iot_nexpie_unsubscribe">
							<value name="unsubscribe_text">
								<shadow type="basic_string">
									<field name="VALUE">@msg/your_topic</field>
								</shadow>
							</value>
						</block>`
				},
				{
					xml:
						`<block type="iot_nexpie_publish">
							<value name="publish_text">
								<shadow type="basic_string">
									<field name="VALUE">@msg/your_topic</field>
								</shadow>
							</value>
							<value name="message_text">
								<shadow type="basic_string">
									<field name="VALUE">--message--</field>
								</shadow>
							</value>
						</block>`
				},
				'iot_nexpie_update_shadow',
				'iot_nexpie_reconnect',
				'iot_nexpie_client_loop',
				'iot_nexpie_isConnected',
				'iot_nexpie_key_value_pair',
				'iot_nexpie_topic',
				'iot_nexpie_payload'
			]
		},

		{
			name: 'I2C',
			icon: `file:///${dirIcon}/static/icons/I2C-Logo.png`,
			index: 9,
			color: "230",
			blocks: [
				'i2c_begin',
				'i2c_scanI2Cdevice',
				'i2c_hasDeviceAddress',
			]
		},


	]
};
