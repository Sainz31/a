input.onButtonPressed(Button.AB, function () {
    radio.sendString("13")
})
radio.onReceivedString(function (receivedString) {
    led.plot(0, 0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
