// Function that console logs all odd numbers from 1 - 20

function printOdds() {
    for (var i =1; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

// printOdds()

// Function that console logs modulus 3 from 100 down to 0

function decrease3() {
    for (var i = 100; i >= 0; i--) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}

// decrease3()

// Function that console logs the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5

function printSequence() {
    for (var i = 4; i >= -3.5; i -= 1.5) {
        console.log(i)
    }
}

// printSequence()

// Function that adds all values 1-100 in var sum, and console log all numbers adding to 5050

function sigma() {
    var sum = 0
    for (var i = 1; i <= 100; i++) {
        sum + i
    }
}

// Function that multiplies all values from 1-12 and console logs all numbers equalling 479001600

function factorial() {

}