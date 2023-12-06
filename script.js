const inputBox = document.getElementById("inputBox")
const reminders = document.getElementById("reminders")

function addTask(){
    if(inputBox.value === ''){
        alert('Devi inserire almeno un task!')
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        reminders.appendChild(li)
    }
}
