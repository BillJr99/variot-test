ESP8266VarIOT.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"",
""
)
basic.forever(function () {
    if (ESP8266VarIOT.isWifiConnected()) {
        ESP8266VarIOT.sendVarIOTTelemetry(
        "https://rpi4-variot",
        "443",
        "",
        "temperature",
        30
        )
    }
})
