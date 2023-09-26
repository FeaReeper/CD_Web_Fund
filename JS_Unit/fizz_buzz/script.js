// This function console logs "FizzBuzz" if i is multiple of 3 and 5, "Fizz" if multiple of 3, "Buzz" if multiple of 5, and the number if not

function fizzBuzz(num, a, b) {
    for (var i = 1; i <= num; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log("FizzBuzz")
        }
        else if (i % a == 0) {
            console.log("Fizz")
        }
        else if (i % b == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

// Here we call the function and pass in parameters of the num we are searching up to followed by our multiples. 
fizzBuzz(100, 3, 5)