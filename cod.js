let maxNumberIdTask = 2

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

    if (Task) {

        maxNumberIdTask++
        AddNewTask.innerHTML =
            `<div class="item-task">
            <input class="checkbox-task" type="checkbox" name="id-${maxNumberIdTask}" id="chbox-task-${maxNumberIdTask}">
            <label for="chbox-task-${maxNumberIdTask}"></label>
            ${Task}
            </label>
            </div>`

        const listElem = document.getElementById('ul')
        const NewTaskElem = document.createElement("li")
        NewTaskElem.innerText = Task
        listElem.prepend(NewTaskElem)
    }
    TaskElem.value = ''


}