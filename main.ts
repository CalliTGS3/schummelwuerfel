function ZeigeAugen (AnzahlAugen: number) {
    if (AnzahlAugen == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (AnzahlAugen == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (AnzahlAugen == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (AnzahlAugen == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (AnzahlAugen == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (MinimumAugen == 1) {
        MinimumAugen = 3
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
    } else {
        MinimumAugen = 1
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
    }
})
let Augen = 0
let Intervall = 0
let MinimumAugen = 0
let Austrudeln = 10
MinimumAugen = 1
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.turnRgbLedOff()
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
        Intervall = 2 ** Austrudeln
        for (let index = 0; index < Austrudeln; index++) {
            Intervall = Intervall / 2
            if (Intervall == 1) {
                Augen = randint(MinimumAugen, 6)
                basic.setLedColor(0x00ff00)
            } else {
                Augen = randint(1, 6)
            }
            ZeigeAugen(Augen)
            basic.pause(Intervall)
        }
    }
})
