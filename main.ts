let j = 0
input.onGesture(Gesture.Shake, function () {
    j = randint(0, 10)
    basic.showNumber(j)
    if (j >= 5) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
