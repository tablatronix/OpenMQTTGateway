(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{433:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upload-with-arduino-ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-with-arduino-ide"}},[e._v("#")]),e._v(" Upload with Arduino IDE")]),e._v(" "),a("ul",[a("li",[e._v("First download the last version of the Arduino IDE from the arduino "),a("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Add ESP32 boards by following this "),a("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Add ESP8266 boards by following this "),a("a",{attrs:{href:"https://github.com/esp8266/Arduino#installing-with-boards-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Download OpenMQTTGateway code (OpenMQTTGateway_sources.zip) from the "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),a("OutboundLink")],1),e._v(" and unzip it")]),e._v(" "),a("li",[e._v("Download the libraries package corresponding to your board and module wished into the same page (example esp32-m5stick-c-ble-libraries.zip)")]),e._v(" "),a("li",[e._v("Unzip the libraries into your arduino libraries folder (example D:/Users/XXXX/Documents/Arduino/libraries)")]),e._v(" "),a("li",[e._v("If necessary replace the spaces into each library folder by _: example rename “ESP32 BLE Arduino” folder to “ESP32_BLE_Arduino”")]),e._v(" "),a("li",[e._v("Open the file main.ino from OpenMQTTGateway/main folder with the arduino IDE")]),e._v(" "),a("li",[e._v("Change the settings and the desired gateways into User_config.h (uncomment the modules you want)")])]),e._v(" "),a("p",[a("em",[e._v("Example for the use of RF gateway")])]),e._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("ZgatewayRF     ")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RF"')]),e._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//ESP8266, Arduino, ESP32")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//#define ZgatewayIR     "IR"       //ESP8266, Arduino, Sonoff RF Bridge')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//#define ZgatewayLORA   "LORA"       //ESP8266, Arduino, ESP32')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//#define ZgatewayPilight "Pilight" //ESP8266, Arduino, ESP32')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//#define ZgatewayBT     "BT"       //ESP8266, ESP32')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[e._v("Change the pins or parameters corresponding to the modules choosen, for RF you can change the pins into config_RF.h")]),e._v(" "),a("li",[e._v("Choose the board on the Arduino IDE")]),e._v(" "),a("li",[e._v("Select the port corresponding to the board")]),e._v(" "),a("li",[e._v("Note that for using BLE on ESP32 you will need to select "),a("em",[e._v("Minimal SPIFFS")]),e._v(" into Tools->Partition Scheme")]),e._v(" "),a("li",[e._v("Open the serial monitor and set 115200 bauds")]),e._v(" "),a("li",[e._v("Upload ➡️")]),e._v(" "),a("li",[e._v("You should see the logs into the serial monitor")])]),e._v(" "),a("p",[e._v("With an ESP if you did not set your network and mqtt parameters manually you can now open the "),a("RouterLink",{attrs:{to:"/upload/portal.html"}},[e._v("web portal configuration")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);