const keyStorage= "keytask"
let MTL = []
let maxNumberIdTask = 1


let storageData = localStorage.getItem(keyStorage)


if(storageData != 0){
    MTL = JSON.parse(localStorage.getItem(keyStorage))
}


if(MTL.length > 0){
    MTL.forEach(t=>renderTaskItem(t))
    let maxNumberIdTask = MTL.map(x=>x,id).reduce((a,b) => Math.max(a,b), -Infinity)
}



document.getElementById("button").onclick = AddNewTask

document.getElementById("button").onclick = AddNewTask

function markDone(elem) {
    let labelElem = document.querySelector(`[for="${elem.id}"`)
    if (elem.cheked) {
        labelElem.style.textDecoration = 'line-through';
    } else {
        labelElem.style.textDecoration = 'none';
    }
}



document.getElementById('ul').onmouseover = showActions
function showActions(ev) {
    const btn = document.createElement('button')
    btn.innerText = 'удалить'
    ev.target.append(btn)

}

document.getElementById('ul').onmouseout = hideActions;

function hideActions(ev) {
    const btn = ev.target.getElementsByTagName('button').item(0)
    btn.parentMode.removeChild(btn)
}

document.addEventListener('keydown', check)
function check(ev) {
    if (ev.key === "Enter") {
        AddNewTask();
    }

}

function AddNewTask() {
    
    const TaskElem = document.getElementById('TaskImpt');
    const Task = TaskElem.value.trim()

    let newTask = {
        id: maxNumberIdTask,
        title: taskName
    }
    MTL.push(newTask)
    renderTaskItem(newTask)
    localStorage.setItem(keyStorage,MTL)
    JSON.stringify(MTL)
}

function renderTaskItem(){
    if (Task) {

        
        AddNewTask.innerHTML =
            `<div class="item-task">
            <input class="checkbox-task" type="checkbox" name="id-${maxNumberIdTask}" id="chbox-task-${Task.id}">
            <label for="chbox-task-${maxNumberIdTask}"></label>
            ${Task.title}
            </label>
            </div>`

        const listElem = document.getElementById('ul')
        const NewTaskElem = document.createElement("li")
        NewTaskElem.innerText = Task
        listElem.prepend(NewTaskElem)
    }
    TaskElem.value = ''
}