import { editEvent, deleteEvent } from "./dataBaseFunction";

export function createEvent (element) { 
        const eventContainer = document.querySelector('.list-event');

        const eventId = Date.now()

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.setAttribute('data-id', eventId)

        const eventNameElement = document.createElement('h2');
        eventNameElement.classList.add('event-name');
        eventNameElement.textContent = element.name;
        
        const eventDatesElement = document.createElement('p');
        eventDatesElement.classList.add('event-dates');
        eventDatesElement.textContent = `Dates : ${element.dates}`;

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
        deleteButton.addEventListener('click', deleteAction(element.id))

        // edit event 
        const editButton = document.createElement('button');
        editButton.classList.add('event-edit');
        editButton.textContent = "edit";
        editButton.addEventListener('click', editAction(element.id))

        eventDiv.appendChild(eventNameElement);
        eventDiv.appendChild(eventDatesElement);
        eventDiv.appendChild(eventAuthorElement);
        eventDiv.appendChild(eventDescriptionElement);
        eventDiv.appendChild(deleteButton);
        eventDiv.appendChild(editButton) 
        
        return eventDiv;
}

/*  → à vérifier
function deleteAction(eventId){
        deleteEvent(eventId)
}*/

function editAction(eventId){
        editEvent(eventId)
}