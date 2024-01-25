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
    document.querySelector('.event').appendChild(attendDiv)
    if (!attendees){
        attendDiv.innerHTML = 'No attendees ! '
    } else {
        
    }
}


