input.onButtonPressed(Button.A, function () {
    comotuquieras = 0
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
})
input.onButtonPressed(Button.B, function () {
    uña = 0
})
let uña = 0
let comotuquieras = 0
radio.setGroup(1)
