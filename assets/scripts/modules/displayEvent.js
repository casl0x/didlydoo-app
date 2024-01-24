import { getAllEvents, getAllAttendees } from "./dataBaseFunction.js";
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

    getAllAttendees()
        .then(events => {
            if(!events){
                eventContainer.innerHTML = 'No attendees !'
                return
            }
            
            for(const element of events){
                const attendeeDiv = document.createElement('div');
                attendeeDiv.classList.add('attende');

                const dispoDate = document.createElement('p')
                dispoDate.textContent = element.dates
                attendeeDiv.appendChild(dispoDate);

                eventContainer.appendChild(attendeeDiv);
            }
        })
        .catch(err => {
            console.log(err);
        });
        
}