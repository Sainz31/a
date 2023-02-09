input.onButtonPressed(Button.AB, function () {
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 2)))
    basic.pause(3000)
    basic.clearScreen()
})
radio.setGroup(1)
