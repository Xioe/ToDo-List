let toDoInput, errorInfo, addBtn, ulList;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents;
}

const prepareDOMElements = () => {
    // Pobieranie wszystkich element
    toDoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

const prepareDOMEvents = () => {
    //nasłuchwainie eventow
}

document.addEventListener('DOMContentLoaded', main)