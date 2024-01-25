import { postInfos } from "./dataBaseFunction";
import { displayEvent } from "./displayEvent";

export function addMoreEvent () {
    const formEvent = document.querySelector('.input');

    formEvent.addEventListener('submit', async function(e){
        e.preventDefault();
        const eventName = document.getElementById('etitle').value;
        const eventAuthor = document.getElementById('eauthor').value;
        const datesArray = [];
        datesArray.push(document.getElementById('edate').value);
        const eventDescription = document.getElementById('edescription').value;

        fetch(postInfos(eventName, datesArray, eventAuthor, eventDescription))
        .then(displayEvent);
    });
}