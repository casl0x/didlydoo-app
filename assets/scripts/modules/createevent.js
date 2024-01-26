import { editEvent, deleteEvent, getEvent } from "./dataBaseFunction";
import { displayEvent } from "./displayEvent";

export function createEvent (element) { 

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

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

        const attendDiv = document.createElement('div');
        attendDiv.classList.add('attendees');

        const availableForm = document.createElement('form');
        availableForm.classList.add('available')
        const availablePeople = document.createElement('input');
        availablePeople.type = 'texte';
        const availableDate = document.createElement('input');
        availableDate.type = 'date';
        const availableBtn = document.createElement('button');
        availableBtn.textContent = 'ok'
        availableBtn.addEventListener('click', () => {
                
        })

        availableForm.appendChild(availablePeople)
        availableForm.appendChild(availableDate)
        availableForm.appendChild(availableBtn)

        const participeEvent = document.createElement('button');
        participeEvent.classList.add('attendees-btn');
        participeEvent.textContent = 'Take part !'
        participeEvent.addEventListener('click', () => {
                availableForm.classList.toggle('participe')
        })

        const availableAttendeesElement = document.createElement('p');
        availableAttendeesElement.classList.add('attendees-available');
        const datesWithAvailableAttendees = element.dates.filter(date => {
            return date.attendees.some(attendee => attendee.available === true);
        });
        datesWithAvailableAttendees.forEach(dateObj => {
            const date = new Date(dateObj.date);
            const availableAttendees = dateObj.attendees.filter(attendee => attendee.available === true);
            const attendeesList = availableAttendees.map(attendee => attendee.name).join(', ');
            const dateInfo = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            const dateWithAttendeesInfo = `${dateInfo} - Available contact: ${attendeesList}`;
            const dateElement = document.createElement('p');
            dateElement.textContent = dateWithAttendeesInfo;
            availableAttendeesElement.appendChild(dateElement);
        })

        attendDiv.appendChild(participeEvent)
        attendDiv.appendChild(availableForm)
        attendDiv.appendChild(availableAttendeesElement)
        

        const div = document.createElement('div')
        div.classList.add('div')
        div.appendChild(eventDiv)
        div.appendChild(attendDiv)
        document.querySelector('.list-event').appendChild(div); 
}
