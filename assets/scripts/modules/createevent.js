import { editEvent, deleteEvent} from "./dataBaseFunction";
import { displayEvent } from "./displayEvent";

export function createEvent (element) { 

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        const eventNameElement = document.createElement('h2');
        eventNameElement.classList.add('event-name');
        eventNameElement.textContent = element.name;
        
        element.dates.forEach(date => {
            const eventDatesElement = document.createElement('p');
            eventDatesElement.classList.add('event-dates');
            eventDatesElement.textContent = `Dates : ${date}`;

            eventDiv.appendChild(eventDatesElement);
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
        editButton.addEventListener('click', editFunction);
        editButton.eventId = element.id;
        async function editFunction(e){
            fetch(editEvent(e.currentTarget.eventId))
            .then(displayEvent)
        }

        eventDiv.appendChild(eventNameElement);
        eventDiv.appendChild(eventAuthorElement);
        eventDiv.appendChild(eventDescriptionElement);
        eventDiv.appendChild(deleteButton);
        eventDiv.appendChild(editButton) 
        
        document.querySelector('.list-event').appendChild(eventDiv);
}