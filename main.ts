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
        "rpi4-variot",
        "5000",
        "mongan",
        "temp",
        50
        )
    }
})
