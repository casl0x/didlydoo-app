import { getAllEvents, getAllAttendees } from "./dataBaseFunction.js";
import { createEvent } from "./createevent.js";

export async function displayEvent(){
    const eventContainer = document.querySelector('.list-event');
    eventContainer.innerHTML = "";

    let events = await getAllEvents();
    if (!events){
        eventContainer.innerHTML = 'No event !'; 
    } else {    
        events.forEach(element => {
            createEvent(element);
        });
    }

    let attendees = await getAllAttendees();
    const attendDiv = document.createElement('div');
    attendDiv.classList.add('attendees')
    attendDiv.innerHTML = ""
    document.querySelector('.div').appendChild(attendDiv)
    if (!attendees){
        attendDiv.innerHTML = 'No attendees !'
    } else {
        attendees.forEach(element => {
            const attendDate = document.createElement('p')
            attendDate.textContent = element.dates;

            const attendAuthor = document.createElement('p')
            attendAuthor.textContent = element.name;
        })
    }
}


