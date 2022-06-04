Soundlvl = 0
radio.set_group(99)
radio.set_transmit_serial_number(True)

def on_forever():
    global Soundlvl
    Soundlvl = input.sound_level()
    if Soundlvl >= 120:
        radio.send_value("left", Soundlvl)
        basic.pause(5000)
basic.forever(on_forever)
