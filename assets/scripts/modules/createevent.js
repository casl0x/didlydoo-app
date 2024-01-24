import { editEvent, deleteEvent } from "./dataBaseFunction";

export function createEvent (element) { 
        const eventContainer = document.querySelector('.list-event');

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

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
        
        return eventDiv;
}

function deleteAction(eventId){

}

function editAction(eventId){

}