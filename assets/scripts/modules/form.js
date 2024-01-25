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
    const container = document.querySelector('.container');
    const validateBtn = document.querySelector('.input-button');
    const formEvent = document.querySelector('.form');

    validateBtn.addEventListener('click', e => {
        container.classList.toggle('blur');
        formEvent.classList.toggle('open');
        
        let dates = [];
        for (let o of document.querySelectorAll("#edates option"));
        {
        dates.push(o.value);
        } 
    })
}
