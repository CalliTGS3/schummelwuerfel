# Schummelwürfel

## ~avatar avatar @unplugged

Dein @boardname@ hat einen eingebauten Sensor, der die Lage und die Bewegung feststellen kann kann. Damit kann man prüfen, 
ob der @boardname@ gedreht ist, im freien Fall ist oder geschüttelt wird. Wir benutzen in unserem Würfelprogramm diesen Sensor,
um das "Nach links neigen" auszuwerten, damit wird der Vorgang des Würfelns ausgelöst. Das zufällige "Würfeln" einer Zahl zwischen 1 und 6
übernimmt unser @boardname@, das ist ganz leicht für ihn. Die gewürfelten Augen zeigen wir auf der 5x5 LED Matrix des @boardname@ an.
Wir wollen besser sein als unsere Mitspieler, sind clevere Programmierer und so programmieren wir den @boardname@ natürlich zu unserem Vorteil!
Deshalb heisst das Programm auch **"Schummelwürfel"**.


## Schritt 1 @fullscreen

Die Hauptschleife unseres Programmes fragt den Lagesensor ab: Immer wenn der @boardname@ nach links geneigt wird, zeigt der @boardname@ für 100 ms ein Schachbrettmuster
auf der 5x5 Matrix LED an und danach "denkt" sich der @boardname@ eine zufällige Zahl zwischen 1 und 6 aus. Plaziere dazu den Block 
``||Input:Bewegung nach links neigen||`` als Bedingung in der ``||Basic:dauerhaft||`` Hauptschleife des Programmes.
Mit den Blöcken ``||Basic:zeige Symbol||`` und ``||Basic:pausiere||`` signalisierst Du den Start des Würfelns. Mit dem Block ``||Math:wähle eine zufällige Zahl von .. bis ..||`` speicherst Du diesen Wert in die Variable ``||Variables:Augen||``. 

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

Jetzt kommt die Schummelfunktion: Das Schummeln besteht darin, daß unser Würfel eine höhere Augenzahl würfeln kann, wenn Du dran bist.
Dazu programmieren wir den @boardname@ mit einer geheimen Funktion! Wir wollen, daß nur dann die Schummelei wirksam ist, 
wenn wir beim "Nach links neigen" gleichzeitig die Taste A des @boardname@ drücken. Wir dürfen das natürlich keinem Mitspieler verraten!!  
Dann soll die Zufallsfunktion nicht mehr einen Wert zwischen 1 und 6 berechnen, sondern einen Wert zwischen 4 und 6. 
Wir machen das mit dem Bereich von 4 bis 6 so, damit das Ganze nicht zu offensichtlich ist, als wenn wir immer eine 6 würfeln. 


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


## Schritt 5 @fullscreen

Schliesse Deinen @boardname@ mit einem USB Kabel an und drücke auf ``|Herunterladen|``. Speichere Dein Programm auf dem Laufwerk **@drivename@**. 
Damit wird Dein Programm zum @boardname@ übertragen.


## Schritt 6

Gut gemacht! Du hast einen elektronischen Würfel für den @boardname@ programmiert.
Verlasse diese Anleitung, indem Du auf ``|Fertigstellen|`` klickst. 


## ~ @unplugged
Im Hauptmenü von makecode findest Du den Menüpunkt ``|Teilen|``. 
Klicke darauf, Du siehst anschließend ein Fenster in der Mitte mit dem Namen des Projektes. 
Klicke auf die Schaltfläche ``|Projekt veröffentlichen|`` und dann auf ``|Link|`` kopieren. 
Danach kannst Du diesen Link in der Schulcloud als Lösung zu der Aufgabe eintragen.


