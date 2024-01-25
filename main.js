import { postInfos, editEvent, deleteEvent, addDates, attendEvent, editAttendance, getEvent, getAllEvents, getAllAttendees, getAttendee } from "./assets/scripts/dataBaseFunctions.js";
/*
function test(){
    postInfos("Test", ['2022-03-12', '2022-03-13', '2022-03-14', '2022-03-15'], "Denis", "Ceci est un test");
}
*/

async function test(){
    let data = await getAllEvents();
    //console.log(data);
    
    data.forEach(element => {
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

    });
    
}

function testBis(){
    postInfos("Test", ['2022-03-12'], "Dany", "New description");
}

let button = document.querySelector(".test");
button.addEventListener('click', test);

let editButton = document.querySelector(".testBis");
editButton.addEventListener('click', testBis);