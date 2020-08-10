const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
	blocks : [
		{
			name: 'Game',
			icon: `file:///${dirIcon}/static/icons/game_icon.png`,
			index: 1,
			color: "230",
			blocks:['block_game_squid']
		},
		{
            name : 'Display',
			color : '230',
			index: 2,
			icon: `file:///${dirIcon}/static/icons/icon_display.png`,
            blocks : [
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
			  "setup_tempo",
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
			blocks:[
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
			name: 'Sensor',
			icon: `file:///${dirIcon}/static/icons/icon_sensor.png`,
			index: 5,
			color: "230",
			blocks:[
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : Thermistor" web-class="headline"></label>`
				},
				'setup_thermistor_pin',
				'thermistorCelsius', 
				'thermistorFahrenheit',
				{
					xml: `<sep gap="28"></sep><label text="Kid Bright Davinci Sensor : LDR" web-class="headline"></label>`
				},
			    'setup_LDR_pin',
				'block_LDR', 
			]
		},
		{
			name: "WiFi",
			index: 6,
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
						xml : 
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
			index: 7,
			color: "230",
			blocks:[
				'set_rgb',
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
			index: 8,
			color: "230",
			blocks:['button_di1','button_di2']
		},
		{
			name: 'I2C',
			icon: `file:///${dirIcon}/static/icons/I2C-Logo.png`,
			index: 9,
			color: "230",
            blocks:[
				'i2c_begin',
				'i2c_scanI2Cdevice',
				'i2c_hasDeviceAddress',
			]
		},
	
	
	]
};
