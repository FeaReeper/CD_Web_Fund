// Global variables
var input1

var input2

var result

var display = document.getElementById("display")

var operator = document.getElementsByClassName("operator")

var equals = document.getElementById("equals")

var display = document.getElementById("display")

// function to clear the display
function clr() {
    display.innerText = "0"
}

// function to display the numbers pressed
function press(num) {
    var current_display = parseInt(display.innerText)
    display.innerText = '' + current_display + num
    if(EventTarget.id === 'operator') {
        input1 = display.innerText
        display.innerText = 0
        return
    }
    else if (EventTarget.id === 'equals') {
        input2 = display.innerText
        return
    }
    console.log(input1, input2)
}


function setOP(math) {
    if (math == '+') {
        result = input1 + input2
        return result
    }
    if (math == '-') {
        result = input1 - input2
        return result
    }
    if (math == '*') {
        result = input1 * input2
        return result
    }
    if (math == '/') {
        result = input1 / input2
        return result
    }
    display.innerText = 0
}

function calculate() {
    display.innerText = result
}
