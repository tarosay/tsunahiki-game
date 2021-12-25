input.onButtonPressed(Button.AB, function () {
    X = 4
})
let X = 0
X = 0
while (X == 0) {
    basic.showLeds(`
        # . # . #
        # . # . #
        . . . . #
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . . .
        `)
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        X = X - 1
    } else if (input.buttonIsPressed(Button.A)) {
        X = X + 1
    } else if (input.buttonIsPressed(Button.B)) {
        X = X + 1
    } else {
        X = X - 1
    }
    if (X == 4) {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            . # . # .
            `)
    } else if (X == 3) {
        basic.showLeds(`
            # . # . .
            # # # . .
            # # # # #
            # # # . .
            # . # . .
            `)
    } else if (X == 2) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # # # #
            # # . . .
            . # . . .
            `)
    } else if (X == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # # #
            # . . . .
            # . . . .
            `)
    } else if (X == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (X == 5) {
        basic.showLeds(`
            . . # . #
            . . # # #
            # # # # #
            . . # # #
            . . # . #
            `)
    } else if (X == 6) {
        basic.showLeds(`
            . . . # .
            . . . # #
            # # # # #
            . . . # #
            . . . # .
            `)
    } else if (X == 7) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # # # # #
            . . . . #
            . . . . #
            `)
    } else if (X == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    while (X <= 0 || X >= 8) {
        if (X <= 0) {
            basic.showString("Awin")
        } else if (X >= 8) {
            basic.showString("Bwin")
        } else if (input.buttonIsPressed(Button.AB)) {
            X = 4
        }
    }
})
