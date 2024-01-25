import { createEvent } from "./createevent";
import { postInfos } from "./dataBaseFunction";

export function addMoreEvent () {
    const eventName = document.getElementById('etitle').value;
    const eventAuthor = document.getElementById('eauthor').value;
    const eventDescription = document.getElementById('edescription').value;
    
    let dates = [];
    const sel = document.querySelector('select');
    for (let i = 0; i< sel.options.length; i++){
        const optionValue = sel.options[i].value;
        dates.push(optionValue)
    }

    postInfos(eventName, dates, eventAuthor, eventDescription)
}
