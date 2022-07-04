let ready = 0
ESP8266VarIOT.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"mongan",
""
)
ESP8266VarIOT.configureVarIOT("192.168.163.16", "5000")
basic.pause(5000)
if (ESP8266VarIOT.isWifiConnected()) {
    basic.showIcon(IconNames.Heart)
} else {
    basic.showIcon(IconNames.No)
}
basic.pause(1000)
basic.clearScreen()
ready = 1
basic.forever(function () {
    if (ready == 1) {
        ESP8266VarIOT.sendVarIOTTelemetry("mongan", "temp", 50)
        ESP8266VarIOT.sendVarIOTTelemetryByDeviceName(
        "my_devices",
        "Mongan Gateway",
        "temp",
        55
        )
        basic.pause(5000)
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
