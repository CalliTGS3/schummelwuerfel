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
let Augen = 0
let Intervall = 0
let MinimumAugen = 0
let Austrudeln = 5
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        if (input.buttonIsPressed(Button.A)) {
            MinimumAugen = 4
        } else {
            MinimumAugen = 1
        }
        basic.turnRgbLedOff()
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
        Intervall = 10
        for (let Index = 0; Index <= Austrudeln; Index++) {
            Intervall = Intervall * 2
            if (Index == Austrudeln) {
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
