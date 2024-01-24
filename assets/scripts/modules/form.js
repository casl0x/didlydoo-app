import { createEvent } from "./createevent.js";

export function addEvent (){
    const container = document.querySelector('.container');
    const addBtn = document.querySelector('.openbtn');
    const formEvent = document.querySelector('.form');

    addBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open');
        container.classList.toggle('blur');
    })
}

export function validateform (){
    const validateBtn = document.querySelector('.input-button');
    const formEvent = document.querySelector('.form');

    validateBtn.addEventListener('click', e => {
        formEvent.classList.toggle('open');
    })
}
