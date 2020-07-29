function play(element) {
    element.play()
}

function forward(element) {
    var forwardDuration = getForwardDurationFromConfig // Get forward duration from global configuration.
    element.pause()
    element.currentTime += forwardDuration
    element.play()
}

function rewind(element) {
    element.pause()
    element.currentTime = 0

    element.play() // If need to start video automatically.
}


