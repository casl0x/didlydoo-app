import { getAllEvents } from "./dataBaseFunction.js";
import { createEvent } from "./createevent.js";

export function displayEvent(listEvent){
    const eventContainer = document.querySelector('.list-event');

    if (!eventContainer){
        return;
    }

    getAllEvents()
        .then(events => {
            if(!events){
                eventContainer.innerHTML = 'No event !'
                return
            }
            
            for(const element of events){
                eventContainer.appendChild(createEvent(element))
            }
        })
        .catch(err => {
            console.log(err);
        });
}