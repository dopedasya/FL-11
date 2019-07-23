let rootNode = document.getElementById('root');
const dt = document;
const addButt = dt.getElementById('add');
const inputTask = dt.getElementById('newTask');
const ulWrapp = dt.querySelector('ul');
const container = dt.getElementById('container');
const taskDiv = dt.getElementById('taskDiv');
const ten = 10;
const zf = 0.5;
function createTask(task) {
    let itemLi = dt.createElement('li');
    let checkbox = dt.createElement('button');
    let label = dt.createElement('label');
    let input = dt.createElement('input');
    let editButt = dt.createElement('button');
    let deleteButt = dt.createElement('button');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons checkboxButtonItem">check_box_outline_blank</i>';
    label.innerText = task;
    input.type = 'text';
    input.className = 'listInput';
    editButt.className = 'material-icons edit';
    editButt.innerHTML = '<i class="material-icons checkboxButtonItem">edit</i>';
    deleteButt.className = 'material-icons delete';
    deleteButt.innerHTML = '<i class="material-icons checkboxButtonItem">delete</i>';
    itemLi.appendChild(checkbox);
    itemLi.appendChild(label);
    itemLi.appendChild(input);
    itemLi.appendChild(editButt);
    itemLi.appendChild(deleteButt);
    itemLi.draggable = true;

    return itemLi;
}
function addTask() {
    if (inputTask.value) {
        let itemLi = createTask(inputTask.value);
        ulWrapp.appendChild(itemLi);
        bindTaskEvents(itemLi);
        inputTask.value = '';
    }
    if (!(ulWrapp.children.length < ten)) {
        let p = dt.createElement('p');
        p.className = 'notification';
        p.innerHTML = 'Maximum item per list are created';
        container.insertBefore(p, taskDiv);
        inputTask.disabled = 'disabled';
        addButt.removeEventListener('click', addTask);
    }
    sortable(ulWrapp);
}
addButt.addEventListener('click', addTask);
function deleteTask() {
    let itemLi = this.parentNode;
    let ul = itemLi.parentNode;
    ul.removeChild(itemLi);

    if (inputTask.disabled) {
        let p = dt.querySelector('.notification');
        container.removeChild(p);

        inputTask.disabled = false;
        addButt.addEventListener('click', addTask);
    }
}

function editTask() {
    let editButton = this;
    let itemLi = this.parentNode;
    let label = itemLi.querySelector('label');
    let input = itemLi.querySelector('input[type = text]');

    let containClass = itemLi.classList.contains('editMode');

    if (containClass) {
        label.innerText = input.value;
        editButton.className = 'material-icons edit';
        editButton.innerHTML = '<i class="material-icons checkboxButtonItem">edit</i>';
    } else {
        input.value = label.innerText;
        editButton.className = 'material-icons save';
        editButton.innerHTML = '<i class="material-icons checkboxButtonItem">save</i>';
    }

    itemLi.classList.toggle('editMode');
}

function doneTask() {
    let itemLi = this.parentNode;
    let checkbox = itemLi.querySelector('button.checkbox');
    checkbox.className = 'material-icons checkbox';
    checkbox.innerHTML = '<i class="material-icons checkboxButtonItem">check_box</i>';
    checkbox.removeEventListener('click', doneTask);
}

function bindTaskEvents(itemLi) {
    let deleteButton = itemLi.querySelector('button.delete');
    let editButton = itemLi.querySelector('button.edit');
    let checkbox = itemLi.querySelector('button.checkbox');

    deleteButton.addEventListener('click', deleteTask);
    editButton.addEventListener('click', editTask);
    checkbox.addEventListener('click', doneTask);
}

function sortable(rootEl) {
    let dragEl;
    
    function ondragover(event){
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        let target = event.target;
        if( target && target !== dragEl && target.nodeName === 'LI' ){       
            let rect = target.getBoundingClientRect();
            let next = (event.clientY - rect.top)/(rect.bottom - rect.top) > zf;
            rootEl.insertBefore(dragEl, next && target.nextSibling || target);
        }
    }
    function ondragend(event){
        event.preventDefault();
        rootEl.removeEventListener('dragover', ondragover, false);
        rootEl.removeEventListener('dragend', ondragend, false);
    }
    rootEl.addEventListener('dragstart', function (evt){
    dragEl = evt.target;     
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('Text', dragEl.textContent);    
    rootEl.addEventListener('dragover', ondragover, false);
    rootEl.addEventListener('dragend', ondragend, false);
    }, false);
}