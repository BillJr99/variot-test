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
        basic.pause(5000)
        if (ESP8266VarIOT.isWifiConnected()) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        basic.pause(1000)
        if (ESP8266VarIOT.isVarIOTConnected()) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.Chessboard)
        }
        basic.pause(1000)
        if (ESP8266VarIOT.isLastUploadSuccessful()) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
