import createEvent from "./createevent.js";

function validateform (){
    const validateBtn = document.querySelector('.event-button');
    const formEvent = document.querySelector('.form');

    validateBtn.addEventListener('click', e => {
        createEvent();
        formEvent.classList.toggle('open');
    })
}


export default validateform;
