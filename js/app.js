
//info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//Task Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });

};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();

};

const changeTaskState = event => {
    event.target.classList.toggle('done')
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( elemento => {
        elemento.classList.contains('done') ? done.push(elemento) : toDo.push(elemento)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(elemento => tasksContainer.appendChild(elemento))
}

setDate();



