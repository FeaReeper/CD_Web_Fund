
// function that changes name to a different naem
function changeName(elementId) {
    var nameElement = document.querySelector(elementId)
    nameElement.innerText = "Matthew Reep"
}

function removeAdd(elementId) {
    var connection_count = document.querySelector('#connection-count')
    var count = parseInt(connection_count.innerText)
    // console.log(count)
    count++
    connection_count.innerText = count

    var request_count = document.querySelector('#request-count')
    var count_2 = parseInt(request_count.innerText)
    count_2--
    request_count.innerText = count_2


    var removeRequest = document.querySelector(elementId)
    removeRequest.remove()
}

function removeSubtract(elementId) {
    var request_count = document.querySelector('#request-count')
    var count_2 = parseInt(request_count.innerText)
    count_2--
    request_count.innerText = count_2

    var removeRequest = document.querySelector(elementId)
    removeRequest.remove()
}

// function that removes the user from the request list
// var increase = document.getElementById('connection-count')
// var decrease = document.getElementById('request-count')

// function removeUser(elementId) {
//     var removeRequest = document.querySelector(elementId)
//     removeRequest.remove()
    // var accept = document.querySelector('.connection-accept')
    // var deny = document.querySelector('connection-deny')
    // if (accept == clicked) {
    //     addConnection(increase)
    // }
    // if (deny == clicked) {
    //     minusRequest(decrease)
    // }
// }

// function that adds count to connections 

// function addConnection(elementId) {
//     var count = parseInt(elementId.innerText)
//     count++
    // document.elementId.innerText = count
// }

// function to decrease number of connection requests

// function minusRequest(elementId) {
//     increase.innerText = parseInt(elementId - 1) 
// }

