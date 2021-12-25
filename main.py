def on_button_pressed_ab():
    global game2, X
    if game2 == 0:
        game2 = 1
        X = 4
input.on_button_pressed(Button.AB, on_button_pressed_ab)

game2 = 0
X = 0
X = 4
game2 = 0
while game2 == 0:
    basic.show_leds("""
        # . # . #
                # . # . #
                . . . . #
                . . . # .
                . # # . .
    """)
    basic.show_leds("""
        . . # . .
                # # # # #
                . . # . .
                . . # . .
                . # . . .
    """)

def on_forever():
    global X, game2
    if input.button_is_pressed(Button.AB):
        X = X - 1
    elif input.button_is_pressed(Button.A):
        X = X + 1
    elif input.button_is_pressed(Button.B):
        X = X + 1
    else:
        X = X - 1
    if X == 4:
        basic.show_leds("""
            . # . # .
                        . # # # .
                        # # # # #
                        . # # # .
                        . # . # .
        """)
    elif X == 3:
        basic.show_leds("""
            # . # . .
                        # # # . .
                        # # # # #
                        # # # . .
                        # . # . .
        """)
    elif X == 2:
        basic.show_leds("""
            . # . . .
                        # # . . .
                        # # # # #
                        # # . . .
                        . # . . .
        """)
    elif X == 1:
        basic.show_leds("""
            # . . . .
                        # . . . .
                        # # # # #
                        # . . . .
                        # . . . .
        """)
    elif X == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . . . .
        """)
    elif X == 5:
        basic.show_leds("""
            . . # . #
                        . . # # #
                        # # # # #
                        . . # # #
                        . . # . #
        """)
    elif X == 6:
        basic.show_leds("""
            . . . # .
                        . . . # #
                        # # # # #
                        . . . # #
                        . . . # .
        """)
    elif X == 7:
        basic.show_leds("""
            . . . . #
                        . . . . #
                        # # # # #
                        . . . . #
                        . . . . #
        """)
    elif X == 8:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . . . .
        """)
    if X <= 0 or X >= 8:
        game2 = 0
    while game2 == 0:
        if X <= 0:
            basic.show_string("Awin")
        elif X >= 8:
            basic.show_string("Bwin")
basic.forever(on_forever)
