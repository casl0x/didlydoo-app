import { getAllEvents } from "./dataBaseFunction.js";
import { createEvent } from "./createevent.js";


export async function displayEvent(){
    const eventContainer = document.querySelector('.list-event');
    eventContainer.innerHTML = "";

    let events = await getAllEvents();
    if (!events){
        eventContainer.innerHTML = 'No event'; 
    } else {
        
        events.forEach(element => {
            createEvent(element);
        });
    }
        
}