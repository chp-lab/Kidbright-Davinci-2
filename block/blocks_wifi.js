const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  'use strict';

  var music_colour = "#cc00cc";

  Blockly.Blocks['block_setup_wifi'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Using setup Wifi connected");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip(" Wifi connected");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['block_wifi_connect'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("connect WiFi ssid")
        .appendField(new Blockly.FieldTextInput("test"), "ssid")
        .appendField("password")
        .appendField(new Blockly.FieldTextInput("test"), "password");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("connect WiFi");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_ap'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("start wifi access point")
        .appendField(new Blockly.FieldTextInput("NAME AP"), "ssid")
        .appendField("password")
        .appendField(new Blockly.FieldTextInput("123456789"), "password");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("start wifi access point");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_http_get'] = {
    init: function () {
      this.appendValueInput("url")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .setCheck("String")
        .appendField(new Blockly.FieldImage("/static/icons/icons8_wifi_26px.png", 15, 15, "*"))
        .appendField("http GET url : ");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(music_colour);
      this.setTooltip("send HTTP GET");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_http_post'] = {
    init: function () {
      this.appendValueInput("url")
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .setCheck("String")
        .appendField(new Blockly.FieldImage("/static/icons/icons8_wifi_26px.png", 15, 15, "*"))
        .appendField("http POST url : ");
      this.appendValueInput("data")
        .setCheck("String")
        .appendField("data");
      this.appendDummyInput()
        .appendField("content-type")
        .appendField(new Blockly.FieldDropdown([["text/html", "text/html"], ["application/json", "application/json"], ["application/x-www-form-urlencoded", "application/x-www-form-urlencoded"], ["application/xml", "application/xml"], ["multipart/form-data", "multipart/form-data"], ["text/plain", "text/plain"], ["text/xml", "text/xml"], ["image/jpeg", "image/jpeg"]]), "content_type");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(music_colour);
      this.setTooltip("sent http POST to server");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_start_server'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("start HTTP server port")
        .appendField(new Blockly.FieldTextInput("80"), "port");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("start HTTP server");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_server_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("server on")
        .appendField(new Blockly.FieldTextInput("/"), "event_name");
      this.appendStatementInput("event_do")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("event when server got event");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_server_send'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("response to client")
        .appendField(new Blockly.FieldDropdown([["200_OK", "200"], ["302_Found_redirect", "302"], ["400_Bad_Request", "400"], ["403_Forbidden", "403"], ["404_Not_found", "404"], ["500_Internal_Server_Error", "500"], ["502_Bad_Gateway", "502"]]), "status")
        .appendField("content-type")
        .appendField(new Blockly.FieldDropdown([["text/html", "text/html"], ["application/json", "application/json"], ["application/x-www-form-urlencoded", "application/x-www-form-urlencoded"], ["application/xml", "application/xml"], ["multipart/form-data", "multipart/form-data"], ["text/plain", "text/plain"], ["text/xml", "text/xml"], ["image/jpeg", "image/jpeg"]]), "content_type");
      this.appendValueInput("text")
        .setCheck("String")
        .appendField("message");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_get_ip_addr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("get IP address");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(music_colour);
      this.setTooltip("get client IP address");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_get_ap_ip_addr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("get SoftAP IP address");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(music_colour);
      this.setTooltip("get access point IP address");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_wifi_get_arg'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/wifi.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("http GET parameter ")
        .appendField(new Blockly.FieldTextInput("test"), "arg_name");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(music_colour);
      this.setTooltip("get value from HTTP GET parameter");
      this.setHelpUrl("");
    }
  };

}