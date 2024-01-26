import { editEvent, deleteEvent, postInfos, getEvent } from "./dataBaseFunction";
import { displayEvent } from "./displayEvent";

export function createEvent (element) { 

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.setAttribute('data-id', element.id)

        const eventNameElement = document.createElement('h2');
        eventNameElement.classList.add('event-name');
        eventNameElement.textContent = element.name;
        
        const eventDatesElement = document.createElement('p');
        eventDatesElement.classList.add('event-dates');
        const formattedDates = element.dates.map(dateObj => {
                const date = new Date(dateObj.date);
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        });
        eventDatesElement.textContent = `Dates : ${formattedDates.join(', ')}`;

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
        editButton.addEventListener('click', formEditEvent);
        editButton.eventId = element.id;

        async function formEditEvent(e){
                let elemId = e.currentTarget.eventId; 

                let data = await getEvent(elemId);
                console.log(data);

                const container = document.querySelectorAll('.container');
                const formEvent = document.querySelector('.editForm');
                const validateBtn = document.querySelector('.edit-input-button');
                formEvent.classList.toggle('open');
                container.forEach((element) => {
                element.classList.toggle('blur');
                })

                document.querySelector("#editetitle").value = data.name;
                document.querySelector('#editeauthor').value = data.author;
                document.querySelector("#editedescription").value = data.description;                
                
                validateBtn.addEventListener('click', e => {
                        container.forEach((element) => {
                        element.classList.toggle('blur');
                        })
                        formEvent.classList.toggle('open');
                })
                
        }

        async function editEventFunction(e){
                editEvent(id, name, author, desc)
        }

        eventDiv.appendChild(eventNameElement);
        eventDiv.appendChild(eventDatesElement);
        eventDiv.appendChild(eventAuthorElement);
        eventDiv.appendChild(eventDescriptionElement);
        eventDiv.appendChild(deleteButton);
        eventDiv.appendChild(editButton) 

        const div = document.createElement('div')
        div.classList.add('div')
        div.appendChild(eventDiv)
        document.querySelector('.list-event').appendChild(div);
        
}
