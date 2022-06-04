let Soundlvl = 0
radio.setGroup(99)
radio.setTransmitSerialNumber(true)
basic.forever(function on_forever() {
    
    Soundlvl = input.soundLevel()
    if (Soundlvl >= 120) {
        radio.sendValue("left", Soundlvl)
        basic.pause(5000)
    }
    
})
