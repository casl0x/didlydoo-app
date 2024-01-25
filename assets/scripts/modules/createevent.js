import { editEvent, deleteEvent} from "./dataBaseFunction";
import { displayEvent } from "./displayEvent";
import datesArray from "./addEvent.js";

export function createEvent (element) { 

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        const eventNameElement = document.createElement('h2');
        eventNameElement.classList.add('event-name');
        eventNameElement.textContent = element.name;
        
        datesArray.forEach(element => {
            const eventDatesElement = document.createElement('p');
            eventDatesElement.classList.add('event-dates');
            eventDatesElement.textContent = `Dates : ${element.dates}`;     
        });

        const eventAuthorElement = document.createElement('p');
        eventAuthorElement.classList.add('event-author');
        eventAuthorElement.textContent = `Author : ${element.author}`;

        const eventDescriptionElement = document.createElement('p');
        eventDescriptionElement.classList.add('event-description');
        eventDescriptionElement.textContent = `Description : ${element.description}`;

        // delete event 
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('event-delete');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', deleteFunction);
        deleteButton.eventId = element.id;
        async function deleteFunction(e){
                fetch(deleteEvent(e.currentTarget.eventId))
                .then(displayEvent);
                
        }

        // edit event 
        const editButton = document.createElement('button');
        editButton.classList.add('event-edit');
        editButton.textContent = "edit";
        //editButton.addEventListener('click', editEvent(element.id));

        eventDiv.appendChild(eventNameElement);
        eventDiv.appendChild(eventDatesElement);
        eventDiv.appendChild(eventAuthorElement);
        eventDiv.appendChild(eventDescriptionElement);
        eventDiv.appendChild(deleteButton);
        eventDiv.appendChild(editButton) 
        
        document.querySelector('.list-event').appendChild(eventDiv);
}

// function editAction(eventId){
//         editEvent(eventId)
// }
