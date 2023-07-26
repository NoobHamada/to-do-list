let container = document.querySelector('div')
let input = document.querySelector('input')
let btn = document.querySelector('button')
let taskArr = []

// Check Over Input Field
btn.onclick = function () {
    if (input.value != '') {
        addTask(input.value)
        input.value = ''
    }
}

// Sending input.value to taskArr
function addTask(newTask) {
    const task = {
        id: Date.now(),
        text: newTask
    }
    
    taskArr.push(task)
    toPage(taskArr)
}

// Creating Div and Span for each array element in taskArr
function toPage(arrIndex) {
    arrIndex.forEach((e) => {
        let div = document.createElement('div')
        div.appendChild(document.createTextNode(e.text))
        container.appendChild(div)
        taskArr.shift()
        
        let span = document.createElement('span')
        span.appendChild(document.createTextNode('D E L E T E'))
        container.appendChild(span)
    })
}

// Pressing on Delete
container.addEventListener('click', (e) => {
    if (e.target.innerText == 'D E L E T E') {
        e.target.previousSibling.remove()
        e.target.remove()
    }
})