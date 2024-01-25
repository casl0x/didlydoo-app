import { displayEvent } from "./displayEvent";

export function addMoreEvent (postInfos) {
    const formEvent = document.querySelector('.input');

    formEvent.addEventListener('submit', async function(e){
        e.preventDefault();
        const eventName = document.getElementById('etitle').value;
        const eventAuthor = document.getElementById('eauthor').value;
        
        const datesArray = [];
        const sel = document.querySelector('select');
        for (let i = 0; i < sel.options.length; i++){
            const optionValue = sel.options[i].value;
            datesArray.push(optionValue)
        }

        const eventDescription = document.getElementById('edescription').value;

        fetch(postInfos(eventName, datesArray, eventAuthor, eventDescription))
        .then(displayEvent);
    });
}

export default datesArray;