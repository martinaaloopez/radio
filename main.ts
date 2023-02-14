input.onButtonPressed(Button.A, function () {
    X += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(X * 10 + Y)
    radio.sendString("Martina")
    radio.setGroup(1)
    Y = 0
    X = 0
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
})
input.onButtonPressed(Button.B, function () {
    Y += 1
})
let X = 0
let Y = 0
radio.setGroup(1)
Y = 0
X = 0
