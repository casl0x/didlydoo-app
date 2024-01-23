function addEvent (){
    const container = document.querySelector('.container');
    const addBtn = document.querySelector('.openbtn');
    const formEvent = document.querySelector('.form');

    addBtn.addEventListener('click', () => {
        formEvent.classList.toggle('open');
        container.classList.toggle('blur');
    })
}

export default addEvent