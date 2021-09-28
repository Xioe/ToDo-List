let toDoInput, errorInfo, addBtn, ulList, newTask, popup, popupInfo, toDoEdit, popupInput, popupAddBtn, popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    // Pobieranie wszystkich element
    toDoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');

}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTaskText);
    toDoInput.addEventListener('keyup', enterKeyCheck)
}


const addNewTask = () => {
    if (toDoInput.value !== '') {
        newTask = document.createElement('li');
        newTask.textContent = toDoInput.value;
        createToolsArea();
        ulList.append(newTask);

        toDoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = "Wpisz treść zadania!";
        errorInfo.style.color = "tomato";
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTask.append(toolsPanel);

    const complateBtn = document.createElement('button');
    complateBtn.classList.add('complete');
    complateBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.append(complateBtn, editBtn, deleteBtn);
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
        editTask(e);

    } else if (e.target.matches('.delete')) {
        delateTask(e);

    } else {
        console.log('jakis blad');
    }
}

const editTask = e => {
    toDoEdit = e.target.closest('li');
    popupInput.value = toDoEdit.firstChild.textContent;
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
}

const changeTaskText = () => {
    if (popupInput.value !== '') {
        toDoEdit.firstChild.textContent = popupInput.value;
    } else {
        popupInfo.textContent = "Wpisz treść zadania!";
    }
}

const delateTask = (e) => {
    e.target.closest('li').remove();

    const allTasks = ulList.querySelectorAll('li');

    if (allTasks.length == 0) {
        errorInfo.textContent = "Lista zadań jest pusta";
    }
}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewTask();
    }
}

document.addEventListener('DOMContentLoaded', main);