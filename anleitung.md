# Schummelwürfel


## Schritt 1

Die Hauptschleife: Immer wenn der @boardname@ nach links geneigt wird, fängt die Berechnung an.

```blocks
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.clearScreen()
            Augen = randint(1, 6)
        }
    }
})
```


## Schritt 2

Erstelle eine Funktion ZeigeAugen mit einem numerischen Parameter "Augen".

```blocks
function ZeigeAugen (AnzahlAugen: number) {
    if (AnzahlAugen == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
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

basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.clearScreen()
            Augen = randint(1, 6)
            ZeigeAugen(Augen)
        }
    }
})
```

## Schritt n

```blocks
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
```


