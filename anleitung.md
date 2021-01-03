# Schummelwürfel


## Schritt 1 @fullscreen

Die Hauptschleife: Immer wenn der @boardname@ nach links geneigt wird, zeigt der @boardname@ für 100 ms ein Schachbrettmuster
auf der 5x5 Matrix LED an und danach "denkt" sich der @boardname@ eine zufällige Zahl zwischen 1 und 6 aus. Dazu benutzt Du 
den Block ``||Math:wähle eine zufällige Zahl von .. bis ..||`` und speicherst diesen Wert in die Variable ``||Variables:Augen||``. 

```blocks
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
        Augen = randint(1, 6)
        }
    }
})
```


## Schritt 2 @fullscreen

Erstelle eine Funktion ZeigeAugen mit einem numerischen Parameter "AnzahlAugen" und rufe die Funktion unmittelbar nach der Zufallsberechnung auf.
Ergänze die Funktion selbständig für jede mögliche Augenzahl zwischen 1 und 6, indem Du zusätzliche wenn - dann - Zweige mit dem PLUS einfügst .
Wir erstellen eine Funktion, weil wir immer die gleichen Programmcode für die Anzeige aufrufen und unser Programm so viel übersichtlicher wird.
   

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
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
        Augen = randint(1, 6)
        ZeigeAugen(Augen)
        }
    }
})
```

## Schritt 3

Jetzt kommt die Schummelfunktion: Das Schummeln besteht darin, daß unser Würfel eine höhere Augenzahl würfelt, wenn Du dran bist.
Dazu programmieren wir den @boardname@ mit einer geheimen Funktion! Wir wollen, daß nur dann die Schummelei wirksam ist, 
wenn wir beim Würfeln gleichzeitig die Taste A des @boardname@ drücken. Wir dürfen das natürlich keinem Mitspieler verraten!!  
Dann soll die Zufallsfunktion nicht mehr einen Wert zwischen 1 und 6 berechnen, sondern zum Beispiel einen Wert zwischen 4 und 6. 
Wir machen das so, damit das Ganze nicht zu offensichtlich ist, wenn wir immer eine 6 würfeln. 


## Schritt 4 @fullscreen

Wir erstellen zunächst eine Variable ``||Variables:MinimumAugen||`` und abhängig davon, ob beim Start des Würfelns durch das Schütteln
gleichzeitig die Taste A gedrückt wird oder nicht, speichern wir den Minimum Wert der gewünschte Augenzahl darin ab. Hier den Wert 4.
Jetzt müssen wir nur noch im Aufruf von ``||Math:wähle eine zufällige Zahl von .. bis ..||`` die 1 gegen die Variable ``||Variables:MinimumAugen||`` 
tauschen und schon funktioniert die Schummelei.

```blocks
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        if (input.buttonIsPressed(Button.A)) {
            MinimumAugen = 4
        } else {
            MinimumAugen = 1
        }
        basic.showIcon(IconNames.Chessboard)
        basic.pause(100)
        basic.clearScreen()
        Augen = randint(MinimumAugen, 6)
        ZeigeAugen(Augen)
        }
    }
})
```



