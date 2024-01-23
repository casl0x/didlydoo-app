
function addEvent (){
    const addBtn = document.querySelector('.form');
    const formEvent = document.querySelector('.event');

    addBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open');
    })
}

function closeForm (){
    const validateBtn = document.querySelector('.event-button');

    validateBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open')
    })
}

export {addEvent, closeForm}