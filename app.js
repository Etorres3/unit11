function name() {
    var n = prompt("Please enter your name")
    return n
}

function ran() {
    var num = math.floor(math.random() * 10) + 1
    return num
}

function user() {
    do {

        var hum = hum + ran()

        if (hum >= 20) {
            break
        }

        var yes = prompt(`Your total is ${hum}. If you would like to play another number press 'y' otherwise type f`)

    } while ((yes != "f") && (hum < 20))
    return hum
}

function com() {
    do {

        var com = com + ran()

        alert(`The computer got ${ran()}. The number is now ${com}`)

    } while (com <= 16)
    return com
}