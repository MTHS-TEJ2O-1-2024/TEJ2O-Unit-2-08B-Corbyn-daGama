/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2024
 * This program Changes the colour of the RGB LED
*/
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P13,0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () { })



//Red

pins.digitalWritePin(DigitalPin.P13,1)
basic.showString('Red')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P13,0)

// Green
==
pins.digitalWritePin(DigitalPin.P14, 1)
basic.showString('Green')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P14,0)


// Blue

pins.digitalWritePin(DigitalPin.P15, 1)
basic.showString('Blue')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P15, 0)

// Magenta

pins.digitalWritePin(DigitalPin.P13,1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.showString('Magenta')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P13, 0)

//Yellow

pins.digitalWritePin(DigitalPin.P13,1)
pins.digitalWritePin(DigitalPin.P14,1)
basic.showString('Yellow')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)

//Cyan

pins.digitalWritePin(DigitalPin.P14,1)
pins.digitalWritePin(DigitalPin.P15,1)
basic.showString('Cyan')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

//white

pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.showString('White')
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P15, 0)


