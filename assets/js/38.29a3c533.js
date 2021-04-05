(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upload-with-platformio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-with-platformio"}},[e._v("#")]),e._v(" Upload with PlatformIO")]),e._v(" "),a("p",[e._v("This section is usefull if you want to do advanced configuration of your project or if you choose an Arduino. Indeed the ESP family can be loaded directly without any configuration from your desktop.\nAdvanced configurations means changing the default used pins, the MQTT subjects and all the expert parameters that you can find in "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/User_config.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("User_config.h"),a("OutboundLink")],1),e._v(" and in all "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/tree/development/main",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_XX.h"),a("OutboundLink")],1),e._v(".\nIf you don't have to change the default parameters except wifi and broker setting you can go directly to the "),a("a",{attrs:{href:"load"}},[e._v("Load")]),e._v(" section.")]),e._v(" "),a("p",[e._v("Download the "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("CODE"),a("OutboundLink")],1),e._v(" from github.")]),e._v(" "),a("p",[e._v("So as to configure OpenMQTTGateway you have the choice between 2 development environments:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arduino IDE"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://platformio.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlatformIO"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("I advise to use PlatformIO, this way you will not have to search for all the necessary libraries and adequate forks/revisions. If you really want to use Arduino you need to download the libraries listed "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/d2dd6138558909b71cc44f69665340247bd5f356/platformio.ini#L55",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" at the version or revision specified.")]),e._v(" "),a("p",[e._v("With PlatformIO")]),e._v(" "),a("ul",[a("li",[e._v('Open the folder named "OpenMQTTGateway"')]),e._v(" "),a("li",[e._v("Open the platformio.ini file and uncomment the default_envs line corresponding to your board and choosen module like below.")])]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = sonoff-basic-rfr3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = rfbridge")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-all")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("default_envs")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" esp32dev-rf")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-ir")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-ble")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = ttgo-lora32-v1")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("If you don't know which "),a("code",[e._v("env")]),e._v(" to activate you can refer to "),a("a",{attrs:{href:"../prerequisites/devices"}},[e._v("devices")]),e._v(".")]),e._v(" "),a("p",[e._v("The different listed configurations represents some standard environments and boards, to overload them with special parameters or modules you can modify the config files ("),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/config_RF.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_RF.h"),a("OutboundLink")],1),e._v(" for example). The definitions coming from "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/platformio.ini",target:"_blank",rel:"noopener noreferrer"}},[e._v("platformio.ini"),a("OutboundLink")],1),e._v(" file and config files are cumulative.\nThe main config file is "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/User_config.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("User_config.h"),a("OutboundLink")],1),e._v(", added to it you have one config file per gateway, sensor or actuator, you will find them in the "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/tree/development/main",target:"_blank",rel:"noopener noreferrer"}},[e._v("main"),a("OutboundLink")],1),e._v(" folder.")]),e._v(" "),a("p",[e._v("If you want to add more sensors or gateways to one "),a("code",[e._v("default_envs")]),e._v(" you can add the modules directly into your environment definition of your .ini files or uncomment them into "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/d2dd6138558909b71cc44f69665340247bd5f356/main/User_config.h#L84",target:"_blank",rel:"noopener noreferrer"}},[e._v("User_config.h"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Example to add IR to "),a("code",[e._v("esp32dev-rf")]),e._v(" add the "),a("code",[e._v("build_flags")]),e._v(" below to the env definition:")]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayIR")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"IR"\'')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[env:esp32dev-rf]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("platform")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" ${com.esp32_platform}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("board")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" esp32dev")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("lib_deps")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n  ${com-esp.lib_deps}\n  ${libraries.rc-switch}\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("build_flags")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" ")]),e._v("\n  ${com-esp.build_flags}\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayRF")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"RF"\'')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayIR")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"IR"\'')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DGateway_Name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"OpenMQTTGateway_ESP32_RF_IR"\'')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("You can define your environment into an additionnal "),a("code",[e._v("production_env.ini")]),e._v(" file than "),a("code",[e._v("platformio.ini")]),e._v(", when building PIO will scan for all the")]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[e._v("*_env.ini\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This way when updating the code your environments definition will not be overwritten.")]),e._v(" "),a("p",[e._v("Once your configuration is done you can upload the program to your board by clicking on the white arrow at the blue bottom bar of your PIO editor or with the following command:\n"),a("code",[e._v("pio run --target upload")])]),e._v(" "),a("p",[e._v("PIO will download the necessaries platform and libraries with the correct versions, build the code and upload it.")]),e._v(" "),a("p",[e._v("If you encounter errors the first thing to do is to clean your environment by using the white dust bin in the blue bottom bar.")]),e._v(" "),a("p",[e._v("With some ESP it could be necessary to push the reset button when the upload begin.")]),e._v(" "),a("p",[e._v("If you want to erase the settings stored in the ESP memory use:\n"),a("code",[e._v("pio run --target erase")]),e._v("\nThis can be usefull especialy before the first upload or when you change the board partitions sizing.")]),e._v(" "),a("p",[e._v("Once done the gateway should connect to your network and your broker, you should see it into the broker in the form of the following messages:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("home/OpenMQTTGateway/LWT Online \nhome/OpenMQTTGateway/version\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h1",{attrs:{id:"ota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ota"}},[e._v("#")]),e._v(" OTA")]),e._v(" "),a("p",[e._v("With PIO you can also upload the firmware through Over the Air, so as to do that you can add the upload options flags used below, "),a("code",[e._v("upload_port")]),e._v(" is the IP adress of your ESP:")]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[env:esp32-ble]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("platform")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" ${com.esp32_platform}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("board")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" esp32dev")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("board_build.partitions")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" min_spiffs.csv")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("lib_deps")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n  ${com-esp.lib_deps}\n  ${libraries.ble}\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("build_flags")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n  ${com-esp.build_flags}\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayBT")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"BT"\'')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DGateway_Name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"OpenMQTTGateway_ESP32"\'')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("upload_protocol")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" espota")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("upload_port")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" 192.168.1.22")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("upload_flags")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  --auth")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("OTAPASSWORD")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  --port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("8266")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("p",[e._v("With the V0.9 we added the support of json for receiving and publishing.\nPer default Json reception and Json publication is activated, the previous simple reception mode is also activated to avoid regression on commands.")]),e._v(" "),a("p",[e._v("You can deactivate Json or simple mode following theses instructions:")]),e._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("jsonPublishing "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//comment if you don't want to use Json  publishing  (one topic for all the parameters)")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('//example home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4 {"rssi":-63,"servicedata":"fe0000000000000000000000000000000000000000"}')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//#define simplePublishing true //comment if you don't want to use simple publishing (one topic for one parameter)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//example ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4/rssi -63.0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4/servicedata fe0000000000000000000000000000000000000000")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("simpleReceiving "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//comment if you don't want to use old way reception analysis")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[e._v("jsonReceiving "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//comment if you don't want to use Json  reception analysis")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("If you are using platformio you can also comment the definitions above and define your parameters into platformio.ini file by setting the following "),a("code",[e._v("build_flags")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-DjsonPublishing=true'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-DjsonReceiving=true'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-DsimpleReceiving=true'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-DsimplePublishing=true'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Note that depending on the environment the default platformio.ini has common option defined see sections:")]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[com-arduino]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[com-esp]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("If you want to use HASS MQTT discovery you need to have\n"),a("code",[e._v("#define jsonPublishing true")]),e._v("\n&\n"),a("code",[e._v('#define ZmqttDiscovery "HADiscovery"')]),e._v("\nuncommented.\nAdded to that auto discovery box should be selected into your Home Assistant MQTT integration configuration.")]),e._v(" "),a("p",[e._v("With an ESP if you did not set your network and mqtt parameters manualy you can now open the "),a("RouterLink",{attrs:{to:"/upload/portal.html"}},[e._v("web portal configuration")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("simpleReceiving on Arduino boards doesn't accept 64 bits MQTT values, you can only send 32bits values from the MQTT broker.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);