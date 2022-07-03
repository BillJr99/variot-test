ESP8266VarIOT.connect_wifi(SerialPin.P0,
    SerialPin.P1,
    BaudRate.BAUD_RATE115200,
    "mongan",
    "responsibilit1")
basic.pause(5000)
if ESP8266VarIOT.is_wifi_connected():
    basic.show_icon(IconNames.HEART)
else:
    basic.show_icon(IconNames.NO)

def on_forever():
    if ESP8266VarIOT.is_wifi_connected():
        ESP8266VarIOT.send_var_iot_telemetry("rpi4-variot", "5000", "mongan", "temp", 50)
        basic.pause(5000)
        if ESP8266VarIOT.is_var_iot_connected():
            basic.show_icon(IconNames.YES)
        else:
            basic.show_icon(IconNames.CHESSBOARD)
        basic.pause(1000)
        if ESP8266VarIOT.is_last_upload_successful():
            basic.show_icon(IconNames.HAPPY)
        else:
            basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
