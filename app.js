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
        errorInfo.textContent = "Wpisz treść zadania!"
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

const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
       editToDo();

    } else if (e.target.matches('.delete')) {
        e.target.closest('li').classList.toggle('delete');

    } else {
        console.log('jakis blad');
    }
}

const editToDo = () => {
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', main);