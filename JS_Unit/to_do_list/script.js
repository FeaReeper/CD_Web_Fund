
let myList = document.querySelector("#list")

function addTodo(e) {
    // preventDefault stops the page from refreshing when the button in clicked
    e.preventDefault()
    // setting the currentList to read it as JSON and parseing through it to turn it into something usable
    let currentList = JSON.parse(sessionStorage.getItem("list"))
    // setting a condition that if the currentList is null (meaning nothing added so nothing to parse through)
    if (currentList == null){
        // so if it is null create a list of an array, list being the key and the array [] being the value
        sessionStorage.setItem("list", "[]")
    }
    // setting a variable as the value of what the user inputs for the to-do list
    const userInput = document.querySelector("#input").value
    // setting the currentList to parse through and get the added item/input from the list
    currentList = JSON.parse(sessionStorage.getItem("list"))
    // What is this doing exactly???
    sessionStorage.setItem("list",JSON.stringify([...currentList,{name:userInput}]))
    
    let renderedList = JSON.parse(sessionStorage.getItem("list"))
    
    let htmlString = ""

    renderedList.map((item,idx)=>{
        htmlString +=
        `<div class-"card">
            ${item.name}
            <button class="delete" onclick="deleteItem(${idx})">Delete</button>
        </div>`
    })

    myList.innerHTML = htmlString

    e.target[0].value = ""
}

function deleteItem(id) {
    let currentList = JSON.parse(sessionStorage.getItem("list"))

    const newList = currentList.filter((item,idx)=>(
        idx != id
    ))
    
    sessionStorage.setItem("list",JSON.stringify([...newList]))

    let renderedList = JSON.parse(sessionStorage.getItem("list"))
    
    let htmlString = ""
    
    renderedList.map((item,idx)=>{
        htmlString +=
        `<div class="card">
            ${item.name}
            <button class="delete" onclick="deleteItem(${idx})">Delete</button>
        </div>`
    })

    myList.innerHTML = htmlString

}