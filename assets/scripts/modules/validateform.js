import createEvent from "./createevent.js";

function closeForm (){
    const validateBtn = document.querySelector('.event-button');
    const formEvent = document.querySelector('.form');

    validateBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open');
        createEvent()
    })
}


export default closeForm;
