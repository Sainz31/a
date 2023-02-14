input.onButtonPressed(Button.A, function () {
    X += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(X + Y)
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 2)))
    basic.pause(3000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Y += 1
})
let X = 0
let Y = 0
Y = 0
X = 0
radio.setGroup(1)
