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
            /*
            let eventDiv = document.createElement("div");
            eventDiv.className = "event";
            eventDiv.id = element.id;
            document.querySelector('main').appendChild(eventDiv);

            let title = document.createElement('h2');
            title.className = "eventName";
            let titleContent = document.createTextNode(element.name);
            title.appendChild(titleContent);
            eventDiv.appendChild(title);

            let author = document.createElement("p");
            author.className = "author";
            let authorContent = document.createTextNode(element.author);
            author.appendChild(authorContent);
            eventDiv.appendChild(author);

            let desc = document.createElement('p');
            desc.className = "eventDesc";
            let descContent = document.createTextNode(element.description);
            desc.appendChild(descContent);
            eventDiv.appendChild(desc);

            let creationDate = document.createElement('p');
            creationDate.className = "creationDate";
            let creationDateContent = document.createTextNode(element.created_at);
            creationDate.appendChild(creationDateContent);
            eventDiv.appendChild(creationDate);

            eventContainer.appendChild(eventDiv);
            */
        });
    }
        
}