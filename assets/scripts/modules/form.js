export function addEvent (){
    const container = document.querySelectorAll('.container');
    const addBtn = document.querySelector('.openbtn');
    const formEvent = document.querySelector('.form');

    addBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open');
        container.forEach((element) => {
            element.classList.toggle('blur');
        })
       
    })
}

export function validateform (){
    const container = document.querySelectorAll('.container');
    const validateBtn = document.querySelector('.input-button');
    const formEvent = document.querySelector('.form');

    validateBtn.addEventListener('click', e => {
        container.forEach((element) => {
            element.classList.toggle('blur');
        })
        formEvent.classList.toggle('open');
    })
}