input.onButtonPressed(Button.AB, function () {
    if (game2 == 0) {
        game2 = 1
        X = 4
    }
})
let game2 = 0
let X = 0
X = 4
game2 = 0
while (game2 == 0) {
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
    if (X <= 0 || X >= 8) {
        game2 = 0
    }
    while (game2 == 0) {
        if (X <= 0) {
            basic.showString("Awin")
        } else if (X >= 8) {
            basic.showString("Bwin")
        }
    }
})
