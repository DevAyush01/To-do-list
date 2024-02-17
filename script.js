const inputBox = document.querySelector('#inputBox')
const listBox = document.querySelector('#list-box')

function Task(){
    if(inputBox.value === '')
    {
        alert("You must write Something")
    }
    else{
        let task = document.createElement('li')
        task.innerHTML = inputBox.value;
        listBox.appendChild(task)

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        task.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

listBox.addEventListener("click",function(chck){
    if(chck.target.tagName === "LI"){
        chck.target.classList.toggle("checked")
        saveData()
    }
    else if(chck.target.tagName === "SPAN"){
        chck.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data",listBox.innerHTML)
}

function showData(){
    listBox.innerHTML =localStorage.getItem("data")
}
showData();